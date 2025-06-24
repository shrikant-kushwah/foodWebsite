# Food Website

Welcome to the Food Website Project! This is a modern, feature-rich platform for discovering and exploring restaurants, built with React, Redux Toolkit, and Parcel. The application provides a seamless user experience with fast navigation, robust state management, and comprehensive testing.

---

## 🚀 Features

- **Modern UI**: Clean, responsive design using React and Tailwind CSS.
- **Restaurant Discovery**: Browse a list of restaurants with images, ratings, cuisine types, and delivery times.
- **Search Functionality**: Quickly find restaurants by name or cuisine.
- **Detailed Menus**: View individual restaurant menus and categories.
- **Cart System**: Add and manage items in your cart with Redux state management.
- **User Authentication (Demo)**: Simulated user context for personalized experience.
- **Client-Side Routing**: Fast navigation using React Router.
- **Lazy Loading**: Optimized performance with code-splitting for large components.
- **Error Handling**: Friendly error pages for invalid routes.
- **Reusable Components**: Modular structure for easy maintenance and scalability.
- **Testing**: Unit and integration tests with Jest and React Testing Library.

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
