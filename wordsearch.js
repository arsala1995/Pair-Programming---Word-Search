const wordSearch = (letters, word) => { 
    if (letters.length === 0 )  {
      return false;
    } 
   const horizontalJoin = letters.map(ls => ls.join(''))
     // console.log(horizontalJoin);
     let result = transpose(letters);
     const verticalJoin = result.map(ls => ls.join(''));
     console.log(verticalJoin)
     for(var i = 0; i < horizontalJoin.length; i++) {
         
       
       if (horizontalJoin[i].includes(word)) {
         return true
         } else {
         
         // resut;
        
         for(let x =0; x < result.length; x++) {
           
             if(verticalJoin[x].includes(word) ){
                 console.log(verticalJoin[x]);
                 return true;
             }
         }
     }
     }
     return false;
 }
 
 
 const transpose = function(matrix) {
     // Put your solution here
    let output = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let subArray = [];
      for (let j = 0; j < matrix.length; j++) {
        subArray.push(matrix[j][i]);
      }
      output.push(subArray);
    }
    return output;
  };

  module.exports = wordSearch;