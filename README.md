# Food Website

Welcome to the Food Website Project! This is a modern, feature-rich platform for discovering and exploring restaurants, built with React, Redux Toolkit, and Parcel. The application provides a seamless user experience with fast navigation, robust state management, and comprehensive testing.

---

## 🚀 Features (with Usage Context)

- **Modern UI**: Clean, responsive design using React and Tailwind CSS. All pages and components use Tailwind utility classes for consistent, mobile-first styling.
- **Restaurant Discovery**: The home page (`Body` component) displays a list of restaurants with images, ratings, cuisine types, and delivery times, fetched from mock data or API.
- **Search Functionality**: The search bar in the header and body allows users to filter restaurants by name or cuisine in real time.
- **Detailed Menus**: Clicking a restaurant card navigates to the `RestaurantMenu` page, showing menu categories and items for that restaurant.
- **Cart System**: Users can add menu items to their cart from the menu page. The cart state is managed globally using Redux Toolkit (`cartSlice.js`), and the cart can be viewed/managed on the `/cart` page.
- **User Authentication (Demo)**: The app uses a simulated user context (`UserContext.js`) to demonstrate how user data can be managed and passed throughout the app.
- **Client-Side Routing**: Navigation between Home, About, Contact, Grocery, Cart, and dynamic restaurant menu pages is handled by React Router DOM (`App.js`).
- **Lazy Loading**: Non-critical pages like About and Grocery are loaded lazily using React's `lazy` and `Suspense` for better performance.
- **Error Handling**: Invalid routes are caught and displayed using a custom `Error` component.
- **Reusable Components**: Components like `RestaurantCard`, `Header`, `Footer`, and `ItemList` are designed for reuse and scalability.
- **Testing**: The project includes unit and integration tests for key components (in `src/components/__tests__`) using Jest and React Testing Library.

---

## 📂 Project Structure

```
src/
  components/      # UI components (Header, Footer, Body, RestaurantCard, etc.)
  utils/           # Custom hooks, Redux slices, constants, context
  assets/          # Images and static assets
  App.js           # Main application logic and routing
index.html         # Entry point
index.css          # Global styles
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/shrikant-kushwah/namaste-react.git
   cd namaste-react
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the development server:**
   ```
   npm start
   ```
   The app will be available at `http://localhost:1234`.

4. **Build for production:**
   ```
   npm run build
   ```

---

## 🧭 Usage

- **Home Page**: Browse all restaurants.
- **Search**: Use the search bar to filter restaurants.
- **Restaurant Details**: Click a restaurant card to view its menu.
- **Cart**: Add menu items to your cart and view them on the Cart page.
- **Navigation**: Use the header links to visit About, Contact, Grocery, and Cart pages.

---

## 🧩 Technologies Used

- **React** (with Hooks)
- **Redux Toolkit** (for state management)
- **React Router DOM** (for routing)
- **Parcel** (for bundling)
- **Tailwind CSS** (for styling)
- **Jest & React Testing Library** (for testing)

---

## 🧪 Testing

- Run all tests:
  ```
  npm test
  ```
- Includes unit and integration tests for components and utilities.

---

## 📄 License

This project is licensed under the ISC License.

---

## 🙋‍♂️ Author

- **Shrikant Kushwah**
- [GitHub](https://github.com/shrikant-kushwah/namaste-react)

## 💡 Usage Examples

- **Browse Restaurants:**  
  On the home page, scroll to view a list of restaurants with ratings and cuisine types.

- **Search:**  
  Use the search bar at the top to filter restaurants by name or cuisine.

- **View Menu:**  
  Click on a restaurant card to see its menu and categories.

- **Add to Cart:**  
  Click the "Add" button next to a menu item to add it to your cart.

- **View Cart:**  
  Click the cart icon in the header to review or remove items before checkout.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **New Project** and import your repository.
4. Set the framework preset to **Other** (for Parcel).
5. Set the build command to `npm run build` and output directory to `dist`.
6. Click **Deploy**.

## 🖼️ Screenshots

| Home Page                | Restaurant Menu              | Cart Page                |
|--------------------------|------------------------------|--------------------------|
| ![Home](src/assets/home.png) | ![Menu](src/assets/menu.png) | ![Cart](src/assets/cart.png) |
