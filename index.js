"use strict"
let titleCase = (str, restToLowerCase=false)=>{
    let strArray =str.split( " ");

    let retStr = "";
    if(restToLowerCase === true){
        strArray.forEach(word=>{
            if(word !== ""){
                let concatWord = `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()} `
                retStr= retStr.concat(concatWord);
               
            }
            
        })
    }else{
        
    strArray.forEach(word=>{
        if(word !== ""){
            let concatWord = `${word.charAt(0).toUpperCase()}${word.substr(1)} `
            retStr= retStr.concat(concatWord);
           
        }
        
    })
    }


    
    return retStr.trim();
    
}
module.exports=titleCase