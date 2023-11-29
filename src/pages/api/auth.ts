// export { auth as default } from '@openlab/vercel-netlify-cms-github'

import { AuthorizationCode } from "simple-oauth2";
import { randomBytes } from "crypto";
import { config } from "../../libs/netlify/config";
import { scopes } from "../../libs/netlify/scopes";
import { NextRequest, NextResponse } from "next/server";

export const randomString = () => randomBytes(4).toString("hex");

export default async function auth(req: any, res: any) {

  //@ts-ignore
  const { host } = req.headers;
  const url = new URL(`https://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const provider = urlParams.get("provider") as string;

  // simple-oauth will use our config files to generate a client we can use to request access
  const client = new AuthorizationCode(config(provider));

  // we then make a build the request to our provider
  const authorizationUri = client.authorizeURL({
    // your callback url is important! More on this later
    redirect_uri: `https://${host}/api/callback?provider=${provider}`,
    //@ts-ignore
    scope: scopes[provider],
    state: randomString()
  });

  // and get redirected to Github for authorisation
  //@ts-ignore
  res.writeHead(301, { Location: authorizationUri });

  res.end();
};
