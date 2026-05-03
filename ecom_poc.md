# E-Commerce Application POC (Proof of Concept)

## 1. Project Overview
This project is a functional Proof of Concept (POC) for a mobile E-Commerce application. It validates the core features necessary for an online shopping experience, including product browsing, detailed product views, and a fully functional shopping cart state.

## 2. Technology Stack
- **Framework:** React Native
- **Development Tool:** Expo
- **Language:** TypeScript / JavaScript
- **Navigation:** `@react-navigation/native` / `@react-navigation/stack`
- **State Management:** React Context API (`CartContext`)

## 3. Core Features & Capabilities

### 3.1 Product Listing (Home Screen)
- Displays a catalog of products (e.g., smartwatches, earbuds, backpacks).
- Each item displays its product name, image, and price.
- Users can instantly add products to their cart from the listing view using the "+" button.

### 3.2 Product Details Screen
- Offers an expanded view of a selected product.
- Displays comprehensive product descriptions and high-quality imagery.
- Features prominent calls to action ("Add to Cart" and "Go to Cart").

### 3.3 Shopping Cart State Management
- Utilizes the React Context API to maintain a global cart state across the application.
- Supports dynamically adding items, incrementing quantities for existing items, and removing items.
- Displays immediate user feedback via pop-up alerts (e.g., "Success: [Product] has been added to the cart") when an item is added to the cart.
- Automatically calculates the total price of all items currently in the cart.

### 3.4 Navigation Flow
A robust Stack Navigator handles seamless transitions between the application's core screens:
- **Home** (`HomeScreen`)
- **Product Details** (`ProductDetailScreen`)
- **Cart** (`CartScreen`)
- **Checkout** (`CheckoutScreen`)

## 4. Project Structure
```text
/ecom
├── App.tsx                    # Main entry point, Context Provider, and Navigation Stack
├── app.json                   # Expo configuration file
├── package.json               # Project dependencies and scripts
└── /screens
    ├── homescreen.js          # Product catalog and listing display
    ├── productdetailscreen.js # Detailed item view
    ├── cartscreen.js          # Cart logic, modifications, and total cost calculation
    └── CheckoutScreen.js      # Final checkout step
```

## 5. Summary
This POC successfully validates the core requirements for a dynamic E-Commerce mobile application. The architecture is lightweight but scalable enough to transition into using an external database and authenticated user sessions.
