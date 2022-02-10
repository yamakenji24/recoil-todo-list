# Recoil Todo Example

This example is a simple todo list that uses Next.js, Recoil and Prisma.

**To run this example**

1. Install dependencies and build
```
npm ci
docker compose up
```
2. Migrate and write initial data
```
npx prisma migrate dev --preview-feature --name init
npx prisma db seed
npx prisma generate
```