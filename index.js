const chalk = require('chalk');
const axios = require('axios');
const API = 'http://api.forismatic.com/api/1.0/';

module.exports = (cb) => {
    axios.get(`${API}?method=getQuote&format=json&lang=en`).then((response) => {
        cb(console.log(chalk.bold.red(`${response.data.quoteText}`) + chalk.bold.blue.italic(`\n-- ${response.data.quoteAuthor}`)));
    });
}