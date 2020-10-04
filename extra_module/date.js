
module.exports.getDate = () =>
{
let today = new Date();

let options = {
    day : "numeric",
    month : "short",
    year : "numeric",
    hour : "2-digit",
    minute : "2-digit"
}
    return today.toLocaleDateString("en-us", options);
}

module.exports.getDay = () =>
{
    let today = new Date();

    let options = {
        weekday : "long",
        day : "numeric",
        month : "short",
    }
    return today.toLocaleDateString("en-us", options);
}