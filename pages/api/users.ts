import { NextApiRequest, NextApiResponse } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  const data = { username: 'tonymikey', password: 'password' }
  res.status(200).send({ data })
}
