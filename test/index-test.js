var chai = require('chai');
var sinon = require('sinon');


beforeEach(function() {
  expect.spyOn(console, 'log')
})

afterEach(function() {
  expect.restoreSpies()
})

describe('#printString', function() {
  it("should print all of the ", function() {
    printString('pizza')

    expect(console.log).toHaveBeenCalledWith("p")
    expect(console.log).toHaveBeenCalledWith("i")
    expect(console.log).toHaveBeenCalledWith("z")
    expect(console.log).toHaveBeenCalledWith("z")
    expect(console.log).toHaveBeenCalledWith("a")
  });

  it("calls the function once for each letter in the string", function() {
    var printString = sinon.spy(window, "printString");
    printString("pizza")
    expect(printString.callCount).toEqual(5)
  })
});

describe('#reverseString', function() {
  it("should reverse all of the letters of a string", function() {
    expect(reverseString('pizza')).toEqual("azzip")
  });

  it("should make the proper recursive calls", function() {
    var reverseString = sinon.spy(window, "reverseString");
    reverseString("pizza")
    expect(reverseString.callCount).toEqual(5)
  })
});


describe('#isPalindrome', function() {
  it("should return false when a string is not a palindrome", function() {
    expect(isPalindrome('pizza')).toEqual(false)
  });

  it("should return true when a string is a palindrome", function() {
    expect(isPalindrome("madamimadam")).toEqual(true)
  });

  it("should make the proper recursive calls", function() {
    var isPalindrome = sinon.spy(window, "isPalindrome");
    isPalindrome("madamimadam")
    expect(isPalindrome.callCount).toEqual(6)
  })
});

describe('#addUpTo', function() {
  it("should add up to a given index in an array", function() {
    expect(addUpTo([1, 4, 5, 3], 2)).toEqual(10)
  });

  it("should make the proper recursive calls", function() {
    var addUpTo = sinon.spy(window, "addUpTo");
    addUpTo([1, 4, 5, 3], 2)
    expect(addUpTo.callCount).toEqual(3)
  });
});

describe('#maxOf', function() {
  it("should find the maximum integer in an array", function() {
    expect(maxOf([1, 4, 5, 3])).toEqual(5)
  });

  it("should make the proper recursive calls", function() {
    var maxOf = sinon.spy(window, "maxOf");
    maxOf([1, 4, 5, 3])
    expect(maxOf.callCount).toEqual(4)
  });
});


describe('#includesNumber', function() {
  it("should return true if the number is included in the array", function() {
    expect(includesNumber([1, 4, 5, 3], 5)).toEqual(true)
  });

  it("should return false if the number is not included in the array", function() {
    expect(includesNumber([1, 4, 2, 3], 5)).toEqual(false)
  });

  it("should make the proper recursive calls", function() {
    var includesNumber = sinon.spy(window, "includesNumber");
    includesNumber([1, 4, 5, 3], 3)
    expect(includesNumber.callCount).toEqual(4)
  });
});
