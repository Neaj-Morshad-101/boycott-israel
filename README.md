# Boycott Israel Website

This repository contains the source code and data for the "Boycott Israel" website, designed to inform users about products and services to boycott and suggest ethical alternatives.

Boycott Brands/Products/Services   
https://boycott-israel.org/   
https://www.ipsc.ie/campaigns/consumer-boycott   
https://bdsmovement.net/Guide-to-BDS-Boycott   

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Data Management](#data-management)
- [Hosting](#hosting)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

- **index.html**: Main page displaying the boycott list and search functionality.
- **why-boycott.html**: Page explaining the reasons and motivations behind the boycott.
- **about-us.html**: Information about the creators and mission of the website.
- **assets/**: Contains stylesheets, JavaScript files, and data.
  - **css/style.css**: Main stylesheet for the website.
  - **js/script.js**: JavaScript functionalities.
  - **data/boycott-data.json**: JSON file containing boycott data.
- **images/**: Directory for images and videos used on the site.
- **ads/**: (Optional) Directory for advertisements.

## Features

- **Navigation Links**: Easy access to "Boycott Israel" (Main Page), "Why Boycott", and "About Us".
- **Search Functionality**: Allows users to search for specific brands, products, or services to boycott and find ethical alternatives.
- **Boycott List**: A comprehensive, category-wise list of products with suggested alternatives. The List can be Downloaded to PDF format. 
- **Download Option**: Users can download the list of 100 products to boycott along with their alternatives.

Main Page contains Title, Motto with Images, Videos, Ads, etc. 

## Technologies Used

- **Frontend**:
  - HTML
  - CSS (BootStap 5 or Tailwind CSS for responsive design)
  - JavaScript
  - React.js for dynamic UI components
- **Backend**:
  - Node.js
  - Firebase for real-time data storage and authentication

## Data Management

The boycott data is stored in a JSON file located at `assets/data/boycott-data.json`. This structure allows for easy updates and integration with the frontend.

**Example Structure**:

```json
[
  {
    "category": "Beverages",
    "products": [
      {
        "name": "Coca-Cola",
        "alternative": "Cola Gaza"
      },
      {
        "name": "Pepsi",
        "alternative": "Mecca Cola"
      }
    ]
  },
  {
    "category": "Cosmetics",
    "products": [
      {
        "name": "Ahava",
        "alternative": "Lush"
      }
    ]
  }
]
```

### Tools & Libraries: 
Bootstrap 5: Prebuilt responsive components (getbootstrap.com).   
PapaParse: JSON-to-CSV conversion (papaparse.com).   
Netlify: Free hosting + continuous deployment (netlify.com).   
Google Sheets: Manage boycott data in a spreadsheet, then export to JSON (easier than manual editing).   

### Data sourced from: 
Ethical Consumer, Boycott Israeli Consumer Goods Dataset, etc.

## Hosting:    
The website can be hosted on:   
Netlify: Free, fast, and easy for static sites with continuous deployment.   
Vercel: Ideal for React-based sites with serverless functions support.   
GitHub Pages: Suitable for hosting static websites directly from the repository.   

## Contributing
We welcome contributions to enhance the website's functionality and data accuracy. Please fork the repository and submit a pull request with your changes.

## License   
This project is licensed under the MIT License.