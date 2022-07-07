FROM node:16-alpine

ENV NODE_ENV production

WORKDIR /app
COPY website/ .
# COPY .env.local .
# COPY website/redirects.json .
# COPY .env.local .
# COPY website/next.config.js .
COPY node_modules/ node_modules/

EXPOSE 3000
CMD npm build
CMD npm start
