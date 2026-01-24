import type { MDXComponents } from 'mdx/types'
import ZoomableImage from '@/components/ZoomableImage'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="font-extrabold text-2xl max-w-[650px] mx-auto w-full">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-xl mt-6 max-w-[650px] mx-auto w-full">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold text-lg mt-6 max-w-[650px] mx-auto w-full">{children}</h3>,
    h4: ({ children }) => <h3 className="font-bold mt-6 max-w-[650px] mx-auto w-full">{children}</h3>,
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
    ...components,
  }
}
