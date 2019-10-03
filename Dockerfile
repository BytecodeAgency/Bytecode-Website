# Use NodeJS to build the project to the /public folder
FROM node:12-alpine as bob-the-builder
WORKDIR /app
COPY . .
RUN yarn install --production --frozen-lockfile
RUN yarn run build

# Use Nginx to serve the /public artifacts
FROM nginx:1.17-alpine
WORKDIR /usr/share/nginx/html
COPY --from=bob-the-builder /app/public .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
