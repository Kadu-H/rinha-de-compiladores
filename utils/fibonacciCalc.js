function fibonacciCalc(n) {
    let a = BigInt(0);
    let b = BigInt(1);
    for (let i = BigInt(0); i < n; i++) {
      [a, b] = [b, a + b];
    }
    return a;
  }
  
module.exports = fibonacciCalc