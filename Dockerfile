# Use Nginx as the base image
FROM nginx:alpine

# Copy the built Angular app to Nginx's default directory
COPY dist/frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80
