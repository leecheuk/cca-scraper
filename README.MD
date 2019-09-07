# Scraper for common CCA classes
Scrapper for common CCA class provided by Canada Revenue Agency (CRA). 

## Usage
Clone and require it in the project directory. To get a list of common CCA classes from CRA, use the following code. The list returns common CCA classes in the structure of a CCA class object.

```js
var {getCommonCCA} = require('./cca-scraper')
getCommonCCA().then(CCALst => 
    console.log(CCALst)
);
```

## CCA class object
Structure of CCA class object.

```
{
    className: '53',
    rate: '50',
    description: 'Machinery and equipment acquired after 2015 and before 2026 that is used in Canada mainly to manufacture and process goods for sale or lease.'
}
```