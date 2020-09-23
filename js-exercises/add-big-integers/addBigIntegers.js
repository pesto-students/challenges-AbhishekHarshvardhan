/* eslint-disable  */

function add(str1, str2) {
  let sum = '';
  let str1Length = str1.length;
  let str2Length = str2.length;

  if (str2Length > str1Length) {
    let temp = str2;
    str2 = str1;
    str1 = temp;
  }

  let carry = 0;
  let a;
  let b;
  let temp;
  let digitSum;
  for (let i = 0; i < str1.length; i++) {
    a = parseInt(str1.charAt(str1.length - 1 - i));
    b = parseInt(str2.charAt(str2.length - 1 - i));
    b = b ? b : 0;
    temp = (carry + a + b).toString();
    digitSum = temp.charAt(temp.length - 1);
    carry = parseInt(temp.substr(0, temp.length - 1));
    carry = carry ? carry : 0;

    sum = i === str1.length - 1 ? temp + sum : digitSum + sum;
  }

  return sum;
}

function addBigIntegers(intString) {
  let result = '';

  for (const num of intString.split('\n')) {
    result = add(num, result);
  }

  return result;
}

export { addBigIntegers };
