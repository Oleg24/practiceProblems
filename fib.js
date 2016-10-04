let fib = (n) => {
  if(n === 1 || n === 2){
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

let memoFib = ((n) => {
  let memo = {};

  let f = (n) => {
    let value; 

    if(n in memo){
      value = memo[n];
    } else if (n === 0 || n === 1){
      value = n;
    } else  {
      value = f(n-1) + f(n-2);
      memo[n] = value;
    }
    return value;
  }

  return f;
})();

let memoize = (func) => {
  let memo = {};

  let memoFunc = (arg){
    if(arg in memo){
      return memo[arg];
    } else {
      memo[arg] = func.apply(this, arg);
    }
  }
  return memoFunc;
}