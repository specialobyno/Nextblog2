import { MongoClient } from "mongodb"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import BlogItem from "../../components/blogItem/BlogItem"
interface BlogPost {
  slug: string
}
const BlogDetails: NextPage<BlogPost> = ({blogPost}: any) => {
  const { query } = useRouter()

  return (
    <>
    <h1>The blog details page</h1>
    <div className="flex flex-col">
      <BlogItem {...blogPost}></BlogItem>
    </div>
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const connectLink = `mongodb+srv://benito:VUXzBrbQ3qUx0CGD@cluster0.xwtjmsq.mongodb.net/?retryWrites=true&w=majority`
  const client = await MongoClient.connect(connectLink)
  const blogPostsCollection = await client.db().collection("posts")
  const blogPostsCrude = await blogPostsCollection
    .find({}, { slug: 1 } as any)
    .toArray()
    client.close()
  const blogPosts = blogPostsCrude.map(({slug}) => {
    
    return {params: {slug}}
  })
  return {
    paths: blogPosts
    ,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async ({params}) => {
  const blogID = params?.slug
  const connectLink = `mongodb+srv://benito:VUXzBrbQ3qUx0CGD@cluster0.xwtjmsq.mongodb.net/?retryWrites=true&w=majority`
  const client = await MongoClient.connect(connectLink)
  const blogPostsCollection = await client.db().collection("posts")
  const blogPost: any = await blogPostsCollection
    .findOne({ slug: blogID })
    client.close()
    blogPost.id = blogPost._id.toString()
    delete blogPost?._id
  return {
    props: {
      blogPost
    }
  }
}

export default BlogDetails
