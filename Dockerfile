FROM node:14-alpine

ENV NODE_ENV production

WORKDIR /app
COPY website/package.json .
COPY website/.next/ .next/
COPY website/public/ public
# COPY .env.local .
# COPY website/redirects.json .
# COPY .env.local .
# COPY website/next.config.js .
# COPY node_modules node_modules/
RUN npm install
RUN npm run build

EXPOSE 3000
CMD npm start