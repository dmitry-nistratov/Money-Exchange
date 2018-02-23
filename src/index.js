// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let obj={};
    let H;
    let Q;
    let D;
    let N;
    let P;
    let arr = {};
    let h = 50;
    let q = 25;
    let d = 10;
    let n = 5;
    let p = 1;
    let err = {};
    err.error = "You are rich, my friend! We don't have so much coins for exchange";

    if(currency > 10000){
      return err;
    }
    if(currency <= 0){
      return arr;
    }
    let currh = (currency - currency%h)  / h;
    let currq = (currency%h - (currency%h)%q)  / q;
    let currd = ((currency%h)%q - ((currency%h)%q)%d)  / d;
    let currn = (((currency%h)%q)%d - (((currency%h)%q)%d)%n)  / n;
    let currp = ((((currency%h)%q)%d)%n - ((((currency%h)%q)%d)%n)%p)  / p;
    let th = {
      name: "H:",
      value: currh
    };
    let tq = {
      name: "Q:",
      value: currq
    };
    let td = {
      name: "D:",
      value: currd
    };
    let tn = {
      name: "N:",
      value: currn
    };
    let tp = {
      name: "P:",
      value: currp
    };
    if (currh>0){
      obj.H=currh;
    }
    if (currq>0){
    obj.Q=currq;
  }
    if (currd>0){
    obj.D=currd;
  }
    if (currn>0){
    obj.N=currn;
  }
    if (currp>0){
    obj.P=currp;
  }
    return obj;
}
