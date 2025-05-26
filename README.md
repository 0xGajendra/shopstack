# ShopStack - PERN Stack E-Commerce Application

A modern full-stack e-commerce web application built with PostgreSQL, Express.js, React, and Node.js. Features complete CRUD operations for product management with a responsive design and dark/light theme toggle.

## Live Demo

- **Frontend**: [shopstack-gajendra.vercel.app](https://shopstack-gajendra.vercel.app/)
- **Backend API**: [shopstack.onrender.com](https://shopstack.onrender.com/)

## Features

- Complete product CRUD operations (Create, Read, Update, Delete)
- Responsive design with mobile-first approach
- Dark/light theme toggle with ShadCN UI components
- RESTful API with rate limiting and security middleware
- Real-time data synchronization
- Modern React 19 with Tailwind CSS styling

## Tech Stack

### Frontend
- **React 19.1.0** - Modern JavaScript library
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - High-quality React components
- **Vercel** - Deployment platform

### Backend
- **Node.js 20.16.0** - JavaScript runtime
- **Express.js 5.1.0** - Web framework
- **PostgreSQL** - Database via NeonDB
- **Render** - Backend hosting

### Key Dependencies
- `@neondatabase/serverless` - PostgreSQL connection
- `@arcjet/node` - Rate limiting & bot protection
- `cors` - Cross-origin requests
- `helmet` - Security headers
- `morgan` - HTTP logging

## Database Schema

```sql
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
```

## API Endpoints

**Base URL**: `https://shopstack.onrender.com/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get single product |
| POST | `/products` | Create new product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

### Example Request
```bash
# Get all products
curl https://shopstack.onrender.com/api/products

# Create product
curl -X POST https://shopstack.onrender.com/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sample Product",
    "image": "https://example.com/product.jpg",
    "price": 99.99
  }'
```

## Local Development

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Git

### Backend Setup
```bash
# Clone repository
git clone https://github.com/yourusername/shopstack.git
cd shopstack/backend

# Install dependencies
npm install

# Create .env file
DATABASE_URL=your_postgresql_connection_string
PORT=5000
NODE_ENV=development
ARCJET_KEY=your_arcjet_api_key

# Start server
npm run dev
```

### Frontend Setup
```bash
# Navigate to frontend
cd ../frontend

# Install dependencies
npm install

# Create .env.local file
REACT_APP_API_URL=http://localhost:5000/api

# Start development server
npm start
```

Visit `http://localhost:3000` to view the application.

## Project Structure

```
shopstack/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   └── seeds/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.jsx
│   ├── public/
│   └── package.json
└── README.md
```

## Deployment

### Backend (Render)
1. Connect GitHub repository to Render
2. Set environment variables in dashboard
3. Deploy with automatic builds

### Frontend (Vercel)
1. Import project from GitHub
2. Configure build settings for React
3. Add environment variables for API URL

## Performance Features

- **Rate Limiting**: API protection with Arcjet
- **Security Headers**: Helmet middleware implementation  
- **Optimized Queries**: Efficient PostgreSQL operations
- **Component Optimization**: React best practices
- **Responsive Design**: Mobile-first Tailwind CSS


## Developer

**Gajendra Rao**  
Full-Stack Developer

- GitHub: [0xGajendra](https://github.com/0xGajendra)
- LinkedIn: [Gajendra Rao](https://linkedin.com/in/gajendra-li)

---

Built with modern web technologies for optimal performance and user experience.