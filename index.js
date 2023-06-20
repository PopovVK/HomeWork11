function customPow(num, degree) {
  if (degree === 0) {
    return 1;
  } else if (degree > 0) {
    return num * customPow(num, degree - 1);
  } else {
    return 1 / customPow(num, -degree);
  }
}

let result = customPow(3, 7);
console.log(result); 

result = customPow(2, -5);
console.log(result);  