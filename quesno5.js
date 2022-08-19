// const a = {
//   string: 'string',
//   number: 123,
//   bool: false,
//   nul: null,
//   date: new Date(),
//   undef: undefined,
//   inf: Infinity,
//   re: /.*/,
// }
// console.log(a);
// const clone = oject.assign({}, (a));
// console.log(clone);

let a = {
  name: 'mohan',
  numbers:{
    number1:'2345',
    number2:'23456',
    number3:'3232',
  },
  bool: false,
  nul: null,
  date: new Date(),
  undef: undefined,
  inf: Infinity,
  friendsname:{
    friend1:'shyam',
    friend2:'AudioParam',
  }
}

  console.log(a);
  const b = Object.assign({}, a);
  console.log(b);

