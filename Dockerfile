FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
LABEL coolify.deploymentId=gccgo8osgg4sgc8c840kck0s
COPY dist .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf