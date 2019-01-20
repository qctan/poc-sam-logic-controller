var _ = require('lodash');

exports.alignFeatures = (output, featureToAlignTo, featureToBeAligned, testID) => {
    var result;
     
    switch (_.find(output,testID)[testID]) {
        case 'Passed':
        result = {"fix_alignFeatures" : 'Skipped', featureToAlignTo, featureToBeAligned };
        case 'Failed':
        //Do something
        result = {"fix_alignFeatures" : 'Completed', featureToAlignTo, featureToBeAligned};
            break;
        default:
            break;
    }
  
    console.log(`|||Fix aligment||\nOutput --> ${JSON.stringify(result)}`);
    output.push(result);
    return result;
}

