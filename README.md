# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- The code is written in React.js. In contextProvider, I create authProvider for Authentication. After giving the information on the login or sign-up page, AuthProvider creates a user or authenticates the user by using Firebase. 
I config Firebase in firebase.config.js.
In hooks, I make useAdmin, useAuth, useCarts, and useMenu to find the information from different pages when needed.
I create a Dashboard and main file in the layout folder to make an Admin or user dashboard and main home page. 
In the pages folder, some pages are -
Dashboard- there are
  addItem - add an item to the database.
  allUser- To find all the users from the database and show all in the dashboard. Here, you can delete the user or make a user admin by clicking the button.
  ManageItems- Here, you can see all the items and also delete them
  MyCart- here, you can see the cart items

  
Login - Login - where users can log in with their email and password
Signup- where users can sign up with their name, phone number, email, and password


Menu 
Menu - The user can view the menuMenuCategory-
The user can view the menu with different categories.

Order -
FoodCart- This creates the food details and also the order button.
Order - You can see the food in the category to make the order. It takes the data from FoodCart and shows the order.

Shared - This folder has some components that are conveyed to the side along with different pages. That is - Cover, Footer, NavBar.

Home- It consists of a Banner,  PopuplarMenu, and Review. Review and popular menu fetch from the database.

Router - Use React-Router to navigate among the pages. And also make PrivetRoute to make a proceeded route. 

I use react-router, tailwind-css (daisyUI), JWT on the server side, dotenv to protect password and apiKey, React-Helmet to make a helmet in the tab, sweetAlart2 to give an alert, Firebase authentication to authenticate the user and also for signup. And other open-source frameworks. 

In the backend, I use MongoDB for storing data, express, node, and cors for middleware.  
Git For Client- https://github.com/auvy09/food-gorilla
Git For server- https://github.com/auvy09/food-gorilla-server
Live site- https://stellar-licorice-e89547.netlify.app/
