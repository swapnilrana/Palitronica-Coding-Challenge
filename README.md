
# Pricing Calculator

For this challenge, you will develop a simple application for calculating payments for customer orders. The application consists of three components:

    1. A database containing customer and item information.
    2. A backend service for payment calculation.
    3. A single-page web application to take customer inputs and display payments.
Database
- The database stores customer information including a customer id and name.
- The database stores item information including item id and price.
Backend service
- For simplicity, the backend service seeds the database with hardcoded customer and item information when it first starts.
- The backend service exposes a REST API for payment calculation. The REST API takes the following inputs: customer id, list of item ids, and the quantity for each item. The API returns the following: customer name, total price for each item, the tax component, and the total price.
- The backend service uses the public API (https://developers.taxjar.com/api/reference) to retrieve the tax rate based on the customer’s address (which is retrieved from the database). Use the “combined tax rate” to calculate the total taxes on all items (assuming that they are all taxable).
- For calling the public API:

    o Store any hardcoded customer address information in the database

    o The API token can be a configuration to your backend application

Single-page web application
- This is a simple web page that contains the following:
    o An input field for a customer id

    o Hardcoded item ids (matching ones in the database)

    o For each item, an input field for the quantity

    o A submit button that calls the REST API with the user inputs
- On the same page, display the output of the backend call (customer name, total prices for each item, total taxes, total price)

Database 
- 
 Created a temporary database of 4 customers and 4 products the details of which are as follows

    Customers 
    1. Name: Sam Doe,           zip: V5K0A1,        city: Vancouver
    2. Name: Jessica Chole,     zip: M4C1C4,        city: Toronto
    3. Name: Yoho Robinson,     zip: G1B0C3,        city: Quebec
    4. Name: Xu Young,          zip: B3H0A6,        city: HALIFAX 

    Products
    1. Television       Price: 200 CAD
    2. Speakers         Price: 75 CAD
    3. RGB lights       Price: 30 CAD
    4. Set-Top Box      Price: 100 CAD


Highlights:
- 
 - Used validation to creat alrets for invalid data entry
 - Created custome self explainatory alters to rectify data entry errors
 - Used Different regions to show varioation in Tax rates for different customers
 - Developed a user friendly yet simple stock interface for data entry and reuslts


Instrucitons to Open the webpage:
-
    1. Clone the repository into local folder 
    2. Open the folder in VS codes 
    3. In the terminal type "cd ./Backend"
    4. Once in Backend dir, type "npm start" (This will start the services for the webpage)
    5. Go to the local folder where the repostiory was cloned and open Frontend folder 
    6. Double click on 'index.html'. This will take you to my webpage 
    7. Instead of step 5 & 6 from VS code right click on 'index.html' in the 'Frontend' and click "Open with Live Server"


How to Use the page:
-
- Enter a number in range 1 to 4 in Customer Id. 
- A wrong entry will pop up and alert. Pelase read and follow remedy mentioned in the alert and try again!
- In the Boxes below choose the quatity for each time as per your choice 
- Once the quantities are entered click 'Calculate' to show results
- In the results you can see the Customer name and a table for Total prices for each item, Total tax and Final Price including Tax.
