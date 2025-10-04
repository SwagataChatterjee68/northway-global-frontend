'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogCmp () {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://nortway.mrshakil.com/api/blogs/blog/')
        if (!response.ok) throw new Error('Network response was not ok')
        const data = await response.json()
        setBlogs(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 6)

  if (loading) return <div className='text-center py-10'>Loading blogs...</div>
  if (error) return <div className='text-center py-10 text-red-500'>Error: {error}</div>

  return (
    <div className='section__spacing'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full'>
        {visibleBlogs.map(blog => (
          <div
            key={blog.id}
            className='bg-white p-5 rounded-lg border border-black/10 group'
          >
            <div className='overflow-hidden'>
              {blog.thumbnail && (
                <>
                  {/* Try next/image, but if domain not allowed fallback to <img> */}
                  {process.env.NEXT_PUBLIC_USE_NEXT_IMAGE === 'true' ? (
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title || 'Blog post image'}
                      className='w-full h-72 object-cover rounded-md mb-4'
                      width={500}
                      height={300}
                      unoptimized // avoids domain config issues
                    />
                  ) : (
                    <img
                      src={blog.thumbnail}
                      alt={blog.title || 'Blog post image'}
                      className='w-full h-72 object-cover rounded-md mb-4'
                    />
                  )}
                </>
              )}
            </div>
            <Link href={`/blogs/${blog.id}`}>
              <h3 className='text__medium mb-2 line-clamp-1 group-hover:underline underline-offset-2 group-hover:!text-[#FF9100]'>
                {blog.title}
              </h3>
            </Link>
            <p className='text__base line-clamp-2'>{blog.short_summary}</p>
            <div className='mt-5'>
              <h4 className='text__medium font-semibold'>By: {blog.writer}</h4>
            </div>
          </div>
        ))}
      </div>

      {blogs.length > 6 && (
        <div className='mt-10 flex justify-center'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-6 py-2 bg-[#FF9100] text-white rounded-lg cursor-pointer'
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  )
}
