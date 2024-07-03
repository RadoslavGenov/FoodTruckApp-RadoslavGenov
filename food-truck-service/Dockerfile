# Stage 1: Build the application
FROM node:16-alpine AS build

WORKDIR /usr/src/app

# Copy package.json && package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build
RUN npm run build

# Stage 2: lightweight container with only production dependencies
FROM node:16-alpine

WORKDIR /usr/src/app

# Copy package.json && package-lock.json
COPY package*.json ./

# Install only prod dependencies
RUN npm install --only=production

# Copy the built app from the previous stage
COPY --from=build /usr/src/app/dist ./dist

# Expose 
EXPOSE 3000

# Run the application
CMD ["node", "dist/src/main"]