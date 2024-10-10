let myMode = "development"
if(process.env.NODE_ENV === "production"){
    myMode = "production"
}
console.log('mode: '+myMode)

module.exports = {
    mode: myMode,
}