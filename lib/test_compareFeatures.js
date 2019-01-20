var _ = require('lodash');

exports.compareFeatures = (output, feature1, feature2) => {
    
    value1 = _.find(output, feature1);
    value2 = _.find(output, feature2);  

    if (_.isEqual(value1[feature1], value2[feature2])) 
    result = {[`test_compareFeatures_${feature1}:${feature2}`] : 'Passed', feature1, feature2};
    else result = {[`test_compareFeatures_${feature1}:${feature2}`] : 'Failed', feature1, feature2}; 
    
    console.log(`|||Check ${feature1} against ${feature2}|||\nComparing:\n${JSON.stringify(value1)}\n${JSON.stringify(value2)}\nOutput ---> ${JSON.stringify(result)}`);
    output.push(result);
    return result;
}