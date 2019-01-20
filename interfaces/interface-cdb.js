const databaseURL = "./databases/database-cdb.json"
const fs = require('fs');
const path = require ('path')

exports.getAllSubscriptionData = (msisdn) => {
    allServices = getAllSubscriber();
    result = getSubscriptionData(allServices, 'msisdn', msisdn);
    return result;

}

exports.getFeature = (msisdn,feature) => {
    
    allServices = getAllSubscriber();
    service = getSubscriptionData(allServices, 'msisdn', msisdn);
    result = getFeatureFromService(service.features, feature);
    return result;
}

const getAllSubscriber = () => {
    var databasePath = path.resolve(__dirname, databaseURL)
    return JSON.parse(fs.readFileSync(databasePath));    
}

const getSubscriptionData =(data, tag, value) => {
    result = data.find((obj) => {
        return obj[tag] == value;
      });
    
    if (result == undefined) {return "Subscription not found"} 
    else return result;
}

const getFeatureFromService =(data, tag) => {
    return data.filter((obj) => obj[tag] != null);
}