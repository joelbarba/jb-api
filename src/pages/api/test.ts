// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';

type Data = {
  name: string;
  content: string;
};

const dbFile = './data.json';


// curl "https://jb-api.netlify.app/api/test"
// curl -X POST "https://jb-api.netlify.app/api/test" --data '{"username":"xyz","password":"xyz"}'

// curl -X GET "http://localhost:3000/api/test"
// curl -X POST "http://localhost:3000/api/test" -d 'param1=hello&param2=world'


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('----------------------------------------');

  if (!fs.existsSync(dbFile)) {
    fs.writeFileSync(dbFile, JSON.stringify({ var1: 'empty' }, null, 2));
  }


  if (req.method === 'GET') {
    console.log('GET request received');
      const content = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
      res.status(200).json({ 
        name: 'Test API Works',
        content,
      });

  }
  else if (req.method === 'POST') {
    console.log('POST request received');
    console.log('BODY = ', req.body);
    
    const content = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
    content.var2 = req.body.param1 || 'default value';
    content.var3 = req.body.param2 || 'default value';

    fs.writeFileSync(dbFile, JSON.stringify(content, null, 2));
    

    res.status(200).json({ 
      name: 'Test API Works',
      content,
    });

  }

}

