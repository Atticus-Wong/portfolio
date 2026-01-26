'use client'

import { useState } from 'react'

interface ZoomableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string
}

export default function ZoomableImage({ src, alt, ...props }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...props}
        src={src}
        alt={alt}
        className="rounded-xl shadow-lg w-full h-auto my-4 cursor-zoom-in hover:opacity-95 transition-opacity"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  )
}
