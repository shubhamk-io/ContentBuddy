# Content Buddy Waitlist

Production-ready SaaS waitlist landing page for Content Buddy, built with React, Vite, Tailwind CSS, Framer Motion, Axios, Node.js, Express, MongoDB Atlas, and Mongoose.

## Features

- Premium dark AI SaaS landing page
- Mobile-first responsive design
- Glassmorphism cards and blue glow effects
- Framer Motion scroll animations
- Waitlist form with validation, loading state, success toast, and error toast
- Express API endpoint for waitlist signups
- MongoDB Atlas persistence with a `waitlist_users` collection
- Unique email enforcement and graceful duplicate responses

## Project Structure

```text
content-buddy-waitlist/
  client/
    src/
      components/
      hooks/
      pages/
      services/
  server/
    config/
    controllers/
    models/
    routes/
```

## Environment Variables

Create `client/.env`:

```env
VITE_API_URL=http://localhost:5000
```

Create `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/content_buddy?retryWrites=true&w=majority
```

Optional backend variable:

```env
CLIENT_URL=http://localhost:5173
```

## Setup

Install all dependencies from the root:

```bash
npm install
npm run install:all
```

Run the client and server together:

```bash
npm run dev
```

Or run them separately:

```bash
npm run dev --prefix server
npm run dev --prefix client
```

The frontend runs on:

```text
http://localhost:5173
```

The backend runs on:

```text
http://localhost:5000
```

## API

### POST `/api/waitlist`

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

Success response:

```json
{
  "success": true,
  "message": "Successfully joined waitlist"
}
```

Duplicate response:

```json
{
  "success": false,
  "message": "Email already exists"
}
```

## Production Notes

- Set `VITE_API_URL` to your deployed backend URL before building the client.
- Set `CLIENT_URL` on the backend to your deployed frontend URL for stricter CORS.
- Use MongoDB Atlas for `MONGODB_URI`.
- Build the frontend with `npm run build --prefix client`.
- Start the backend with `npm start --prefix server`.
