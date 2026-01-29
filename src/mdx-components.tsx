import type { MDXComponents } from 'mdx/types'
import ZoomableImage from '@/components/ZoomableImage'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import rosePine from '@/styles/rose-pine'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="font-extrabold text-2xl max-w-[650px] mx-auto w-full">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-xl max-w-[650px] mx-auto w-full">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold text-lg mt-6 max-w-[650px] mx-auto w-full">{children}</h3>,
    h4: ({ children }) => <h4 className="font-bold max-w-[650px] mx-auto w-full">{children}</h4>,
    h5: ({ children }) => <h5 className="font-bold max-w-[650px] mx-auto w-full text-[#9f9f9f]">{children}</h5>,
    p: ({ children }) => <p className="leading-relaxed font-medium max-w-[650px] mx-auto w-full">{children}</p>,
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
    ul: ({ children }) => <ul className="list-disc pl-5 mb-4 space-y-2 max-w-[650px] mx-auto w-full">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-5 mb-4 space-y-2 max-w-[650px] mx-auto w-full">{children}</ol>,
    li: ({ children }) => <li className="font-medium">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4 max-w-[650px] mx-auto w-full">
        {children}
      </blockquote>
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
        <div className="max-w-[650px] mx-auto w-full">
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
