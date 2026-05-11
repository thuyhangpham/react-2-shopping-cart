# WeCamp Training: React #2 - Assignment
1) Assignment Overview

Title: Shopping Cart App

Description:
In this assignment, you will build a simple Shopping Cart application using React.


2) Functional Requirements
2.1 Add to Cart
Display a list of products. Each product should include:
+ Name
+ Price
+ On clicking “Add to Cart”:
+ Add the product to your cart

! If the product already exists, increase its quantity

2.2 Cart List
Display all items in the cart:
+ Name
+ Price
+ Quantity
+ Total price per item (price × quantity)
  
For each item, implement these logic:
+ Increase quantity
+ Decrease quantity
+ Remove item

2.3 Cart Summary
Display:
+ Total number of items
+ Total price of the cart

2.4 State Management
Use Redux Toolkit to manage the cart's state
Implement the following actions:
+ Add item
+ Remove item
+ Update quantity

2.5 Persist Data
Save cart data to localStorage
Load cart data when the app starts

3) Data structure
You can use the following product list as reference:

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 200 },
]; 

Note:

The product list does not include a quantity field.

When items are added to the cart, each cart item must include a quantity field (for example: quantity: 1).

Example of a cart item:

{

  id: 1,
  name: "Laptop",
  price: 1000,
  quantity: 1
}

4) Submission
You are expected to initialize a basic React project yourself (e.g., using Vite, Create React App, etc.)

Submit your work by providing a GitHub repository link

Notes:
No backend required

Keep the UI simple but clear and usable

Focus on correct functionality and state management

