// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { InsertOneResult } from "mongodb"
import { MongoClient } from "mongodb"

type Data = {
  message: string,
  post: InsertOneResult<Document>
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== "POST") return
  const { image, title, desc, details } = req.body
  if (!image || !title || !desc || !details) return
  const slug = title.replace(/\s+/g, "-").toLowerCase()
  const connectLink = `mongodb+srv://benito:VUXzBrbQ3qUx0CGD@cluster0.xwtjmsq.mongodb.net/?retryWrites=true&w=majority`
  const client = await MongoClient.connect(connectLink)

  const db = client.db()
  const postCollection = db.collection("posts")

  const result = await postCollection.insertOne({image, title, desc, details, slug})
  await client.close()
  res.status(201).json({
    post: result,
    message: "Post created"
  })
}

export default handler
