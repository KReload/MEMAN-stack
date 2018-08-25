
FROM node:10 as build-stage

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./angular /usr/src/app

RUN npm install

ARG configuration=production

RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx

COPY --from=build-stage /usr/src/app/dist/out/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]