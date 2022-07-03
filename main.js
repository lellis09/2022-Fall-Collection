// P-interger
// R-true or faluse
// E-
//  -1  =>  false
//   0  =>  true
//   3  =>  false
// P-

var isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))) {
        return true
    }else{
        return false
    }

  }

  /*
  math.sqrt = 3 * 3. 
  */

  /*
  num % 2 === 1 */

var isSquare = function (n) {
    var r = Math.sqrt(n);
    return r === Math.floor(r);
}

var isSquare = function (n) {
    var s = Math.sqrt(n);
    return s === (s | 0);
}


// P-string
// R-new string -vowels
// E-
//  -1  =>  false
//   0  =>  true
//   3  =>  false
// P-

function disemvowel(str) {
    let vowels = ['a','e','i','o','u']
    let removed= []
    for(let i = 0; i <str.length; i++){
        if(str[i] === 'a' || str[i] === 'e'|| str[i] === 'i'|| str[i] === '0'|| str[i] === 'u'){
            removed.push(str)
        }
    }
    return str;
  }