const responseTime = require('../helper/responseTime').responseTime;

exports.getResourceServiceFeature = (resource, msisdn, feature) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            var result;
            const device = require(`../interfaces/interface-${resource}`);
            response = device.getFeature(msisdn,feature);   
            result = {[`${resource}-${feature}`]: response};
            console.log(`|||Get ${feature} of ${msisdn} from ${resource}|||\nOutput --> ${JSON.stringify(result)}`);
            resolve(result);
        },responseTime());
    });
     
}