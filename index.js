const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

const url = 'https://www.theguardian.com/';

axios(url)
    .then(response => {
        const html = response.data

        // taking all response data and loading into cheerio
        const $ = cheerio.load(html)

        // to locate a specific element

    })

app.listen(PORT, () => {
  console.log(`Web Scraper listening on port ${PORT}`)
})