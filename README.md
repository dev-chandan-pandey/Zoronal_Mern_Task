# Review & Rating Platform

A full-stack company review and rating platform built with **Next.js**, **TypeScript**, **Node.js**, **Express.js**, and **MongoDB**.

Users can:

* Add companies
* Upload company logos
* Search & filter companies
* Add reviews and ratings
* Like reviews
* Sort reviews
* View average ratings

---

# Live Demo

## Frontend

```txt
https://your-frontend-url.vercel.app
```

## Backend

```txt
https://your-backend-url.onrender.com
```

---

# Tech Stack

## Frontend

* Next.js 15
* TypeScript
* TailwindCSS
* ShadCN UI
* React Query
* React Hook Form
* Zod
* Axios
* Framer Motion
* Sonner Toast

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* Cloudinary
* JWT Authentication
* Helmet
* Morgan

---

# Features

## Company Features

* Add company
* Upload company logo
* Company listing
* Search companies
* Sort companies
* Pagination
* View company details

## Review Features

* Add review
* Rating system
* Like reviews
* Sort reviews
* Average rating calculation
* Review listing

## UI/UX Features

* Responsive design
* Skeleton loading
* Toast notifications
* Debounced search
* Framer Motion animations
* Error boundaries
* Empty states

---

# Folder Structure

## Frontend

```txt
frontend/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── lib/
│   ├── validators/
│   ├── providers/
│   └── utils/
```

---

## Backend

```txt
backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   ├── utils/
│   ├── app.js
│   └── server.js
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/review-rating-platform.git
```

---

# Frontend Setup

```bash
cd frontend
npm install
```

## Create Environment File

### `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:3000
```

---

# Backend Setup

```bash
cd backend
npm install
```

## Create Environment File

### `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection

CLIENT_URL=http://localhost:3000

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

## Run Backend

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

# API Endpoints

# Company APIs

## Create Company

```http
POST /api/companies
```

## Get Companies

```http
GET /api/companies
```

## Get Company By ID

```http
GET /api/companies/:id
```

---

# Review APIs

## Add Review

```http
POST /api/reviews/:companyId
```

## Get Reviews

```http
GET /api/reviews/:companyId
```

## Like Review

```http
PATCH /api/reviews/like/:reviewId
```

---

# Authentication APIs

## Register User

```http
POST /api/auth/register
```

---

# Search & Sorting

## Search Companies

```txt
/api/companies?search=google
```

## Sort Companies by Rating

```txt
/api/companies?sort=rating
```

## Pagination

```txt
/api/companies?page=1&limit=6
```

---

# Performance Optimizations

## Backend

* MongoDB indexing
* Aggregated ratings
* Pagination
* Optimized queries

## Frontend

* Debounced search
* React Query caching
* Optimistic updates
* Skeleton loading

---

# Deployment

# Frontend Deployment (Vercel)

1. Push frontend to GitHub
2. Import project into Vercel
3. Add environment variables
4. Deploy

---

# Backend Deployment (Render)

1. Push backend to GitHub
2. Create Web Service on Render
3. Add environment variables
4. Deploy

---

# Future Improvements

* Login & Authentication
* Edit/Delete Reviews
* Dark Mode
* Social Sharing
* Admin Dashboard
* Review Replies
* Email Notifications
* Unit Testing
* CI/CD Pipeline

---

# Screenshots

## Home Page

(Add screenshot here)

## Company Details

(Add screenshot here)

## Add Review Modal

(Add screenshot here)

---

# Author

## Chandan Pandey

Built as part of a Full Stack Developer Assignment.

---

# License

This project is licensed under the MIT License.
