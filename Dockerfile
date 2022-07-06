FROM node:16-alpine

ENV NODE_ENV production

WORKDIR /app
COPY website/ website/
# COPY .env.local .
# COPY website/redirects.json .
# COPY .env.local .
# COPY website/next.config.js .
COPY node_modules/ node_modules/
COPY package.json .

EXPOSE 3000
CMD npm start
