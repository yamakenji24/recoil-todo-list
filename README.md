# Recoil Todo Example

This example is a simple todo list that uses Next.js, Recoil and Prisma.


**To run this example**

0. edit .env

1. Install dependencies and build
```
docker compose up
```
2. Migrate and write initial data
```
npx prisma migrate dev --preview-feature --name init
npx prisma db seed
```

**To run separetely**
1. Run Mysql container
```
docker-compose up mysql
```
2. Migrate and write initial data 
```
npx prisma migrate dev --preview-feature --name init
npx prisma db seed
npx prisma generate
```
3. Run Next.js 
```
npm ci
npm run dev
```
