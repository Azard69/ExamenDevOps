// TODO: Add here the function to validate
module.exports.validationGamerTag = (gamerTagValue) => {
    if (gamerTagValue.length > 8) return false;
    else return true;
};

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;
