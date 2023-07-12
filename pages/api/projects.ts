import { NextApiRequest, NextApiResponse } from 'next'
 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([{ id: 1, name: 'Project 1'}])
}
 
export default handler