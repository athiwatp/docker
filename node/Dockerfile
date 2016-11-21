FROM node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY ./app /usr/src/app/

# Install dependencies
RUN npm install

# Port
EXPOSE 3000

ENV PORT=3000
ENV NODE_ENV=production

CMD [ "npm", "start" ]
