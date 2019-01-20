const getResourceServiceFeature = require("./lib/get_ResourceServiceFeature.js").getResourceServiceFeature;
const compareFeatures = require("./lib/test_compareFeatures.js").compareFeatures;
const alignFeatures = require("./lib/fix_alignFeatures.js").alignFeatures;
//Script Global Variables-----
const msisdn = "+6141";
var output;

const script = async () => {
    try {
        //GET----------------------------------------------//
        output = [{id : msisdn}, 
                await getResourceServiceFeature("cdb",msisdn,"apn"),
                await getResourceServiceFeature("hlr",msisdn,"apn"), 
                await getResourceServiceFeature("hss",msisdn,"apn")
                ];
        //TEST----------------------------------------------//
        await compareFeatures(output, 'cdb-apn', 'hlr-apn');
        //FIX----------------------------------------------//
        await alignFeatures(output, 'cdb-apn', 'hlr-apn', "test_compareFeatures_cdb-apn:hlr-apn");
        //LOG----------------------------------------------//
        var fs = require('fs');
        await fs.writeFile('output.json', JSON.stringify(output), 'utf8', () => {console.log('Log created.')});
    } 
    catch (error) {
        console.log(error);
    }
    
}

script();

