# Sử dụng Node.js LTS làm base image
FROM node:18 AS builder

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependency
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# Sử dụng một image nhỏ gọn hơn để chạy ứng dụng
FROM node:18-slim AS runner

# Thiết lập thư mục làm việc
WORKDIR /app

# Cài đặt các dependency production
COPY package*.json ./
RUN npm install --omit=dev

# Sao chép từ giai đoạn build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Thiết lập biến môi trường (tuỳ chỉnh nếu cần)
ENV NODE_ENV=production
ENV PORT=3000

# Expose port để container có thể lắng nghe
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]
