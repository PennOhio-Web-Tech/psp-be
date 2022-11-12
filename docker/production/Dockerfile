FROM node:14-alpine as development

WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN yarn prisma:generate
RUN yarn build

FROM node:14-alpine as production

COPY docker/config/sshd_config /etc/ssh/
COPY docker/config/startup.sh /app/startup.sh

RUN apk add openssh \
    && echo "root:Docker!" | chpasswd \
    && chmod +x /app/startup.sh \
    && cd /etc/ssh/ \
    && ssh-keygen -A

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package.json .
RUN yarn --only=production

COPY --from=development /app/prisma ./prisma
COPY --from=development /app/.env.production ./.env
RUN yarn prisma:generate

COPY --from=development /app/dist ./dist

EXPOSE 8000 2222
ENTRYPOINT [ "/app/startup.sh" ]