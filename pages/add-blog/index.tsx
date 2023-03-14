import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import BlogForm from "../../components/blogForm/BlogForm"
import { useState } from "react"
const AddBlog: NextPage = () => {
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(false)
  const addBlogHandler = async (data: any): Promise<void> => {

    const response = await fetch("/api/new-blog", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const res = await response.json()
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
      router.push('/')
    }, 5000)
    
  }

  return (
    <>

      <div className="bg-blue-200 mx-auto pa-4">
        <h2 className="max-w-lg w-full mx-auto font-bold text-center my-4 bg-blue-500 rounded">
          Add Blog
        </h2>
        {showAlert && (
          <div className="bg-green-500 text-white font-bold rounded">
            Post submitted successfully
          </div>
        )}
        <BlogForm addBlogHandler={addBlogHandler} />
      </div>
    </>
  )
}
export default AddBlog
