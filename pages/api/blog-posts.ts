//library imports
import { MongoClient } from "mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  key: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  description: string;
  image: StaticImageData;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    //get all blogs

    const client = await MongoClient.connect(
      "mongodb+srv://chris:MaJXk5VM5Xcqp4Ze@vidal.pl4gf.mongodb.net/blogs?retryWrites=true&w=majority"
    );

    const db = client.db();

    const blogCollection = db.collection("blogsCollection");

    const result = blogCollection.find({ id: "id goes here" });

    console.log(result);

    client.close();
  }

  res.status(200).json({
    message: "The blog has been delivered.",
  });
}
