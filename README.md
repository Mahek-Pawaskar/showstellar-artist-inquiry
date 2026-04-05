# ShowStellar Artist Inquiry System

## Overview
This is a full-stack web application built as part of the ShowStellar hiring task. It allows users to browse artists and submit booking inquiries. An admin panel is included to view all submitted inquiries.

---

## Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB (Mongoose)

---

## Features

### Artists Page
- Displays 6 artist cards
- Each card includes:
  - Image
  - Name
  - Category (Singer, DJ, Anchor, Magician, Dancer, Comedian)
  - Location
  - Starting Price
- "Book Now" button opens a modal inquiry form

---

### Inquiry Form
- Opens as a modal overlay
- Fields:
  - Name (required)
  - Phone (required)
  - Event Date (required, valid date)
  - Location (optional)
  - Artist Name (auto-filled, non-editable)
  - Message (optional)
- Client-side validation
- Displays success/error messages
- Loading state during submission

---

### Backend API

#### POST `/api/inquiries`
Creates a new inquiry

**Required Fields:**
- name
- phone
- event_date
- artist_name

Returns:
- `201 Created` on success
- `400 Bad Request` if validation fails

---

#### GET `/api/inquiries`
Fetches all inquiries (used in admin panel)

---

### Database Schema

**Table: inquiries**

| Field        | Type      | Description                     |
|-------------|----------|---------------------------------|
| id          | ObjectId | Primary key                     |
| name        | String   | User's full name                |
| phone       | String   | Contact number                  |
| event_date  | Date     | Event date                      |
| location    | String   | Event location                  |
| artist_name | String   | Selected artist                 |
| message     | String   | Additional notes                |
| createdAt   | Date     | Auto timestamp                  |

---

### Admin Panel
- Displays all submitted inquiries
- Sorted by latest first
- Fetches data from backend API

---

### Bonus Implemented
- Responsive UI (mobile, tablet, desktop)
- Loading spinner during form submission
- Clean UI using Tailwind CSS
- Modal-based interaction

---

## Folder Structure

```

showstellar-artist-inquiry/
frontend/
backend/
README.md

```

---

## Setup Instructions


### 1. Backend Setup

```

cd backend
npm install

```

Create `.env` file inside `backend/`:

```

MONGO_URI=your_mongodb_connection_string

```

Run backend:

```

npm start

```

Server runs on:
```

[http://localhost:5000](http://localhost:5000)

```

---

### 3. Frontend Setup

```

cd frontend
npm install
npm start

```

App runs on:
```

[http://localhost:3000](http://localhost:3000)

```

---

## API Integration

Frontend communicates with backend using Axios:

```

[http://localhost:5000/api/inquiries](http://localhost:5000/api/inquiries)

```

---

## Approach & Architectural Decisions

- Used a component-based structure in React for reusability
- Modal form improves user experience over page navigation
- Tailwind CSS used for rapid and responsive UI design
- Backend built with Express for simplicity and speed
- MongoDB used for flexible schema handling
- Mongoose enforces schema validation and structure
- REST API kept minimal and focused
- Admin panel directly consumes API without additional layers

---

## Status

- Fully functional frontend and backend
- Form validation working (client + server)
- Data stored and retrieved successfully
- Admin panel displays inquiries correctly
- Ready for demonstration and further extension

