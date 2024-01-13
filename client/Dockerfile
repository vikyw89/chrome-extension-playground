FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx AS prod
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80


