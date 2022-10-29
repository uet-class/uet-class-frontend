FROM nginx:1.22

WORKDIR /app

COPY build /app/

COPY nginx.conf /etc/nginx/nginx.conf

CMD [ "nginx", "-g", "daemon off;" ]