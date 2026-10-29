# Paradise Nursery — Shopping Application

Paradise Nursery is a React shopping-cart application for an online houseplant shop. It demonstrates product categories, product cards, a global shopping cart, live quantity and total calculations, and responsive navigation.

## Features
- Landing page with a “Get Started” button
- About Us page with company details
- Three houseplant categories, with six plants in each category
- Product images, descriptions and prices
- Add-to-cart buttons that disable after a plant is added
- Dynamic cart item count in the navbar
- Quantity controls and remove actions on the cart page
- Per-product subtotal and overall total
- Checkout placeholder and continue-shopping navigation
- Redux Toolkit state management with local component navigation

## Run locally
1. Install Node.js (18 or newer).
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local URL shown by Vite.

## Project files
- Root-level `App.jsx`, `App.css`, `AboutUs.jsx`, `ProductList.jsx`, `CartItem.jsx`, and `CartSlice.jsx` expose the main implementation files for assessment links.
- `src/App.jsx`: application views and navigation
- `src/App.css`: application styling and landing-page background
- `src/components/AboutUs.jsx`: company information
- `src/components/ProductList.jsx`: categories and product cards
- `src/components/CartItem.jsx`: cart view, quantity controls and checkout message
- `src/features/cart/CartSlice.jsx`: Redux cart slice
