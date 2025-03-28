# 🍸 Cocktail Recipe Generator

## Overview
A web application that allows users to discover and explore cocktail recipes using the CocktailDB API. Features include random cocktail generation, cocktail search, and detailed recipe views.

## Features
- Generate random cocktail recipes
- Search for cocktails by name
- View detailed recipe information
- Responsive design
- Error handling

## Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

After starting the server, open your browser and visit `http://localhost:3000`

## Technologies Used
- Node.js
- Express.js
- Axios
- EJS
- CocktailDB API

## API Used
[TheCocktailDB](https://www.thecocktaildb.com/api.php) - Free, public API for cocktail recipes

## Project Structure
- `app.js`: Main server-side application
- `views/`: EJS templates
- `public/styles.css`: Application styling

## Endpoints
- `/`: Home page with random cocktail
- `/cocktail/:id`: Detailed recipe page
- `/search`: Search cocktails by name

## Error Handling
Custom error page with user-friendly messages and technical details

## Contributing
Feel free to fork the project and submit pull requests.

## License
MIT License