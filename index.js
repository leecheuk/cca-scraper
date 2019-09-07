var request = require('request');
var cheerio = require('cheerio');

class CCA {
    constructor(className, rate, description) {
        this.className = className;
        this.rate = rate;
        this.description = description;
    }

    inspect() {
        return `CCA class ${this.className} (${this.rate}%)`;
    }

    toString() {
        return `CCA class ${this.className} (${this.rate}%)`;
    }
}

/*
 * The function extractText takes html string and returns the text in the html tags.
 * @param {string} elm - A string representation of html
 * @return {string} - A string extracted from html
 */
function extractText(elm) {
    const $ = cheerio;
    return $(elm).text();
}

/*
 * The function gets common CCA classes from CRA.
 * @return {[CCA]} - A list of CCA class object from CRA website
 */
function getCommonCCA() {
    const url = 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/sole-proprietorships-partnerships/report-business-income-expenses/claiming-capital-cost-allowance/classes.html';
    
    return new Promise(function (resolve, reject) {
        request(url, function (err, res, body) {
        if (err) {
            reject(err);
        }
        var lst = [];
        const $ = cheerio.load(body);
        const text = $('table tbody tr');
        $('table tbody tr').each(function(i, elm) {
            tdLst = $(elm).find('td');
            if (tdLst && extractText(tdLst[0]) !== '') {
                ccaObj = new CCA(extractText(tdLst[0]), 
                    extractText(tdLst[1]), extractText(tdLst[2]));
                lst.push(ccaObj);
            }
        })
        resolve(lst);
        })
    })
}

module.exports = {
    getCommonCCA
}