# Stage 1: Build the Angular application
FROM node:alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the Angular application in production mode
RUN npm run build --prod

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy built files from the previous stage to Nginx's HTML folder
COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
