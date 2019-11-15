FROM openresty/openresty:alpine
COPY nginx.conf /usr/local/openresty/nginx/conf/
COPY build/mylogin/ /usr/local/openresty/nginx/html/
EXPOSE 80
EXPOSE 443
EXPOSE 88
