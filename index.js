const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const { find } = require('domutils');

const app = express();
const PORT = process.env.PORT || 3001;

const url = 'https://www.theguardian.com/us';

axios(url)
    .then(response => {
        const html = response.data;
        // taking all response data and loading into cheerio
        const $ = cheerio.load(html);
        const articles = [];

        // to locate a specific element
        $(`.fc-item__title`, html).each(function() {

            const title = $(this).text()
            const url = $(this).find('a').attr('href');

            articles.push({
                title,url
            })
        })

        console.log(articles)
         })
    .catch(err => console.log(err))


    
app.listen(PORT, () => {
  console.log(`Web Scraper listening on port ${PORT}`)
})