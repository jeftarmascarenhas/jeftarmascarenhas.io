// https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCCyxBPhe_gCIFx85BLXsUMA&maxResults=25&order=date&key=[YOUR_API_KEY]

import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'isomorphic-unfetch'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let maxResults = '25'
  if (req.method !== 'GET') {
    return res.status(404).json({ error: 'Endpoint not found' })
  }

  if (req.query.maxResults !== undefined) {
    maxResults = req.query.maxResults as string
  }

  try {
    const YOUTUBE_V3_API_KEY = process.env.YOUTUBE_V3_API_KEY
    const YOUTUBE_CHANNEL_ID = `UCCyxBPhe_gCIFx85BLXsUMA`
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=${maxResults}&order=date&key=${YOUTUBE_V3_API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    return res.status(200).json(data)
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
