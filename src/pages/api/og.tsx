/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge'
}

// Make sure the font exists in the specified path:
const font = fetch(
  new URL('../../assets/fonts/Inter/static/Inter-Bold.ttf', import.meta.url)
).then(res => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  const fontData = await font
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const slug = searchParams.get('slug')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: '#319795',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            padding: '80px 30px 60px 80px',
            fontFamily: '"Inter"'
          }}
        >
          <div
            style={{
              fontSize: 70,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              fontWeight: 'bolder',
              color: 'white',
              marginTop: 10,
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap'
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              gap: 10,
              marginTop: 180,
              color: 'white'
            }}
          >
            <img
              width={200}
              height={200}
              src="https://www.jeftar.com.br/_next/image?url=%2Fassets%2Fimages%2Fprofile.jpeg&w=3840&q=75"
              alt="Jeftar Mascarenhas"
              style={{
                borderRadius: 200,
                objectFit: 'cover'
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h2
                style={{
                  fontSize: 26,
                  fontWeight: 'bolder'
                }}
              >
                Jeftar Mascarenhas
              </h2>
              {slug && (
                <h3
                  style={{
                    marginTop: 4
                  }}
                >{`jeftar.com.br/blog/${slug}`}</h3>
              )}
              <p
                style={{
                  marginTop: 4
                }}
              >
                twitter.com/jeftar
              </p>
              <p
                style={{
                  marginTop: 4
                }}
              >
                youtube.com/@nftchoose
              </p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'InterBold',
            data: fontData,
            style: 'normal'
          }
        ]
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
