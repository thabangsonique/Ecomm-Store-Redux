# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🛍️ Ecom Store

A responsive e-commerce application built with **React**, **Redux Toolkit**, **React Router**, and **Tailwind CSS**.

This project began as a way to strengthen my frontend development skills beyond building static interfaces. Instead of following a tutorial from start to finish, I focused on solving real development problems as they appeared—implementing state management, persisting data, handling responsive layouts, and improving the user experience one feature at a time.

Throughout the project I continually refactored existing code as I learned better approaches, making it a reflection of my growth as a developer.

---

## Live Demo

> Add your deployed link here

---

## Features

### 🛒 Shopping Cart

- Add products to the shopping bag
- Increase and decrease product quantities
- Automatically remove products when quantity reaches zero
- Dynamic order summary
- Automatic calculation of total quantity and total price

---

### 💾 Persistent Cart

One challenge I wanted to solve was preventing the cart from resetting whenever the page refreshed.

Using Local Storage, the application remembers:

- Products in the cart
- Product quantities
- Cart total
- Shipping address
- Payment information

Even after refreshing the browser, users can continue where they left off.

---

### 💳 Checkout Experience

The checkout flow includes:

- Shipping Address
- Payment Method
- Order Review
- Dynamic Order Summary

Shipping and payment details are also persisted locally for a smoother experience.

---

### 🔍 Product Search

Users can search products instantly using a locally filtered search bar without making API requests.

---

### 📱 Responsive Design

The application adapts across different screen sizes.

Responsive improvements include:

- Desktop sidebar navigation
- Collapsible sidebar
- Mobile top navigation
- Adaptive product grid
- Fixed checkout bar on mobile
- Responsive spacing and layouts

---

## Technologies Used

- React
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Vite
- Local Storage API
- Lucide React
- React Icons

---

## Project Structure

```
src
│
├── components
│   ├── Navbar
│   ├── Sidebar
│   ├── ProductCard
│   ├── ProductList
│   ├── CartSummary
│   └── CheckOutItems
│
├── features
│   ├── CartSlice
│   └── CheckoutSlice
│
├── pages
│
├── data
│
└── App
```

---

## What I Learned

This project taught me much more than simply displaying products on a page.

Some of the concepts I explored include:

- Managing global state with Redux Toolkit
- Designing reusable React components
- Persisting application state using Local Storage
- Building controlled forms
- Working with React Router
- Creating responsive layouts with Tailwind CSS
- Updating nested state correctly
- Implementing increment and decrement cart logic
- Handling derived state such as totals
- Debugging Redux state updates
- Structuring a growing React project

One interesting challenge was redesigning the cart so that refreshing the browser no longer cleared the shopping bag. Instead of storing individual values separately, I refactored the application to persist the entire cart object, which simplified state restoration and reduced bugs.

Another challenge involved making the dashboard responsive. Rather than allowing the sidebar to overlap the content, I redesigned the layout so the main content adjusts dynamically on larger screens while switching to a mobile-friendly navigation on smaller devices.

---

## Challenges I Solved

Some of the problems I encountered while building this application included:

- Persisting Redux state after page refresh
- Formatting payment information correctly
- Implementing quantity increment/decrement logic
- Automatically removing items from the cart
- Keeping cart totals synchronized
- Avoiding floating-point precision issues with currency
- Building responsive navigation for mobile devices
- Creating adaptive product grids
- Managing layout shifts when opening and closing the sidebar

Each challenge helped me gain a deeper understanding of React state management and building scalable frontend applications.

---

## Future Improvements

Some features I'd like to add include:

- Backend integration
- User authentication
- Product categories
- Product filtering
- Wishlist
- Order history
- Stripe payment integration
- Product reviews
- Favorites
- Admin dashboard
- Dark mode

---

## Installation

Clone the repository

```bash
git clone https://github.com/thabangsonique/Ecomm-Store-Redux.git
```

Navigate into the project

```bash
cd ecom-store
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

---

## Author

Thabang Muleba

GitHub: https://github.com/yourusername
