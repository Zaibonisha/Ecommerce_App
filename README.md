# 👗 Online Women's Clothing Store

An eCommerce web application for a women's fashion store, built using **Django** (backend) and **React** (frontend). The platform allows users to browse and shop for various clothing categories like dresses, shoes, pyjamas, and coats. It supports user authentication, shopping cart functionality, and order management.

## ✨ Features

- 🛍️ Browse categories: Dresses, Shoes, Pyjamas, Coats
- 🔍 Search and filter products
- 👤 User registration and login
- 🛒 Add to cart and checkout
- 💳 Payment integration (e.g., Stripe or PayPal) *(optional/coming soon)*
- 📦 Order tracking and history
- 🧾 Admin dashboard for managing products and orders

## 🛠️ Tech Stack

### Backend (API)
- **Django**
- **Django REST Framework**
- **SQLite/PostgreSQL** (configurable)
- **Django-Allauth** or **SimpleJWT** for authentication

### Frontend
- **React**
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Axios** for API communication
- **Tailwind CSS** or **Bootstrap** for styling

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/Zaibonisha/Ecommerce_App
cd Ecommerce_App

### 2. Run Server
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver


### 3. Run client 
cd ../frontend
npm install
npm start
