// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  fileData: string;
};


let fileData = 'file';

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  fileData = fileData + `  -  AAA`;

  res.status(200).json({ 
    name: 'API Works',
    fileData: fileData,
  });
}
