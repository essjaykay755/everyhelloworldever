FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
LABEL coolify.deploymentId=rg0kc0ss0kcogkwc8c0wgg48
COPY ./dist .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf