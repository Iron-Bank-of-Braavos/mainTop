FROM node:8

ENV PORT=80
COPY . /var/src/header/
WORKDIR /var/src/header
LABEL author="Brandon Xiong"
RUN npm install
VOLUME ["/var/src/header/data"]
EXPOSE 3000
CMD npm start && npm seed