import { NextApiRequest, NextApiResponse } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  // res.status(200).send('hello world')
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'invalid API method' })
  }
  const { username, password } = req.body
  res.status(200).json({
    username,
    password
  })
}
