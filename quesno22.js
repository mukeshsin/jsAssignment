 //const obj = {
//     name: "mukesh",
//     haircolor: "black",
//     location: "delhi",//

// function invert_key_value(user) {
//     let result = {};
//     let keys = _keys(user);
//     for (let i = 0, length = keys.length; i < length; i++) {
//       result[user[keys[i]]] = keys[i];
//     }
//     return result;
//   }
// function _keys(obj) 
//   console.log(i);
// const objEntries = Object.entries(user);
// console.log(objEntries);
//  keys=objEntries;
// Object(keys.reverse());


const user = {
       name: "mukesh",
       haircolor: "black",
     location: "delhi",
}

function invert_key_value(user) {
    var result = {};
    var keys = _keys(user);
    for (var i = 0; i<keys.length;  i++) {
      result[user[keys[i]]] = keys[i];
    }
    return result;
  }
function _keys(user) 
  {
    if (!isObject(user)) return [];
    if (Object.keys) return Object.keys(user);
    var keys = [];
    for (var key in user) if (_.has(user, key)) keys.push(key);
    return keys;
  }
function isObject(user) 
 {
    var type = typeof user;
    return type === 'function' || type === 'object' && !!user;
  }
  console.log(invert_key_value({
    name: "mukesh",
    haircolor: "black",
    location: "delhi",
}));
