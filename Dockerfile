FROM node:19.1.0 AS build
COPY . .
RUN yarn install
RUN export $(cat .env.production); yarn build


FROM nginx:1.22 AS deploy
WORKDIR /app
COPY --from=build build /app/
COPY nginx.conf /etc/nginx/nginx.conf
CMD [ "nginx", "-g", "daemon off;" ]