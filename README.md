# TechBazaar

## Description

TechBazaar is a backend e-commerce project aimed at providing a robust platform for online retail operations. 
This project serves as the foundation for building an e-commerce website, managing product inventory, processing orders, and facilitating transactions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)
- [License](#license)

## Installation

1.Clone the repository in your terminal.
git clone https://github.com/somphangchanleuxay/TechBazaar.git

2.Navigate to project directory.
cd TechBazaar

3.Install depencies.
npm install

4.Run the Server.
npm start

5.Access the API endpoints at http://localhost:3000 (or as specified in your environment).


## Usage
To use TechBazaar in your project, follow these steps:

1.Set Up Database: Ensure you have a MySQL database set up. You can configure the database connection in the .env file.

2.Install Dependencies: Install the required Node.js dependencies using npm:
npm install

3.Start the Server: Run the server using the following command:
npm start

4.Access API Endpoints: You can access the API endpoints using tools like Insomnia, Postman, or by integrating them into your frontend application. Here are some example API endpoints:

Retrieve all products:
GET http://localhost:3000/products

Create a new product:
POST http://localhost:3000/products

Retrieve a specific product by ID:
GET http://localhost:3000/products/:id

Update a product by ID:
PUT http://localhost:3000/products/:id

Delete a product by ID:
DELETE http://localhost:3000/products/:id

Note:(Replace :id with the actual ID of the product)

Also refer to video if you need a visual walkthrough.

Link to Video
https://drive.google.com/file/d/1f9DR02g9VhD3t5jwN4nmFhM4nW4lcs8O/view

## Contact

Github
https://github.com/somphangchanleuxay

Link to Repository
https://github.com/somphangchanleuxay/TechBazaar 

## License

MIT License

Copyright (c) [2024] [Somphang Chanleuxay]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
