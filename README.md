# Boycott Israel From BD Website

This repository contains the source code and data for the "Boycott Israel From BD" website, designed to inform users about products and services to boycott and suggest ethical alternatives.

Boycott Brands/Products/Services   
https://boycott-israel.org/   
https://www.ipsc.ie/campaigns/consumer-boycott   
https://bdsmovement.net/Guide-to-BDS-Boycott   

## Table of Contents

- [Boycott Israel From BD Website](#boycott-israel-from-bd-website)
  - [Table of Contents](#table-of-contents)
  - [Project Structure](#project-structure)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Data Management](#data-management)
  - [Installation \& Development](#installation--development)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Project Structure

- **src/**: Main source directory
  - **app/**: Next.js app directory containing pages and routing
  - **components/**: React components
    - **ui/**: UI components (buttons, cards, etc.)
  - **styles/**: CSS styles
  - **lib/**: Utility functions and data
  - **content/**: Markdown content
  - **hooks/**: Custom React hooks

## Features

- **Modern UI/UX**: Responsive design with light/dark mode support
- **Navigation**: Easy access to "Home", "About", and "Resources" pages
- **Search Functionality**: Allows users to search for specific brands, products, or services to boycott
- **Category Filtering**: Filter products by category for easier browsing
- **Product Comparison**: Side-by-side comparison of products to boycott and their ethical alternatives
- **Mobile Responsiveness**: Fully responsive design for all screen sizes

## Technologies Used

- **Frontend**:
  - [Next.js 15](https://nextjs.org/): React framework for production
  - [TypeScript](https://www.typescriptlang.org/): Type-safe JavaScript
  - [Tailwind CSS 4](https://tailwindcss.com/): Utility-first CSS framework
  - [React 19](https://react.dev/): UI component library
- **UI Components**:
  - Custom UI components with Radix UI primitives
  - Lucide React for icons
  - Next Themes for theme switching
- **Content Management**:
  - MDX for markdown content with component support
- **Development Tools**:
  - Biome for linting and formatting
  - NuQs for URL state management

## Data Management

The boycott data is structured in the `src/lib/products.ts` file, organizing products by categories with both boycott targets and ethical alternatives.

**Data Structure**:

```typescript
{
  "Technology and Computers": [
    {
      boycottProduct: {
        id: "apple",
        name: "Apple",
        company: "Apple Inc.",
        imageUrl: "img/logos/apple.png"
      },
      alternativeProduct: {
        id: "samsung",
        name: "Samsung",
        company: "Samsung Electronics",
        imageUrl: "img/logos/samsung.png"
      }
    },
    // More products...
  ],
  // More categories...
}
```

## Installation & Development

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/boycott-israel.git
cd boycott-israel
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Deployment

The application can be deployed to various platforms:

- **Vercel**: Recommended for Next.js applications
- **Netlify**: Easy deployment with continuous integration
- **Self-hosted**: Build the application and serve the static files

To build the application:

```bash
npm run build
```

## Contributing

We welcome contributions to enhance the website's functionality and data accuracy. Please fork the repository and submit a pull request with your changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License   
This project is licensed under the MIT License.
