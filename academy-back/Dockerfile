    FROM node:12.22-alpine

    COPY ["package.json", "package-lock.json", "/usr/src/"]

    WORKDIR /usr/src/

    RUN npm install

    COPY [".", "/usr/src/"]

    EXPOSE 3002

    CMD ["npm", "start", "main.ts" ]