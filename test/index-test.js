try {
  window
} catch (e) {
  var sinon = require('sinon');
} finally {
  afterEach(function() {
    expect.restoreSpies();
  });

  describe('printString()', function() {
    it("prints out all of the characters in a passed-in string", function() {
      expect.spyOn(console, 'log');

      printString('pizza');

      expect(console.log).toHaveBeenCalledWith("p");
      expect(console.log).toHaveBeenCalledWith("i");
      expect(console.log).toHaveBeenCalledWith("z");
      expect(console.log).toHaveBeenCalledWith("z");
      expect(console.log).toHaveBeenCalledWith("a");
    });

    it("is not hard-coded", function() {
      expect.spyOn(console, 'log');

      printString('chocolate');

      expect(console.log).toHaveBeenCalledWith("c");
      expect(console.log).toHaveBeenCalledWith("h");
      expect(console.log).toHaveBeenCalledWith("o");
      expect(console.log).toHaveBeenCalledWith("c");
      expect(console.log).toHaveBeenCalledWith("o");
      expect(console.log).toHaveBeenCalledWith("l");
      expect(console.log).toHaveBeenCalledWith("a");
      expect(console.log).toHaveBeenCalledWith("t");
      expect(console.log).toHaveBeenCalledWith("e");
    });

    it("recurses, calling itself once for each letter in the string", function() {
      var printString = sinon.spy(window, "printString");

      printString("pizza")

      expect(printString.callCount).toEqual(5)
    });
  });

  describe('reverseString()', function() {
    it("reverses all of the letters in a string", function() {
      expect(reverseString('pizza')).toEqual("azzip");
      expect(reverseString('chocolate')).toEqual("etalocohc");
    });

    it("makes the proper recursive calls", function() {
      var reverseString = sinon.spy(window, "reverseString");

      reverseString("pizza");

      expect(reverseString.callCount)
        .toBeGreaterThanOrEqualTo(5)
        .toBeLessThanOrEqualTo(6)
    });
  });

  describe('isPalindrome()', function() {
    it("returns 'false' when a string is not a palindrome", function() {
      expect(isPalindrome('pizza')).toEqual(false);
    });

    it("returns 'true' when a string is a palindrome", function() {
      expect(isPalindrome("madamimadam")).toEqual(true)
    });

    it("makes the proper recursive calls", function() {
      var isPalindrome = sinon.spy(window, "isPalindrome");

      isPalindrome("madamimadam")

      expect(isPalindrome.callCount).toEqual(6)
    });
  });

  describe('addUpTo()', function() {
    it("sums all members up to a given index in an array", function() {
      expect(addUpTo([1, 4, 5, 3], 2)).toEqual(10);
      expect(addUpTo([4, 3, 1, 5], 1)).toEqual(7);
    });

    it("makes the proper recursive calls", function() {
      var addUpTo = sinon.spy(window, "addUpTo");

      addUpTo([1, 4, 5, 3], 2);

      expect(addUpTo.callCount).toEqual(3);
    });
  });

  describe('maxOf()', function() {
    it("finds the largest integer in an array", function() {
      expect(maxOf([1, 4, 5, 3])).toEqual(5);
      expect(maxOf([6, 2, 4, 5])).toEqual(6);
    });

    it("makes the proper recursive calls", function() {
      var maxOf = sinon.spy(window, "maxOf");

      maxOf([1, 4, 5, 3]);

      expect(maxOf.callCount).toEqual(4);
    });
  });

  describe('includesNumber()', function() {
    it("returns 'true' if the number is present in the array", function() {
      expect(includesNumber([1, 4, 5, 3], 5)).toEqual(true);
    });

    it("returns 'false' if the number is not present in the array", function() {
      expect(includesNumber([1, 4, 2, 3], 5)).toEqual(false);
    });

    it("makes the proper recursive calls", function() {
      var includesNumber = sinon.spy(window, "includesNumber");

      includesNumber([1, 4, 5, 3], 3);

      expect(includesNumber.callCount).toEqual(4);
    });
  });
}
