const a = {
    string: 'string',
    number: 123,
    bool: false,
    nul: null,
    date: new Date(), 
    undef: undefined,  
    inf: Infinity,  
    re: /.*/,  
  }
 console.log(a);
const clone = JSON.parse(JSON.stringify(a));
console.log(clone);
