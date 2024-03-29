// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    azureAppClientId: process.env.AZURE_APP_CLIENT_ID,
    azureJwksUri: process.env.AZURE_OPENID_CONFIG_JWKS_URI,
    azureAppIssuer: process.env.AZURE_OPENID_CONFIG_ISSUER,
    azureAppWellKnownUrl: process.env.AZURE_APP_WELL_KNOWN_URL,
    azureAppJWK: process.env.AZURE_APP_JWK,
    robotToken: process.env.ROBOT_TOKEN,
  },
  i18n: {
    locales: ["no"],
    defaultLocale: "no",
  },
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ["cdn.sanity.io"],
  },
};
