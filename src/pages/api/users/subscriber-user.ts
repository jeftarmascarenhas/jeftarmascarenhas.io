// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'

type Data = {
  email: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Endpoint not found' })
  }

  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = process.env.MAILCHIMP_API_SERVER

    const data = {
      email_address: email,
      status: 'subscribed'
    }
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    const response = await fetch(url, {
      body: JSON.stringify(data),
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    await response.json()

    if (response.status === 400) {
      return res.status(400).json({
        error: `Email cadastrado. Dúvidas envie um email para nftchoose@gmail.com`
      })
    }

    if (response.status > 400) {
      return res.status(400).json({
        error: `Houve um error. Envie um email para nftchoose@gmail.com`
      })
    }

    return res.status(201).json({ message: 'Email cadastrado com sucesso.' })
  } catch (error: any) {
    console.log('error: ', error)
    return res.status(500).json({
      error: error.message || error.toString()
    })
  }
}
