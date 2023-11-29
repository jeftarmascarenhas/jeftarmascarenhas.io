const client: Record<any, any> = {
  github: {
    id: process.env.OAUTH_GITHUB_CLIENT_ID,
    secret: process.env.OAUTH_GITHUB_CLIENT_SECRET
  }
};

const auth: Record<any, any> = {
  github: {
    tokenHost: "https://github.com",
    tokenPath: "/login/oauth/access_token",
    authorizePath: "/login/oauth/authorize"
  },
};

export const config = (provider: any) => ({
  client: {
    id: client[provider].id,
    secret: client[provider].secret
  },
  auth: {
    tokenHost: auth[provider].tokenHost,
    tokenPath: auth[provider].tokenPath,
    authorizePath: auth[provider].authorizePath
  }
});

