// export { callback as default } from '@openlab/vercel-netlify-cms-github'

import { AuthorizationCode } from "simple-oauth2";
import { config } from "../../libs/netlify/config";

export default async function callback(req: any, res:any) {
  const { host } = req.headers;
  const url = new URL(`https://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const code = urlParams.get("code");
  const provider = urlParams.get("provider");

  // we recreate the client we used to make the request
  const client = new AuthorizationCode(config(provider));

  // create our token object
  const tokenParams = {
    code,
    redirect_uri: `https://${host}/api/callback?provider=${provider}`
  };

  try {
    // try to create an access token from the client
    //@ts-ignore
    const accessToken = await client.getToken(tokenParams);
    const token = accessToken.token["access_token"];

    const responseBody = renderBody("success", {
      token,
      provider
    });

    res.statusCode = 200;
    res.end(responseBody);
  } catch (e) {
    res.statusCode = 200;
    res.end(renderBody("error", e));
  }
};

// This renders a simple page with javascript that allows the pop-up page
// to communicate with its opener
function renderBody(status: any, content: any) {
  return `
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:${content.provider}:${status}:${JSON.stringify(
    content
  )}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:${content.provider}", "*");
    </script>
  `;
}
