FROM nginx:1.16

MAINTAINER liuyuchuan liuyuchuan816@163.com

COPY ./build/ /usr/share/nginx/html/

COPY ./docker/react_website.conf /etc/nginx/conf.d/

EXPOSE 80
