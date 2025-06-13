// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';

type Data = {
  name: string;
  content: string;
};

const dbFile = './data.js';


// curl "https://jb-api.netlify.app/api/test"
export function GET(req: NextApiRequest, res: NextApiResponse<Data>) {

  const content = JSON.parse(fs.readFileSync(dbFile, 'utf8')); 

  res.status(200).json({ 
    name: 'Test API Works',
    content,
  });
}


// curl -X POST "https://jb-api.netlify.app/api/test"
export function POST(req: NextApiRequest, res: NextApiResponse<Data>) {

  fs.writeFileSync(dbFile, JSON.stringify({ var1: 'initial data' }, null, 2));
  
  const content = JSON.parse(fs.readFileSync('./data.js', 'utf8')); 

  res.status(200).json({ 
    name: 'Test API Works',
    content,
  });
}
