import { defaultMapImageUrl } from 'react-notion-x'

const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export default function filterHeaer ({ posts, block }) {
  if (!posts || !posts.length) return []
  const publishedPosts = posts
    .filter(post =>
      post?.type?.[0] === 'BaseHeader'
    )
    .filter(post => {
      const postDate = new Date(
        post?.date?.start_date || post.createdTime
      )
      return { ...post, header_bg: post.page_cover, postDate, header_icon: getPostIcon(post.h_id, block) }
    })
  return { header_bg: publishedPosts[0].page_cover, header_icon: getPostIcon(publishedPosts[0].h_id, block), ...publishedPosts[0] }
}
function getPostIcon (id, block) {
  const pageIcon = block[id].value?.format?.page_icon
  if (pageIcon) {
    if (pageIcon.startsWith('/')) return 'https://www.notion.so' + pageIcon
    if (pageIcon.startsWith('http')) return defaultMapImageUrl(pageIcon, block[id].value)
  }
}
