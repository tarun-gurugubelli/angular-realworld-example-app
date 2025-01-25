FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install -g @angular/cli && npm install

COPY . .

# Expose port 4200 for Angular development server
EXPOSE 4300

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4300"]
