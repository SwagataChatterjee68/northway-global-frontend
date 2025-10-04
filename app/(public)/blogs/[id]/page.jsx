'use client'
import { use, useEffect, useState } from 'react'
import Image from 'next/image'

export default function BlogDetails({ params }) {
  const { id } = use(params)   // unwrap params
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://nortway.mrshakil.com/api/blogs/blog/${id}/`)
        if (!res.ok) throw new Error('Failed to fetch blog')
        const data = await res.json()
        setBlog(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
  }, [id])

  if (loading) return <div className="p-10 text-center">Loading...</div>
  if (error) return <div className="p-10 text-center text-red-500">Error: {error}</div>
  if (!blog) return <div className="p-10 text-center">Blog not found</div>

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-10 lg:px-10 xl:px-20 py-10">
      <h1 className="bl__title">{blog.title}</h1>

      <div className="flex items-center mb-6 mt-5 xl:mt-10">
        <p className="heading__sub__text">By: {blog.writer}</p>
        <p className="text__base">{blog.publishedDate}</p>
      </div>

      {blog.thumbnail && (
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          width={800}
          height={500}
          className="rounded-lg mb-6 w-full h-[50vh] object-cover"
          unoptimized
        />
      )}

      <p className="text-lg leading-relaxed mb-6">{blog.short_summary}</p>
      {blog.briefDesTwo && (
        <p className="text-lg leading-relaxed">{blog.briefDesTwo}</p>
      )}
    </div>
  )
}
