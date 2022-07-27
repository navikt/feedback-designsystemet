const withTM = require("next-transpile-modules")(["@navikt/ds-tokens"]);
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const config = () => {
  withBundleAnalyzer(
    withTM({
      serverRuntimeConfig: {
        // Will only be available on the server side
        azureAppClientId: process.env.AZURE_APP_CLIENT_ID,
        azureJwksUri: process.env.AZURE_OPENID_CONFIG_JWKS_URI,
        azureAppIssuer: process.env.AZURE_OPENID_CONFIG_ISSUER,
        azureAppWellKnownUrl: process.env.AZURE_APP_WELL_KNOWN_URL,
        azureAppJWK: process.env.AZURE_APP_JWK,
      },
    })
  );
};

const STUDIO_REWRITE = {
  source: "/studio/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/studio/:path*"
      : "/studio/index.html",
};

module.exports = config();
rewrites: () => [STUDIO_REWRITE];
