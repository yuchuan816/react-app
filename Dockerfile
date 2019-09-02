FROM nginx:1.16

MAINTAINER liuyuchuan liuyuchuan816@163.com

COPY ./build/ /var/www/html/

COPY ./docker/blog_frontend.conf /etc/nginx/conf.d/

RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak

EXPOSE 80
