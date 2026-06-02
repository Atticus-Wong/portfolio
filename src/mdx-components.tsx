import type { MDXComponents } from 'mdx/types'
import ZoomableImage from '@/components/ZoomableImage'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import rosePine from '@/styles/rose-pine'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    p: ({ children }) => <p>{children}</p>,
    a: ({ children, href }) => (
      <a 
        href={href} 
        className="underline"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => <ul>{children}</ul>,
    ol: ({ children }) => <ol>{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote>{children}</blockquote>
    ),
    img: (props) => (
      <ZoomableImage 
        {...props} 
        alt={props.alt || "Article image"}
      />
    ),
    code: ({ children, className, ...props }) => {
      const match = /language-(\w+)/.exec(className || '')
      return match ? (
        <div className="article-code">
          <SyntaxHighlighter
            {...props}
            PreTag="div"
            language={match[1]}
            style={rosePine}
            customStyle={{ margin: 0, borderRadius: '0.5rem' }}
            className="text-sm"
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className="bg-gray-200 dark:bg-gray-800 rounded px-1 py-0.5 text-sm" {...props}>
          {children}
        </code>
      )
    },
    ...components,
  }
}
