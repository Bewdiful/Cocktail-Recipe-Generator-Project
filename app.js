const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Base API URL
const COCKTAIL_API_BASE = 'https://www.thecocktaildb.com/api/json/v1/1';

// Routes
app.get('/', async (req, res) => {
  try {
    // Fetch random cocktail
    const response = await axios.get(`${COCKTAIL_API_BASE}/random.php`);
    const cocktail = response.data.drinks[0];
    res.render('index', { cocktail });
  } catch (error) {
    res.render('error', { 
      message: 'Failed to fetch cocktail. Please try again.',
      error: error.message 
    });
  }
});

app.get('/cocktail/:id', async (req, res) => {
  try {
    // Fetch specific cocktail by ID
    const response = await axios.get(`${COCKTAIL_API_BASE}/lookup.php?i=${req.params.id}`);
    const cocktail = response.data.drinks[0];
    res.render('recipe', { cocktail });
  } catch (error) {
    res.render('error', { 
      message: 'Failed to fetch cocktail details. Please try again.',
      error: error.message 
    });
  }
});

app.post('/search', async (req, res) => {
  try {
    const searchTerm = req.body.cocktailName;
    const response = await axios.get(`${COCKTAIL_API_BASE}/search.php?s=${searchTerm}`);
    
    if (!response.data.drinks) {
      return res.render('error', { 
        message: `No cocktails found for "${searchTerm}"`,
        error: 'No results' 
      });
    }
    
    res.render('index', { 
      cocktail: response.data.drinks[0],
      searchResults: response.data.drinks 
    });
  } catch (error) {
    res.render('error', { 
      message: 'Search failed. Please try again.',
      error: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});