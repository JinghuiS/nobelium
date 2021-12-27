import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import BaseHeader from '@/components/BaseHeader'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps () {
  const { posts, header } = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext,
      posts,
      header
    },
    revalidate: 1
  }
}

const blog = ({ postsToShow, page, showNext, header }) => {
  return (
    <Container
      fullWidth={true}
      title={BLOG.title}
      description={BLOG.description}
      indexHeader={ <BaseHeader header={header} />}
    >
      <div className="md:max-w-4xl md:px-2 px-4 m-auto">
        <div className='md:grid grid-cols-2  gap-4'>
        {postsToShow.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
        </div>

        {showNext && <Pagination page={page} showNext={showNext} />}
      </div>
    </Container>
  )
}

export default blog
