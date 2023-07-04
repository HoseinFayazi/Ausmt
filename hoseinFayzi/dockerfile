FROM node:16.13.0

# add work dir
RUN mkdir -p /app
WORKDIR /app

# copy dependncy
COPY package.json . 
RUN npm install 

# copy app files 

COPY . .

# host 
EXPOSE 8000

# start app

CMD [ "node", "server.js" ]