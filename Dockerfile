FROM nginx

MAINTAINER liuyuchuan <liuyuchuan816@163.com>

COPY ./build/ /usr/share/nginx/html/

COPY ./default.conf /etc/nginx/conf.d/
