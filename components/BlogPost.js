import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import Image from 'next/image'
const BlogPost = ({ post }) => {
  return (
    <div className='group hover:bg-gray-300 hover:bg-opacity-25 duration-200 transform' >
      <Link href={`${BLOG.path}/${post.slug}`}>
        <a className=' group-hover:bg-gray-300 group-hover:bg-opacity-25 '>
          {post?.page_cover && (
            <div className=" relative md:h-60 h-40 w-full  duration-200 cursor-pointer transform ">
              <Image
                className="object-cover md:h-60 h-40 w-full rounded-2xl  hover:-translate-y-1 hover:scale-105 transform duration-500 shadow-xl"
                src={post?.page_cover}
                alt={post.title}
                layout="fill"
              />
            </div>
          )}
          <article key={post.id} className="mb-6 md:mb-8 px-2 mt-2 ">
            <header className="flex flex-col justify-between md:flex-row md:items-baseline">
              <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100 truncate">
                {post.title}
              </h2>

            </header>
            <main>
              <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
                {post.summary}
              </p>
            </main>
            <footer>
            <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
                {formatDate(
                  post?.date?.start_date || post.createdTime,
                  BLOG.lang
                )}
              </time>
            </footer>
          </article>
        </a>
      </Link>
    </div>
  )
}

export default BlogPost
