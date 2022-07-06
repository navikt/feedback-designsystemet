FROM node:14-alpine

ENV NODE_ENV production

WORKDIR /app
COPY website/package.json .
COPY website/.next/ .next/
COPY website/public/ public
COPY website/pages/ pages
# COPY .env.local .
# COPY website/redirects.json .
# COPY .env.local .
# COPY website/next.config.js .
COPY website/node_modules/ node_modules/

EXPOSE 3000
CMD npm start
