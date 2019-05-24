"use strict"
let titleCase = (str)=>{
    let strArray =str.split( " ");

    let retStr = "";
    strArray.forEach(word=>{
        if(word !== ""){
            let concatWord = `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()} `
            retStr= retStr.concat(concatWord);
           
        }
        
    })
    
    return retStr.trim();
    
}
module.exports=titleCase