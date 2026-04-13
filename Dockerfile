FROM nginx:apline

WORKDIR /urs/share/nginx/html

COPY dist/ .

EXPOSE 80

CMD ["nginx", "-g", "deamon off;"]
