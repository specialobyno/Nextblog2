import { NextPage } from "next";
import { BlogsType } from "../../utils/types/type";
import { useRouter } from "next/router";
import Button from "../button/Button";
const BlogItem: NextPage<BlogsType> = ({title, image, desc, details, slug}) => {
   const {push} = useRouter()
   const onNavigate = () => {
    push(`/${slug}`)
   }
    return (
        <div className="max-w-sm mx-auto overflow-hidden rounded shadow-lg my-2">
           <img src={image} alt={title} className="w-full h-60" />
           <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">
                {title}
            </div>
            <p className="text-base text-grey-700">
                {desc}
            </p>
            {
            details && <p className="text-purple-400 text-base">
                {details}
            </p>
            }
            
           </div>
           {!details && <Button onClick={onNavigate}>Read More...</Button>}
           
        </div>
    )
}
export default BlogItem