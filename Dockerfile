FROM nginx:1.22

WORKDIR /app

COPY build /app/

COPY nginx.conf /etc/nginx/nginx.conf

ENV REACT_APP_SERVER_URL=http://localhost:8080

CMD [ "nginx", "-g", "daemon off;" ]