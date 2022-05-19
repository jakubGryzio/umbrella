exports = function(arg){
    let collection = context.services.get("mongodb-atlas").db("users").collection("credential");

    return collection.find({});
};