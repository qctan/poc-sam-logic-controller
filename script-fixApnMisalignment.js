const getResourceServiceFeature = require("./lib/get_ResourceServiceFeature.2.js").getResourceServiceFeature;
const compareFeatures = require("./lib/test_compareFeatures.js").compareFeatures;
const alignFeatures = require("./lib/fix_alignFeatures.js").alignFeatures;
const responseTime = require("./helper/responseTime.js").responseTime;
var _ = require('lodash');
//Script Global Variables-----
const msisdn = "+6141";
//----------------------------
const script = () => {
//GET
    var cdbFeature = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(getResourceServiceFeature("cdb",msisdn,"apn"));
        }, responseTime())
    });
    var hlrFeature = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(getResourceServiceFeature("hlr",msisdn,"apn"));
        }, responseTime())
    });
    var hssFeature = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(getResourceServiceFeature("hss",msisdn,"apn"));
        }, responseTime())
    });
    
    Promise.all([{id : msisdn}, cdbFeature, hlrFeature, hssFeature])
    .then((output) => { //TEST
        result = compareFeatures(output, 'cdb-apn', 'hlr-apn');
        output.push(result);
        return output;
    })
    .then((output) => { //FIX
        result = alignFeatures(output, 'cdb-apn', 'hlr-apn', "test_compareFeatures_cdb-apn:hlr-apn");
        output.push(result);
        return output;
    })
    .then((output) => {
        var fs = require('fs');
        fs.writeFile('output.json', JSON.stringify(output), 'utf8', () => {console.log('Log created.')});
    });
    
}

script();

