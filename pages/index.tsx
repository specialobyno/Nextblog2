import type { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import BlogItem from "../components/blogItem/BlogItem"
import { BlogsType } from "../utils/types/type"
import { MongoClient } from "mongodb"

const HomePage: NextPage = ({blogPosts}: any) => {
 
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <title>NextJS crash course</title>
        <meta name="description" content="This is my second NextJS crash course app" />
      </Head>

      <h1>Blog Page</h1>
      {blogPosts.map(({ id, title, image, desc, details, slug }: BlogsType) => (
        <div key={id} className="flex flex-col">

          <BlogItem
            id={id}
            title={title}
            image={image}
            desc={desc}
            slug={slug}        />
        </div>
        
      ))}
    </div>
  )
}
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const connectLink = `mongodb+srv://benito:VUXzBrbQ3qUx0CGD@cluster0.xwtjmsq.mongodb.net/?retryWrites=true&w=majority`
  const client = await MongoClient.connect(connectLink)
  const blogPostsCollection = await client.db().collection("posts")
  const blogPostsCrude = await blogPostsCollection.find().toArray()
  const blogPosts = blogPostsCrude.map((blog) => {
    let newBlog: any = {...blog, id: blog._id.toString()}
    delete newBlog._id
    return newBlog
  })

  await client.close()
  return {
    props: {
      blogPosts: blogPosts.reverse()
    },
    revalidate: 5
  }
}


export default HomePage
