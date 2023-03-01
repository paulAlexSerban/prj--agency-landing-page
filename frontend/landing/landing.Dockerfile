# Install dependencies only when needed
FROM node:14.20.1 as deps
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/app/
RUN npm i -g npm@latest
RUN npm install
# if you build you code for production
# RUN npm ci --ony=production

# Rebuild the source code only when needed
FROM node:14.20.1 AS builder
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
COPY --from=deps /usr/src/app/node_modules ./node_modules
ARG NODE_ENV=devolpement
RUN echo ${NODE_ENV}
RUN NODE_ENV=${NODE_ENV} npm run build

# Production image, copy all the files and run next
FROM node:14.20.1 AS runner
WORKDIR /usr/src/app

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /usr/src/app/content ./content
COPY --from=builder /usr/src/app/core ./core
COPY --from=builder /usr/src/app/pages ./pages
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/styles ./styles
COPY --from=builder /usr/src/app/.eslintrc ./.eslintrc
COPY --from=builder /usr/src/app/jsconfig.json ./jsconfig.json
COPY --from=builder /usr/src/app/next.config.js ./next.config.js
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

# Expose
EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

# Command to run when the container is ready
# Separate arguments as separate values in the array
CMD [ "npm", "run", "start"]





# # Bundle app source
# COPY . /usr/src/app/


