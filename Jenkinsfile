pipeline {
    agent {
        node {
            label 'docker-npm'
        }
    }

    environment {
        DOCKER_IMAGE = 'atticuswong174/portfolio:latest'
        
        // Credentials IDs - Update these in Jenkins
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
        SSH_CREDENTIALS_ID = 'automation-ssh-key'
        
        // Deployment Target Details
        SSH_USER = 'user'
        SSH_HOST = '192.168.0.240'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'No test script yet. Skipping tests.'
                }
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                        sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                        
                        // 1. Install QEMU emulators for multi-platform support
                        sh 'docker run --privileged --rm tonistiigi/binfmt --install all'
                        
                        // 2. Create and switch to a new builder that supports multi-platform
                        // Use || true to prevent failure if builder already exists
                        sh 'docker buildx create --name mybuilder --use || docker buildx use mybuilder'
                        sh 'docker buildx inspect --bootstrap'
                        
                        // 3. Execute the build
                        sh """
                            docker buildx build \
                            --platform linux/amd64 \
                            -t ${DOCKER_IMAGE} \
                            --push \
                            .
                        """
                    }
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                script {
                    withCredentials([sshUserPrivateKey(credentialsId: SSH_CREDENTIALS_ID, keyFileVariable: 'SSH_KEY')]) {
                        sh """
                            ssh -i ${SSH_KEY} -o StrictHostKeyChecking=no ${SSH_USER}@${SSH_HOST} '
                                # Pull the new image
                                sudo docker pull ${DOCKER_IMAGE}
                                
                                # Stop and remove the old container (ignore error if not running)
                                sudo docker stop portfolio || true
                                sudo docker rm portfolio || true
                                
                                # Run the new container
                                sudo docker run -d \
                                  --name portfolio \
                                  -p 127.0.0.1:3000 \
                                  --restart unless-stopped \
                                  ${DOCKER_IMAGE}
                            '
                        """
                    }
                }
            }
        }
    }
}
