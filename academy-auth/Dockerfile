    FROM node:12.22-alpine

    COPY ["package.json", "package-lock.json", "/usr/src/"]

    WORKDIR /usr/src/

    RUN npm install

    COPY [".", "/usr/src/"]

    EXPOSE 3001

    CMD ["npm", "start", "main.ts" ]
