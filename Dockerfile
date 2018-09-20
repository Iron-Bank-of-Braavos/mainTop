FROM node:latest
ENV NODE_ENV production
ENV PORT=80
COPY . /
LABEL author="Brandon Xiong"
WORKDIR /
RUN npm install
VOLUME ["/var/header"]

EXPOSE 3000
CMD npm start