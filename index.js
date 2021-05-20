// Code your solution here
function findMatching (someArray, someString) {
    return someArray.filter(item => item.toUpperCase() === someString.toUpperCase())
 
}


function fuzzyMatch(someArray,someString) {
    return someArray.filter(item => item.charAt(0)=== someString.charAt(0))
   
}

function matchName(someArray, someString) {
    return someArray.filter(element => element.name === someString)
}