var expect = chai.expect;
var assert = chai.assert;

function sum(x,y) {
    return x+y;
}

"use strict";
let result = 0;

function cyfra(napis) {
  'use strict';
  let arr = [0, 0];
  for (let znak of napis){
    znak = parseInt(znak);
    if (parseInt(znak)%2 === 0){
        arr[1] += parseInt(znak);
    } else if (parseInt(znak)%2 === 1) {
        arr[0] += parseInt(znak);
    };
  };
  return arr;
}

function litery(napis) {
  'use strict';
  let arr = [0, 0];
  for (let znak of napis){
    let result = znak.charCodeAt(0);
    if (65 <= result && result <= 90){
      arr[1] += 1;
    } else if (97 <= result && result <= 122){
      arr[0] += 1;
    };
  };
  return arr;
}

function suma(napis) {
  'use strict';
  let res = 0;
  for (let znak of napis){
    let result = znak.charCodeAt(0);
    if (48 <= result && result <= 57){
      res *= 10;
      res += parseInt(znak);
    } else {
      break;
    };
  };
  result += res;
  return res;
}

while (true){
  let liczba = window.prompt();
  if (liczba === null){
    break;
  }
  console.log("[" + JSON.stringify(cyfra(liczba)[0]) + ", " + JSON.stringify(cyfra(liczba)[1]) + "] "
   + JSON.stringify(litery(liczba)) + " " + JSON.stringify(result));
}

describe('The cyfra() function', function() {
    it('Returns [4,2] for 123', function() {
        assert.deepEqual(cyfra("123"), [4,2]);
    });
    it('Returns [0,0] for abcDD', function() {
        assert.deepEqual(cyfra("abcDD"), [0,0]);
    });
    it('Returns [4,2] for abcDD123', function() {
        assert.deepEqual(cyfra("abcDD123"), [4,2]);
    });
    it('Returns [15,0] for 555abcDD', function() {
        assert.deepEqual(cyfra("555abcDD"), [15,0]);
    });
    it('Returns [0,0] for ""', function() {
        assert.deepEqual(cyfra(""), [0,0]);
    });
});

describe('The litery() function', function() {
    it('Returns [0,0] for 123', function() {
        assert.deepEqual(litery("123"), [0, 0]);
    });
    it('Returns [3, 2] for abcDD', function() {
        assert.deepEqual(litery("abcDD"), [3, 2]);
    });
    it('Returns [3,2] for abcDD123', function() {
        assert.deepEqual(litery("abcDD123"), [3,2]);
    });
    it('Returns [3,2] for 555abcDD', function() {
        assert.deepEqual(litery("555abcDD"), [3,2]);
    });
    it('Returns [0,0] for ""', function() {
        assert.deepEqual(litery(""), [0,0]);
    });
});

describe('The suma() function', function() {
    it('Returns 123 for 123', function() {
        suma("123");
        assert.deepEqual(result, 123);
    });
    it('Returns 123 for abcDD', function() {
        suma("abcDD")
        assert.deepEqual(result, 123);
    });
    it('Returns 123 for abcDD123', function() {
        suma("abcDD123")
        assert.deepEqual(result, 123);
    });
    it('Returns 678 for 555abcDD', function() {
        suma("555abcDD")
        assert.deepEqual(result, 678);
    });
    it('Returns 678 for ""', function() {
        suma("");
        assert.deepEqual(result, 678);
    });
});