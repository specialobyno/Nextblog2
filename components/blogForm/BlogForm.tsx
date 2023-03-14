import { NextPage } from "next"
import Button from "../button/Button"
import { FormEvent, MutableRefObject, ReactElement, ReactNode, useRef } from "react"


interface Props {
    addBlogHandler: (data: any) => void
}

const BlogForm: NextPage<Props> = ({addBlogHandler}) => {
    const handleSubmit= (e: FormEvent): void=>{
        e.preventDefault()
        const formData = {
            title: titleRef.current?.value,
            image: imageRef.current?.value,
            desc: descRef.current?.value,
            details: detailsRef.current?.value
        }
        addBlogHandler(formData)
    }
const titleRef  = useRef<HTMLInputElement>(null)
const imageRef = useRef<HTMLInputElement>(null)
const descRef = useRef<HTMLInputElement>(null)
const detailsRef = useRef<HTMLInputElement>(null)

  return (
    <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label
          htmlFor=""
          className="block uppercase tracking-wide text-grey-700 text-xs font-bold mb-2"
        >
          Title
        </label>
        <input
            ref={titleRef}
          type="text"
          placeholder="title"
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label
          htmlFor=""
          className="block uppercase tracking-wide text-grey-700 text-xs font-bold mb-2"
        >
          Image
        </label>
        <input
        ref={imageRef}
          type="text"
          placeholder="image"
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label
          htmlFor=""
          className="block uppercase tracking-wide text-grey-700 text-xs font-bold mb-2"
        >
          Description
        </label>
        <input
        ref={descRef}
          type="text"
          placeholder="description"
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <label
          htmlFor=""
          className="block uppercase tracking-wide text-grey-700 text-xs font-bold mb-2"
        >
          Details
        </label>
        <input
        ref={detailsRef}
          type="text"
          placeholder="details"
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <Button color="success" type="submit" >Submit</Button>
    </form>
  )
}

export default BlogForm
