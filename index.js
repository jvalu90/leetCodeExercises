//'use strict'

const log = arg => console.log(arg)

/*

1431. Kids With the Greatest Number of Candies

There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

*/

var kidsWithCandies = function(candies, extraCandies) {
  let trueOrFalseArray = []

  for (let index = 0; index < candies.length; index++) {
    trueOrFalseArray.push(true)
  }

  let newCandies = candies.map(element => element + extraCandies)

  for (let i = 0; i < newCandies.length; i++) {
    for (let j = 0; j < candies.length; j++) {
      if (newCandies[i] < candies[j]) {
        trueOrFalseArray[i] = false
        break
      }
    }
  }

  return trueOrFalseArray
};

//log(kidsWithCandies([4,2,1,1,2], 1)) // [true,false,false,false,false] 
//log(kidsWithCandies([12,1,12], 10)) // [true,false,true]

/*

771. Jewels and Stones

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

*/

var numJewelsInStones = function(jewels, stones) {
  let countJewels = 0

  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones.charAt(i))) {
      countJewels++
    }
  }

  return countJewels
};

//log(numJewelsInStones("aA", "aAAbbbb"))

/*
1603. Design Parking System

Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.

bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.

*/

var ParkingSystem = function(big, medium, small) {
  this.spaces = [big, medium, small]
};

ParkingSystem.prototype.addCar = function(carType) {
  const space = this.spaces[carType - 1] > 0 ? true : false
  this.spaces[carType - 1]--
  return space
};

/*
1365. How Many Numbers Are Smaller Than the Current Number

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.
*/

var smallerNumbersThanCurrent = function(nums) {
  let smallerArray = []
  for (let i = 0; i < nums.length; i++) {
    smallerArray[i] = 0
    for (let j = 0; j < nums.length; j++) {
      if ((nums[i] !== nums[j]) && (nums[j] < nums[i])) {
        smallerArray[i]++
      }
    }
  }

  return smallerArray
};

//log(smallerNumbersThanCurrent([8,1,2,2,3])) // [4,0,1,1,3]

/*
1281. Subtract the Product and Sum of Digits of an Integer

Given an integer number n, return the difference between the product of its digits and the sum of its digits. 
*/

var subtractProductAndSum = function(n) {
  const numberArray = []

  while (n > 0) {
    numberArray.push(n % 10)
    n = Math.trunc(n / 10)
  }

  const sum = numberArray.reduce((total, value) => total + value, 0)
  const multiplication = numberArray.reduce((total, value) => total * value, 1)
  const difference = multiplication - sum

  return difference
};

//log(subtractProductAndSum(4421))

/*
1720. Decode XORed Array

There is a hidden integer array arr that consists of n non-negative integers.

It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

Return the original array arr. It can be proved that the answer exists and is unique.
*/

var decode = function(encoded, first) {
  let hiddenArray = [first]

  for (let index = 0; index < encoded.length; index++) {
    hiddenArray[index + 1] = hiddenArray[index] ^ encoded[index]
  }
  return hiddenArray
};

//log(decode([1,2,3], 1)) // [1,0,2,1]
//log(decode([6,2,7,3], 4)) // [4,2,0,7,4]
//log(decode([6], 1)) // [1, 7]
//log(decode([0, 6], 5)) // [5,5,3]

/*
1313. Decompress Run-Length Encoded List

We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.
*/

var decompressRLElist = function(nums) {
  let newArray = []

  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 0; j < nums[i]; j++) {
      newArray.push(nums[i + 1]);
    }
  }
  return newArray
};

//log(decompressRLElist([1,2,3,4]))
/*
2235. Add Two Integers

Given two integers num1 and num2, return the sum of the two integers.
*/
var sum = function(num1, num2) {
  return parseInt(num1) + parseInt(num2)
};

//log(sum(12, 5))

/*
2236. Root Equals Sum of Children

You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.

Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

var checkTree = function(root) {
    return root.val === root.left.val + root.right.val
};

*/

var checkTree = function(root) {
  const message = parseInt(root[0]) === (parseInt(root[1]) + parseInt(root[2])) ? true : false
  return message
};

//log(checkTree([10,4,6])) //true
//log(checkTree([5,3,1])) //false

/*

1528. Shuffle String

You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.
*/

var restoreString = function(s, indices) {
  let stringArray = s.split('')

  for (let index = 0; index < indices.length; index++) {
    stringArray[indices[index]] = s[index]
  }
  return stringArray.join('')
};

//log(restoreString("codeleet", [4,5,6,7,0,2,1,3])) // "leetcode"
//log(restoreString("abc", [0,1,2])) // "abc"

/*
1678. Goal Parser Interpretation

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

*/

var interpret = function(command) {
  return command.replaceAll('()', 'o').replaceAll('(al)', 'al')
};

//log(interpret("G()(al)")) // "Goal"
//log(interpret("G()()()()(al)")) // "Gooooal"
//log(interpret("(al)G(al)()()G")) // "alGalooG"

/*
1342. Number of Steps to Reduce a Number to Zero

Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

var numberOfSteps = function(num) {
  let stepsCounter = 0

  while (num > 0) {
    num % 2 === 0 ? num /= 2 : num--
    stepsCounter++
  }
  return stepsCounter
};

//log(numberOfSteps(14)) // 6
//log(numberOfSteps(8)) // 4
//log(numberOfSteps(123)) // 12

/*
2194. Cells in a Range on an Excel Sheet

A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:

    <col> denotes the column number c of the cell. It is represented by alphabetical letters.
        For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
    <row> is the row number r of the cell. The rth row is represented by the integer r.

You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.

Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.

*/

var cellsInRange = function(s) {
  //const [fromLetter, fromNum, , toLetter, toNum] = s;
  const arrayRange = [];

  for (let l1 = s[0].charCodeAt(0), l2 = s[3].charCodeAt(0); l1 <= l2; l1++) {
    for (let n1 = parseInt(s[1]), n2 = parseInt(s[4]); n1 <= n2; n1++) {
      arrayRange.push(String.fromCharCode(l1) + n1);
    }
  }
  return arrayRange;
};

//log(cellsInRange("K1:L2")) // ["K1","K2","L1","L2"]
//log(cellsInRange("A1:F1")) // ["A1","B1","C1","D1","E1","F1"]

/*
1389. Create Target Array in the Given Order

Given two arrays of integers nums and index. Your task is to create target array under the following rules:

    Initially target array is empty.
    From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
    Repeat the previous step until there are no elements to read in nums and index.

Return the target array.

It is guaranteed that the insertion operations will be valid.
*/

var createTargetArray = function(nums, index) {
  let targetArray = []

  for (let i = 0; i < nums.length; i++) {
    targetArray.splice(index[i], 0, nums[i])
  }

  return targetArray

};

//log(createTargetArray([0,1,2,3,4], [0,1,2,2,1])) // [0,4,1,3,2]
//log(createTargetArray([1,2,3,4,0], [0,1,2,3,0])) // [0,1,2,3,4]
//log(createTargetArray([1], [0])) // [1]

/*
938. Range Sum of BST

Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].
*/

var rangeSumBST = function(root, low, high) {
  let sum = 0;

  function search(node) {
    if (node == null) return;
    if (low <= node.val && node.val <= high) {
      sum += node.val;
    }
    if (low < node.val) search(node.left);
    if (node.val < high) search(node.right);
  }

  search(root);
  return sum;
};

//log(rangeSumBST([10,5,15,3,7,null,18], 7, 15)) // 32
//log(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10)) // 23

/*
1221. Split a String in Balanced Strings

Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.

*/

var balancedStringSplit = function(s) {
  let totalCount = 0, count = 0;

  for (let char of s) {
    char === 'R' ? count++ : count--

    if (count === 0) {
      totalCount++
    }
  }
  return totalCount;
};

//log(balancedStringSplit("RLRRLLRLRL")) // 4
//log(balancedStringSplit("RLLLLRRRLR")) // 3
//log(balancedStringSplit("LLLLRRRR")) // 1

/*
1859. Sorting the Sentence

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

    For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".

Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence
*/

var sortSentence = function(s) {
  s = s.split(' ').sort((a, b) => a[a.length - 1] - b[b.length - 1]).join(' ')
  return s.replace(/[0-9]/g, '')
};

//log(sortSentence("is2 sentence4 This1 a3")) // "This is a sentence"
//log(sortSentence("Myself2 Me1 I4 and3")) // "Me Myself and I"

/*
1773. Count Items Matching a Rule

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

    ruleKey == "type" and ruleValue == typei.
    ruleKey == "color" and ruleValue == colori.
    ruleKey == "name" and ruleValue == namei.

Return the number of items that match the given rule.

*/

var countMatches = function(items, ruleKey, ruleValue) {
  let obj = []

  for (let item of items) {
    obj.push({ ...item })
  }

  switch (ruleKey) {
    case 'type':
      return obj.filter(element => element[0] === ruleValue).length
    case 'color':
      return obj.filter(element => element[1] === ruleValue).length
    case 'name':
      return obj.filter(element => element[2] === ruleValue).length
  }

  // Otra opcion a traves de la iteracion

  /*
    let id;
    
    switch (ruleKey) {
        case 'type':
            id = 0
            break
        case 'color': 
            id = 1
            break
        case 'name':
            id = 2
    }

    return items.filter(x => x[id] == ruleValue).length;

  */


};

//log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver")) //1
//log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone")) // 2

/*
1486. XOR Operation in an Array

You are given an integer n and an integer start.

Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.

*/

var xorOperation = function(n, start) {
  let array = [start]

  for (let i = 1; i < n; i++) {
    array[i] = start + 2 * i
  }

  return array.reduce((xorTotal, element) => xorTotal ^= element, 0)
};

//log(xorOperation(5, 0)) //8
//log(xorOperation(4, 3)) //8

/*
1656. Design an Ordered Stream

There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

Implement the OrderedStream class:

    OrderedStream(int n) Constructs the stream to take n values.
    String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.

*/

var OrderedStream = function(n) {
  this.pointer = 0
  this.list = []
};

OrderedStream.prototype.insert = function(idKey, value) {
  let chunk = []
  this.list[idKey - 1] = value
  while (this.list[this.pointer]) {
    chunk.push(this.list[this.pointer])
    this.pointer++
  }
  return chunk
};

/*
There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

*/

var findCenter = function(edges) {
  return edges[1][0] === edges[0][0] || edges[1][0] === edges[0][1] ? edges[1][0] : edges[1][1];
};

//log(findCenter([[1,2],[2,3],[4,2]])) // 2
//log(findCenter([[1,2],[5,1],[1,3],[1,4]])) // 1

/*

Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

*/


var sumOddLengthSubarrays = function(arr) {
  let sum = 0, N = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let total = i * (N - i) + (N - i);
    sum += Math.ceil(total / 2) * arr[i];
  }
  return sum;
}

//log(sumOddLengthSubarrays([1,4,2,5,3])) // 58
//log(sumOddLengthSubarrays([1,2])) // 3
//log(sumOddLengthSubarrays([10,11,12])) // 66

/*
1614. Maximum Nesting Depth of the Parentheses

A string is a valid parentheses string (denoted VPS) if it meets one of the following:

    It is an empty string "", or a single character not equal to "(" or ")",
    It can be written as AB (A concatenated with B), where A and B are VPS's, or
    It can be written as (A), where A is a VPS.

We can similarly define the nesting depth depth(S) of any VPS S as follows:

    depth("") = 0
    depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
    depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
    depth("(" + A + ")") = 1 + depth(A), where A is a VPS.

For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

Given a VPS represented as string s, return the nesting depth of s.

*/

var maxDepth = function(s) {
  let maxDepth = 0
  let maxDepthArray = []

  for (let i = 0; i < s.length; i++) {

    if (s[i] === '(') {
      maxDepthArray.push(s[i])
    }

    if (s[i] === ")" && maxDepthArray[maxDepthArray.length - 1] === '(') {
      maxDepth = Math.max(maxDepth, maxDepthArray.length)
      maxDepthArray.pop();
    }
  }

  return maxDepth
};

//log(maxDepth("(1+(2*3)+((8)/4))+1")) // 3
//log(maxDepth("(1)+((2))+(((3)))")) // 3

/*
2006. Count Number of Pairs With Absolute Difference K

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

    x if x >= 0.
    -x if x < 0.

*/

var countKDifference = function(nums, k) {
  let counter = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      (Math.abs(nums[i] - nums[j]) === k) ? counter++ : null
    }
  }

  return counter
};

//log(countKDifference([1,2,2,1], 1)) //4
//log(countKDifference([1,3], 3)) //0
//log(countKDifference([3,2,1,5,4], 2)) //3

/*
2037. Minimum Number of Moves to Seat Everyone

There are n seats and n students in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

You may perform the following move any number of times:

    Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)

Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

Note that there may be multiple seats or students in the same position at the beginning.

*/

var minMovesToSeat = function(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let minimum = 0;

  for (let index = 0; index < students.length; index++) {
    minimum += Math.abs(students[index] - seats[index]);
  }

  return minimum;
};

//log(minMovesToSeat([3,1,5], [2,7,4])) // 4
//log(minMovesToSeat([4,1,5,9], [1,3,2,6])) // 7
//log(minMovesToSeat([2,2,6,6], [1,3,2,6])) // 4

/*
1688. Count of Matches in Tournament

You are given an integer n, the number of teams in a tournament that has strange rules:

    If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
    If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.

Return the number of matches played in the tournament until a winner is decided.
*/

var numberOfMatches = function(n) {
  let matches = 0

  while (n > 1) {
    if (n % 2 === 0) {
      matches += n / 2
      n -= n / 2
    } else {
      matches += (n - 1) / 2
      n -= ((n - 1) / 2)
    }
  }

  return matches
};

//log(numberOfMatches(7)) // 6
//log(numberOfMatches(14)) // 13

/*
1290. Convert Binary Number in a Linked List to Integer

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.
*/

var getDecimalValue = function(head) {
  let str = "";

  while (head) {
    str = str + head.val;
    head = head.next;
  }
  return parseInt(str, 2);
};

//log(getDecimalValue([1,0,1])) //5
//log(getDecimalValue([0])) //0

/*
1662. Check If Two String Arrays are Equivalent

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
*/

var arrayStringsAreEqual = function(word1, word2) {

  return word1.join('') === word2.join('')

};

//log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])) //true
//log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])) //false
//log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])) //true

/*
1684. Count the Number of Consistent Strings

You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.
*/

var countConsistentStrings = function(allowed, words) {

  let count = 0

  function checkIfConsistent(str) {
    let isConsistent = true
    for (let letter of str) {
      if (!allowed.includes(letter)) {
        isConsistent = false
        break
      }
    }
    return isConsistent
  }

  words.forEach((word) => {
    checkIfConsistent(word) && count++
  })

  return count

};

//log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])) // 2
//log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"])) // 7
//log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"])) // 4

/*
2103. Rings and Rods

There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

    The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
    The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').

For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

Return the number of rods that have all three colors of rings on them.
*/

var countPoints = function(rings) {
  let arr = {};
  for (let i = 1; i <= rings.length; i += 2) {
    !(arr[rings[i]]) ? arr[rings[i]] = {} : null

    if ((arr[rings[i]][rings[i - 1]])) {
      arr[rings[i]][rings[i - 1]] = arr[rings[i]][rings[i - 1]] + 1
    } else {
      arr[rings[i]][rings[i - 1]] = 1;
    }
  }

  return Object.keys(arr).filter(x => arr[x]['B'] && arr[x]['R'] && arr[x]['G']).length;
};

//log(countPoints("B0B6G0R6R0R6G9")) // 1
//log(countPoints("B0R0G0R9R0B0G0")) // 1
//log(countPoints("G4")) // 0

/*
1832. Check if the Sentence Is Pangram
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/

var checkIfPangram = function(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let control = true

  for (let char of alphabet) {
    if (!sentence.includes(char)) {
      control = false
      break
    }
  }

  return control
};

//log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")) // true
//log(checkIfPangram("leetcode")) // false

/*
709. To Lower Case

Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
*/

var toLowerCase = function(s) {
  return s.toLowerCase()
};

//log(toLowerCase("Hello")) // hello
//log(toLowerCase("here")) // here
//log(toLowerCase("LOVELY")) // lovely

/*
1816. Truncate Sentence

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

    For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.

You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
*/

var truncateSentence = function(s, k) {
  let truncateArray = s.split(' ')

  for (let i = truncateArray.length; i > k; i--) {
    truncateArray.pop()
  }

  return truncateArray.join(' ')
};

//log(truncateSentence("Hello how are you Contestant", 4)) // "Hello how are you"
//log(truncateSentence("What is the solution to this problem", 4)) // "What is the solution"
//log(truncateSentence("chopper is not a tanuki", 5)) // "chopper is not a tanuki"

/*
1913. Maximum Product Difference Between Two Pairs

The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

    For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.

Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.
*/

var maxProductDifference = function(nums) {
  nums.sort((a, b) => a - b)
  return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1])
};

//log(maxProductDifference([5,6,2,7,4])) // 34
//log(maxProductDifference([4,2,5,9,7,4,8])) // 64

/*
2220. Minimum Bit Flips to Convert Number

A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.

    For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.

Given two integers start and goal, return the minimum number of bit flips to convert start to goal.
*/

var minBitFlips = function(start, goal) {
  return (start ^ goal).toString(2).split("0").join("").length;
};

//log(minBitFlips(10, 7)) // 3
//log(minBitFlips(3, 4)) // 3

/*
1534. Count Good Triplets

Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

    0 <= i < j < k < arr.length
    |arr[i] - arr[j]| <= a
    |arr[j] - arr[k]| <= b
    |arr[i] - arr[k]| <= c

Where |x| denotes the absolute value of x.

Return the number of good triplets.
*/

var countGoodTriplets = function(arr, a, b, c) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        ((0 <= i && i < j && j < k && k < arr.length) && (Math.abs(arr[i] - arr[j]) <= a) && (Math.abs(arr[j] - arr[k]) <= b) && (Math.abs(arr[i] - arr[k]) <= c)) ? counter++ : null
      }
    }
  }

  return counter
};

//log(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3)) // 4
//log(countGoodTriplets([1,1,2,2,3], 0, 0, 1)) // 0

/*
2176. Count Equal and Divisible Pairs in an Array

Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k. 
*/

var countPairs = function(nums, k) {
  let counter = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      nums[i] == nums[j] && ((i * j) % k) === 0 ? counter++ : null
    }
  }

  return counter

};

//log(countPairs([3,1,2,2,2,1,3], 2)) // 4
//log(countPairs([1,2,3,4], 1)) // 0

/*
1844. Replace All Digits with Characters

You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

    For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.

For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.
*/

var replaceDigits = function(s) {
  function shift(char, num) {
    return String.fromCharCode(char.charCodeAt() + num)
  }

  let stringArray = s.split('')

  for (let i = 1; i < stringArray.length; i += 2) {
    stringArray[i] = shift(stringArray[i - 1], parseInt(stringArray[i]))
  }

  return stringArray.join('')
};

//log(replaceDigits("a1c1e1")) // "abcdef"
//log(replaceDigits("a1b2c3d4e")) // "abbdcfdhe"

/*
804. Unique Morse Code Words

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

    'a' maps to ".-",
    'b' maps to "-...",
    'c' maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

    For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.

Return the number of different transformations among all words we have.
*/

var uniqueMorseRepresentations = function(words) {
  let arrayMorse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  let transformationMorseWords = []

  for (let word of words) {
    let transformationMorseWord = []

    for (let char of word) {
      transformationMorseWord.push(arrayMorse[char.charCodeAt() - 97])
    }
    transformationMorseWords.push(transformationMorseWord.join(''))
  }
  let set = new Set(transformationMorseWords)

  return set.size
};

//log(uniqueMorseRepresentations(["gin","zen","gig","msg"])) // 2
//log(uniqueMorseRepresentations(["a"])) // 1

/*
1021. Remove Outermost Parentheses

A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

    For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
*/

var removeOuterParentheses = function(s) {
  let stack = []
  let result = ''

  for (const char of s) {
    if (char === '(') {
      if (stack.length) {
        result += char;
      }
      stack.push(char);
    } else {
      stack.pop();
      if (stack.length) {
        result += char;
      }
    }
  }
  return result;
};

//log(removeOuterParentheses("(()())(())")) // "()()()"
//log(removeOuterParentheses("(()())(())(()(()))")) // "()()()()(())"
//log(removeOuterParentheses("()()")) // "()()"

/*
832. Flipping an Image

Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

    For example, flipping [1,1,0] horizontally results in [0,1,1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

    For example, inverting [0,1,1] results in [1,0,0].

*/

var flipAndInvertImage = function(image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse()
    for (let j = 0; j < image[i].length; j++) {
      image[i][j] === 1 ? image[i][j] = 0 : image[i][j] = 1
    }
  }
  return image
};

//log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])) // [[1,0,0],[0,1,0],[1,1,1]]
//log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])) // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

/*
1967. Number of Strings That Appear as Substrings in Word

Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.
*/

var numOfStrings = function(patterns, word) {
  let counter = 0
  for (let pattern of patterns) word.includes(pattern) ? counter++ : null
  return counter
};

//log(numOfStrings(["a","abc","bc","d"], "abc")) // 3
//log(numOfStrings(["a","b","c"], "aaaaabbbbb")) // 2

/*
2108. Find First Palindromic String in the Array

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.
*/

var firstPalindrome = function(words) {
  let isPalindrome = ''
  for (let word of words) {
    if (word === word.split('').reverse().join('')) {
      isPalindrome = word
      break
    }
  }
  return isPalindrome
};

//log(firstPalindrome(["abc","car","ada","racecar","cool"])) // "ada"
//log(firstPalindrome(["notapalindrome","racecar"])) // "racecar"

/*
1266. Minimum Time Visiting All Points

On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

You can move according to these rules:

    In 1 second, you can either:
        move vertically by one unit,
        move horizontally by one unit, or
        move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
    You have to visit the points in the same order as they appear in the array.
    You are allowed to pass through points that appear later in the order, but these do not count as visits.
*/

var minTimeToVisitAllPoints = function(points) {
  let sum = 0;
  for (let i = 1; i < points.length; i++) {
    sum += Math.max(Math.abs(points[i][0] - points[i - 1][0]), Math.abs(points[i][1] - points[i - 1][1]));
  }
  return sum;
};

//log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]])) // 7
//log(minTimeToVisitAllPoints([[3,2],[-2,2]])) // 5

/*
1572. Matrix Diagonal Sum

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
*/

var diagonalSum = function(mat) {
  let sum = 0

  for (let i = 0, j = 0; i, j < mat.length; i++, j++) {
    sum += mat[i][j] + mat[mat.length - 1 - i][j]
  }

  mat.length % 2 !== 0 ? sum -= mat[Math.trunc(mat.length / 2)][Math.trunc(mat.length / 2)] : null
  return sum
};

//log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])) // 25
//log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]])) // 8
//log(diagonalSum([[5]])) // 5

/*
1732. Find the Highest Altitude

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
*/

var largestAltitude = function(gain) {
  let gainArray = [0]

  for (let i = 0; i < gain.length; i++) {
    gainArray.push(gain[i] + gainArray[i])
  }

  return Math.max(...gainArray)
};

//log(largestAltitude([-5,1,5,0,-7])) // 1
//log(largestAltitude([-4,-3,-2,-1,4,3,2])) //0

/*
1323. Maximum 69 Number

You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
*/

var maximum69Number = function(num) {
  return Number(String(num).replace('6', '9'))
};

//log(maximum69Number(9669)) // 9969
//log(maximum69Number(9996)) // 9999
//log(maximum69Number(9999)) // 9999

/*
1725. Number Of Rectangles That Can Form The Largest Square

You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

Return the number of rectangles that can make a square with a side length of maxLen.
*/

var countGoodRectangles = function(rectangles) {
  let arrayMinSides = []
  let counterRectangles = 0

  for (let rectangle of rectangles) {
    arrayMinSides.push(Math.min(...rectangle))
  }

  const maxSide = Math.max(...arrayMinSides)

  for (let side of arrayMinSides) {
    maxSide <= side ? counterRectangles++ : null
  }

  return counterRectangles
};

//log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]])) // 3
//log(countGoodRectangles([[2,3],[3,7],[4,3],[3,7]])) // 3

/*
1309. Decrypt String from Alphabet to Integer Mapping

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

    Characters ('a' to 'i') are represented by ('1' to '9') respectively.
    Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.

Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.
*/

var freqAlphabets = function(s) {
  let stringFormed = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] == '#') {
      stringFormed += String.fromCharCode(parseInt(s.slice(i, i + 2)) + 96);
      i += 2;
    } else {
      stringFormed += String.fromCharCode(parseInt(s[i]) + 96);
    }
  }
  return stringFormed;
};

//log(freqAlphabets("10#11#12")) // "jkab"
//log(freqAlphabets("1326#")) // "acz"

/*
557. Reverse Words in a String III

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

var reverseWords = function(s) {
  let newStringArray = s.split(' ')

  for (let i = 0; i < newStringArray.length; i++) {
    newStringArray[i] = newStringArray[i].split('').reverse().join('')
  }

  return newStringArray.join(' ')
};

//log(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"
//log(reverseWords("God Ding")) // "doG gniD"

/*
2089. Find Target Indices After Sorting Array

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.
*/

var targetIndices = function(nums, target) {
  const numsOrganized = nums.sort((a, b) => a - b)
  let targetList = []

  for (let i = 0; i < nums.length; i++) {
    numsOrganized[i] === target ? targetList.push(i) : null
  }
  return targetList
};

//log(targetIndices([1,2,5,2,3], 2)) // [1,2]
//log(targetIndices([1,2,5,2,3], 3)) // [3]
//log(targetIndices([1,2,5,2,3], 5)) // [4]

/*
1863. Sum of All Subset XOR Totals

The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

    For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.

Given an array nums, return the sum of all XOR totals for every subset of nums. 

Note: Subsets with the same elements should be counted multiple times.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.
*/

var subsetXORSum = function(nums) {
  return nums.reduce((acc, curr, index) => {
    const XOR = (array, start) => {
      acc += array.reduce((xorAcc, xorCurr) => xorAcc ^ xorCurr, 0);
      for (let xorIndex = start + 1; xorIndex < nums.length; xorIndex++) {
        array.push(nums[xorIndex]);
        XOR(array, xorIndex);
        array.pop();
      }
    };
    XOR([curr], index);
    return acc;
  }, 0);
};

//log(subsetXORSum([1,3])) // 6
//log(subsetXORSum([5,1,6])) // 28
//log(subsetXORSum([3,4,5,6,7,8])) // 480

/*
1252. Cells with Odd Values in a Matrix

There is an m x n matrix that is initialized to all 0's. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.

For each location indices[i], do both of the following:

    Increment all the cells on row ri.
    Increment all the cells on column ci.

Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.
*/

var oddCells = function(m, n, indices) {
  let matrix = Array(m).fill(0).map(() => Array(n).fill(0))

  const flatIndices = indices.flat();

  let incRow = (rowNum) => {
    for (let i = 0; i < matrix[rowNum].length; i++) {
      matrix[rowNum][i]++;
    }
  };

  let incCol = (colNum) => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][colNum]++;
    }
  };

  for (let i = 0; i < flatIndices.length; i++) {
    if (i % 2 == 0) {
      incRow(flatIndices[i]);
    } else {
      incCol(flatIndices[i]);
    }
  }

  let odd = 0;
  const flatMatrix = matrix.flat();
  for (let i = 0; i < flatMatrix.length; i++) {
    if (flatMatrix[i] % 2 !== 0) {
      odd += 1;
    }
  }

  return odd;
};

//log(oddCells(2, 3, [[0,1],[1,1]])) // 6
//log(oddCells(2, 2, [[1,1],[0,0]])) // 0

/*
1827. Minimum Operations to Make the Array Increasing

You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

    For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].

Return the minimum number of operations needed to make nums strictly increasing.

An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.
*/

var minOperations = function(nums) {
  let sum = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      sum += Math.abs(nums[i] - nums[i - 1]) + 1
      nums[i] += Math.abs(nums[i] - nums[i - 1]) + 1
    }
  }
  return sum
};

//log(minOperations([1,1,1])) // 3
//log(minOperations([1,5,2,4,1])) // 14

/*
1464. Maximum Product of Two Elements in an Array

Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1). 
*/

var maxProduct = function(nums) {
  nums.sort((a, b) => a - b)
  return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1)
};

//log(maxProduct([3,4,5,2])) //12
//log(maxProduct([1,5,4,5])) //16
//log(maxProduct([3,7])) //12

/*
897. Increasing Order Search Tree

Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.
*/

var increasingBST = function(root) {
  let treeNode = null;
  let prev = null

  function preOrderTraverse(root) {
    if (!root) return;

    if (root.left) preOrderTraverse(root.left);

    if (!treeNode) {
      treeNode = new TreeNode(root.val);
      prev = treeNode;
    } else {
      prev.right = new TreeNode(root.val);
      prev = prev.right;
    }

    if (root.right) preOrderTraverse(root.right);
  }

  preOrderTraverse(root)
  return treeNode;
};

/*
1704. Determine if String Halves Are Alike

You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.
*/

var halvesAreAlike = function(s) {
  const vowelsArray = ['a', 'e', 'i', 'o', 'u']
  s = s.toLowerCase()
  let countA = 0
  let countB = 0

  const a = s.slice(0, s.length / 2)
  const b = s.slice(s.length / 2)

  for (let i = 0; i < s.length / 2; i++) {
    vowelsArray.includes(a[i]) ? countA++ : null
    vowelsArray.includes(b[i]) ? countB++ : null
  }

  return countA === countB
};

//log(halvesAreAlike("book")) // true
//log(halvesAreAlike("textbook")) // false

/*
617. Merge Two Binary Trees

You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.
*/

var mergeTrees = function(root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;

  const newNode = new TreeNode(
    root1.val + root2.val,
    mergeTrees(root1.left, root2.left),
    mergeTrees(root1.right, root2.right)
  )

  return newNode
};

/*
2000. Reverse Prefix of Word

Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

    For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".

Return the resulting string.
*/

var reversePrefix = function(word, ch) {
  word = word.split('')

  let firstSegment = word.slice(0, word.indexOf(ch) + 1).reverse()
  let secondSegment = word.slice(word.indexOf(ch) + 1, word.length)

  return firstSegment.concat(secondSegment).join('')
};

//log(reversePrefix("abcdefd", "d")) // "dcbaefd"
//log(reversePrefix("xyxzxe", "z")) // "zxyxxe"
//log(reversePrefix("abcd", "z")) // "abcd"

/*
1370. Increasing Decreasing String

You are given a string s. Reorder the string using the following algorithm:

    Pick the smallest character from s and append it to the result.
    Pick the smallest character from s which is greater than the last appended character to the result and append it.
    Repeat step 2 until you cannot pick more characters.
    Pick the largest character from s and append it to the result.
    Pick the largest character from s which is smaller than the last appended character to the result and append it.
    Repeat step 5 until you cannot pick more characters.
    Repeat the steps from 1 to 6 until you pick all characters from s.

In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.
*/

var sortString = function(s) {
  s = s.split('').sort()
  let newString = ''

  while (s.length) {
    s = s.filter((x, i) => {
      if (i === 0 || x !== newString[newString.length - 1]) {
        newString += x;
        return false
      }
      return true;
    });

    s.reverse();
  }

  return newString;
};

//log(sortString("aaaabbbbcccc")) // "abccbaabccba"
//log(sortString("rat")) // "art"

/*
1979. Find Greatest Common Divisor of Array

Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
*/

var findGCD = function(nums) {
  let min = Math.min(...nums), max = Math.max(...nums), mcd;

  for (let i = 1; i <= min; i++) {
    min % i === 0 && max % i === 0 ? mcd = i : null
  }

  return mcd
};

//log(findGCD([2,5,6,9,10])) // 2
//log(findGCD([7,5,6,8,3])) // 1
//log(findGCD([3,3])) // 3

/*
1436. Destination City

You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.
*/

var destCity = function(paths) {
  let origin = []
  let destination = []
  for (let i = 0; i < paths.length; i++) {
    origin.push(paths[i][0])
    destination.push(paths[i][1])
  }

  for (let i = 0; i < destination.length; i++) {
    if (!origin.includes(destination[i])) return destination[i]
  }
};

//log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])) // "Sao Paulo" 
//log(destCity([["B","C"],["D","B"],["C","A"]])) // "A"
//log(destCity([["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]])) // "wxAscRuzOl"

/*
1812. Determine Color of a Chessboard Square
You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.

Return true if the square is white, and false if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.
*/

var squareIsWhite = function(coordinates) {
  return (coordinates.charCodeAt(0) + Number(coordinates[1])) % 2 !== 0
};

//log(squareIsWhite("a1")) // false
//log(squareIsWhite("h3")) // true

/*
2185. Counting Words With a Given Prefix

You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.
*/

var prefixCount = function(words, pref) {
  let counter = 0
  for (let word of words) {
    word.search(pref) === 0 ? counter++ : null
  }

  return counter
};

//log(prefixCount(["pay","attention","practice","attend"], "at")) // 2
//log(prefixCount(["leetcode","win","loops","success"], "code")) // 0

/*
1374. Generate a String With Characters That Have Odd Counts

Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  
*/

var generateTheString = function(n) {
  return n % 2 === 0 ? "a".repeat(n - 1) + "b" : "a".repeat(n);
};

//log(generateTheString(4)) // "pppz"
//log(generateTheString(2)) // "xy"
//log(generateTheString(7)) // "holasss"

/*
1941. Check if All Characters Have Equal Number of Occurrences

Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
*/

var areOccurrencesEqual = function(s) {

  const frecuencies = {}
  let max = 0

  for (let charIndex = 0; charIndex < s.length; charIndex++) {
    const char = s[charIndex]

    if (frecuencies[char] === undefined) {
      frecuencies[char] = 1
    } else {
      frecuencies[char] += 1
    }
    max = Math.max(max, frecuencies[char])
  }

  return !Object.values(frecuencies).some(element => element !== max);
};

//log(areOccurrencesEqual("abacbc")) // true
//log(areOccurrencesEqual("aaabb")) // false

/*
1295. Find Numbers with Even Number of Digits

Given an array nums of integers, return how many of them contain an even number of digits.
*/

var findNumbers = function(nums) {
  return nums.filter(element => element.toString().length % 2 === 0).length
  //return nums.reduce((accum, curr) => accum + Math.floor(Math.log10(curr)) % 2, 0);

  /*
  Note:

    Justification
        A number w/ 1 digit can be represented x * 10^0 (where x, x', x'' ... ∈ N)
        A number w/ 2 digit can be represented as x * 10^1 + x' * 10^0
        A number w/ 3 digit can be represented as x * 10^2 + x' * 10^1 + x'' * 10^0
        ...
        Hence, Math.log10(theNumber) will be 0.?, 1.? and 2.?, respectively for the examples above
        By Math.floor, we will get 0, 1 and 2, respectively for the examples above
        By % 2 (modulus of 2), we will get 0, 1 and 0, respectively for the examples above
    For reduce:
        Number w/ even number of digits will result in 1 after Log10 => Math.floor => % 2
        Number w/ odd number of digits will result in 0 after Log10 => Math.floor => % 2
        The good news is, we need to add 1 to the result for the case of even, and add 0 to the result for the case of odd, hence the one-liner solution
  */
};

//log(findNumbers([12,345,2,6,7896])) // 2
//log(findNumbers([555,901,482,1771])) // 1

/*
1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree

Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
*/

var getTargetCopy = function(original, cloned, target) {
  let root1 = cloned;
  return out(root1);

  function out(root1) {
    if (!root1) { return null; }
    if (root1.val === target.val) { return root1; }
    return out(root1.left) || out(root1.right);
  }

};

/*
728. Self Dividing Numbers

A self-dividing number is a number that is divisible by every digit it contains.

    For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

*/

var selfDividingNumbers = function(left, right) {
  let numbersArray = []

  for (let number = left; number <= right; number++) {
    numbersArray.push(number)
  }

  return numbersArray.filter(number => {
    number = number.toString()

    for (let digit of number) {
      if (digit === 0 || number % digit !== 0) {
        return false
      }
    }
    return true
  })
};

//log(selfDividingNumbers(1, 22)) // [1,2,3,4,5,6,7,8,9,11,12,15,22]
//log(selfDividingNumbers(47, 85)) // [48,55,66,77]

/*
1304. Find N Unique Integers Sum up to Zero

Given an integer n, return any array containing n unique integers such that they add up to 0.
*/

var sumZero = function(n) {
  let nums = (n % 2 == 0) ? [] : [0];

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    nums.push(i);
    nums.push(i * -1)
  }

  return nums;
};

//log(sumZero(5)) // [-7,-1,1,3,4]
//log(sumZero(3)) // [-1, 0, 1]
//log(sumZero(1)) // [0]

/*
2206. Divide Array Into Equal Pairs

You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

    Each element belongs to exactly one pair.
    The elements present in a pair are equal.

Return true if nums can be divided into n pairs, otherwise return false.
*/

var divideArray = function(nums) {
  let response = true;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      response = false
      break
    }
  }
  return response
};

//log(divideArray([3,2,3,2,2,2])) // true
//log(divideArray([1,2,3,4])) // false

/*
700. Search in a Binary Search Tree

You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
*/

var searchBST = function(root, val) {

  while (root) {
    if (root.val === val) return root;
    else if (val < root.val) {
      root = root.left;
    }
    else {
      root = root.right;
    }
  }

  return null;
};

/*
2119. A Number After a Double Reversal

Reversing an integer means to reverse all its digits.

    For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.

Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.
*/

var isSameAfterReversals = function(num) {
  reversed1 = num.toString().split('').reverse()
  reversed2 = removeZeros(reversed1).reverse()

  function removeZeros(numsArray) {
    if (numsArray.length > 1) {
      for (let i = 0; i < numsArray.length; i++) {
        if (numsArray[i] == 0) {
          numsArray[i] = ''
        } else {
          break
        }
      }
    }

    return numsArray.filter(element => element !== '')
  }

  return num == reversed2.join('')
}

//log(isSameAfterReversals(526)) //true
//log(isSameAfterReversals(1800)) //false
//log(isSameAfterReversals(0)) //false

/*
1837. Sum of Digits in Base K

Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.

After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.
*/

var sumBase = function(n, k) {
  let sumBase = 0

  while (n > 0) {
    sumBase += n % k
    n = Math.floor(n / k)
  }

  return sumBase

  //Other solution
  //return [...n.toString(k)].reduce((a, c) => (a += +c), 0)

  //As a string method
  /*let res = n.toString(k);
  let sum = 0;
  for (const e of res) sum += Number(e);
  return sum;*/
};

//log(sumBase(34, 6)) // 9
//log(sumBase(10, 10)) // 1

/*
1450. Number of Students Doing Homework at a Given Time

Given two integer arrays startTime and endTime and given an integer queryTime.

The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.
*/

var busyStudent = function(startTime, endTime, queryTime) {
  return endTime.filter((element, index) => element >= queryTime && startTime[index] <= queryTime).length

  /*Other solution
  let count = 0;
  for (const [index,value] of startTime.entries()) {
    if(value <= queryTime && endTime[index] >= queryTime) count++;
  }
  return count*/
};

//log(busyStudent([1,2,3], [3,2,7], 4)) // 1
//log(busyStudent([4], [4], 4)) // 1
//log(busyStudent([9,8,7,6,5,4,3,2,1], [10,10,10,10,10,10,10,10,10], 5)) // 5

/*
590. N-ary Tree Postorder Traversal

Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
*/

var postorder = function(root) {
  const result = [];

  if (!root)
    return result;

  const helper = (node) => {
    let children = node.children;
    for (let i = 0; i < children.length; i++) {
      helper(children[i]);
    }

    result.push(node.val);
  }

  helper(root);

  return result;
};

/*
589. N-ary Tree Preorder Traversal

Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
*/

var preorder = function(root) {
  const result = [];

  if (!root)
    return result;

  const helper = (node) => {
    let children = node.children;

    result.push(node.val);

    for (let i = 0; i < children.length; i++) {
      helper(children[i]);
    }
  }

  helper(root);

  return result;
};

/*
942. DI String Match

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

    s[i] == 'I' if perm[i] < perm[i + 1], and
    s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
*/

var diStringMatch = function(s) {
  let first = 0, last = s.length, arr = []

  for (let char of s) {
    if (char === 'I') {
      arr.push(first)
      first++
    } else {
      arr.push(last)
      last--
    }
  }

  arr.push(first++)

  return arr
};

//log(diStringMatch("IDID")) // [0,4,1,3,2]
//log(diStringMatch("III")) // [0,1,2,3]
//log(diStringMatch("DDI")) // [3,2,0,1]

/*
1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

var mergeAlternately = function(word1, word2) {
  word1 = word1.split('')
  word2 = word2.split('')
  let mergedString = []

  if (word1.length <= word2.length) {
    while (word1.length > 0) {
      mergedString.push(word1.shift().concat(word2.shift()))
    }
    mergedString.push(...word2)
  } else {
    while (word2.length > 0) {
      mergedString.push(word1.shift().concat(word2.shift()))
    }
    mergedString.push(...word1)
  }

  return mergedString.join('')

  /*let max = Math.max(word1.length, word2.length); // Find the biggest string

  let result = '';

  for (let i = 0; i < max; i++) {      // loop through elements to max value
    result += word1[i] !== undefined ? word1[i] : '';     // get character from word1
    result += word2[i] !== undefined ? word2[i] : '';    // get character from word2
  }
  
  return result;

  let str = ''
  let len = Math.max(word1.length, word2.length)
  for(let i = 0; i < len; i++){
     str += (word1[i] || '') + (word2[i] || '')   
  }
  return str*/
};

//log(mergeAlternately("abc", "pqr")) // "apbqcr"
//log(mergeAlternately("ab", "pqrs")) // "apbqrs"
//log(mergeAlternately("abcd", "pq")) // "apbqcd"

/*
561. Array Partition I

Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
*/

var arrayPairSum = function(nums) {
  let sumMin = 0
  nums.sort((a, b) => b - a)
  for (let i = 1; i < nums.length; i += 2) {
    sumMin += nums[i]
  }

  return sumMin
};

//log(arrayPairSum([1,4,3,2])) // 4
//log(arrayPairSum([6,2,6,5,1,2])) // 9

/*
905. Sort Array By Parity

Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.
*/

var sortArrayByParity = function(nums) {
  return nums.sort((a, b) => {
    if (a % 2 === 0) {
      return -1
    } else {
      return 1
    }
  })
};

//log(sortArrayByParity([3,1,2,4])) // [2,4,3,1]
//log(sortArrayByParity([0])) // [0]

/*
1748. Sum of Unique Elements

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.
*/

var sumOfUnique = function(nums) {
  return nums.filter((element) => nums.indexOf(element) === nums.lastIndexOf(element)).reduce((sum, element) => sum + element, 0);
};

//log(sumOfUnique([1,2,3,2])) // 4
//log(sumOfUnique([1,1,1,1,1])) // 0
//log(sumOfUnique([1,2,3,4,5])) // 15

/*
961. N-Repeated Element in Size 2N Array

You are given an integer array nums with the following properties:

    nums.length == 2 * n.
    nums contains n + 1 unique elements.
    Exactly one element of nums is repeated n times.

Return the element that is repeated n times.
*/

var repeatedNTimes = function(nums) {
  for (let num of nums) {
    if (nums.indexOf(num) !== nums.lastIndexOf(num)) return num;
  }
};

//log(repeatedNTimes([1,2,3,3])) // 3
//log(repeatedNTimes([2,1,2,5,3,2])) // 2
//log(repeatedNTimes([5,1,5,2,5,3,5,4])) // 5

/*
2169. Count Operations to Obtain Zero

You are given two non-negative integers num1 and num2.

In one operation, if num1 >= num2, you must subtract num2 from num1, otherwise subtract num1 from num2.

    For example, if num1 = 5 and num2 = 4, subtract num2 from num1, thus obtaining num1 = 1 and num2 = 4. However, if num1 = 4 and num2 = 5, after one operation, num1 = 4 and num2 = 1.

Return the number of operations required to make either num1 = 0 or num2 = 0.
*/

var countOperations = function(num1, num2) {
  let operationsCounter = 0;

  while (num1 > 0 && num2 > 0) {
    num1 > num2 ? num1 -= num2 : num2 -= num1
    operationsCounter++
  }

  return operationsCounter
};

//log(countOperations(2, 3)) // 3
//log(countOperations(10, 10)) // 1

/*
1475. Final Prices With a Special Discount in a Shop

Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.
*/

var finalPrices = function(prices) {
  return prices.map((price, index, prices) => {
    for (let i = index + 1; i < prices.length; i++) {
      if (prices[i] <= price) {
        return price - prices[i]
      }
    }
    return price
  })
};

//log(finalPrices([8,4,6,2,3])) // [4,2,4,2,3]
//log(finalPrices([1,2,3,4,5])) // [1,2,3,4,5]
//log(finalPrices([10,1,1,6])) // [9,0,1,6]

/*
1351. Count Negative Numbers in a Sorted Matrix

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
*/

var countNegatives = function(grid) {
  let countNegatives = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      grid[row][column] < 0 ? countNegatives++ : null
    }
  }

  return countNegatives

  /*
  Other solution

  let count = 0;
  for(let val of grid){
    let negativeArr = val.filter((v) => v<0);
    count += negativeArr.length;
  }
    return count;
  };
  */
};

//log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])) // 8
//log(countNegatives([[3,2],[1,0]])) // 0

/*
344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function(s) {
  for (let left = 0, right = s.length - 1; left <= right; left++, right--) {
    [s[left], s[right]] = [s[right], s[left]];
  }

  return s
};

//log(reverseString(["h","e","l","l","o"])) // ["o","l","l","e","h"]
//log(reverseString(["H","a","n","n","a","h"])) // ["h","a","n","n","a","H"]

/*
657. Robot Return to Origin

There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
*/

var judgeCircle = function(moves) {
  let endPoint = [0, 0];

  for (let char of moves) {
    switch (char) {
      case 'R':
        endPoint[0]++
        break
      case 'L':
        endPoint[0]--
        break
      case 'U':
        endPoint[1]++
        break
      case 'D':
        endPoint[1]--
        break
    }
  }

  return endPoint.join('') === '00'

  /* Other Solution OBJECTS
  var judgeCircle = function(moves) {
  const isStartingPoint = [0, 0]
  
  const upDown = {
    U: 1,
    D: -1,
  }

  const leftRight = {
    L: -1,
    R: 1
  }
  
  for (const move of moves) {
    isAtSamePosition[0] += upDown[move] || 0
    isAtSamePosition[1] += leftRight[move] || 0
  }
  
  return isStartingPoint.every(pos => pos === 0)
};
  */
};

//log(judgeCircle("UD")) // true
//log(judgeCircle("LL")) // false

/*
2283. Check if Number Has Equal Digit Count and Digit Value

You are given a 0-indexed string num of length n consisting of digits.

Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.
*/

var digitCount = function(num) {
  const numObject = {}

  for (let digit of num) {
    numObject[digit] === undefined ? numObject[digit] = 1 : numObject[digit] += 1
  }

  for (let i = 0; i < num.length; i++) {
    if (!(numObject[i] == num[i] || (!numObject[i] && num[i] == 0)))
      return false;
  }

  return true
};

//log(digitCount("1210")) // true
//log(digitCount("030")) // false
//log(digitCount("1")) // false
//log(digitCount("89")) // false
//log(digitCount("01")) // false

/*
1332. Remove Palindromic Subsequences

You are given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s.

Return the minimum number of steps to make the given string empty.

A string is a subsequence of a given string if it is generated by deleting some characters of a given string without changing its order. Note that a subsequence does not necessarily need to be contiguous.

A string is called palindrome if is one that reads the same backward as well as forward.
*/

var removePalindromeSub = function(s) {
  return s === s.split('').reverse().join('') ? 1 : 2
};

//log(removePalindromeSub("ababa")) // 1
//log(removePalindromeSub("abb")) // 2
//log(removePalindromeSub("baabb")) // 2

/*
461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.
*/

var hammingDistance = function(x, y) {
  x = x.toString(2).split('')
  y = y.toString(2).split('')

  let count = 0;
  const len = Math.max(x.length, y.length);

  if (x.length < y.length) {
    x = Array(len - x.length).fill('0').concat(x)
  } else {
    y = Array(len - y.length).fill('0').concat(y)
  }

  for (let i = 1; i <= len; i++) {
    x.at(-i) !== y.at(-i) ? count++ : null
  }

  return count

  /*Other solution
  return (x ^ y).toString(2).split('').filter(x => x === '1').length;
  */
};

//log(hammingDistance(1, 4)) // 2
//log(hammingDistance(3, 1)) // 1

/*
1051. Height Checker

A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

Return the number of indices where heights[i] != expected[i].
*/

var heightChecker = function(heights) {
  let count = 0;
  const orderedHeights = [...heights].sort((a, b) => a - b)

  for (let i = 0; i < heights.length; i++) {
    heights[i] !== orderedHeights[i] ? count++ : null
  }

  return count
};

//log(heightChecker([1,1,4,2,1,3])) //3
//log(heightChecker([5,1,2,3,4])) //5

/*
338. Counting Bits

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
*/

var countBits = function(n) {
  const ans = []

  for (let i = 0; i <= n; i++) {
    ans.push(isOne(i));
  }

  function isOne(integer) {
    return integer.toString(2).split('').filter(element => element == '1').length
  }

  return ans
};

//log(countBits(2)) // [0,1,1]
//log(countBits(5)) // [0,1,1,2,1,2]

/*
1299. Replace Elements with Greatest Element on Right Side

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.
*/

var replaceElements = function(arr) {
  let newArray = []
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    arr.shift()
    newArray.push(Math.max(...arr))
  }

  newArray.push(-1)

  return newArray
};

//log(replaceElements([17,18,5,4,6,1])) // [18,6,6,6,1,-1]
//log(replaceElements([400])) // [-1]

/*
1337. The K Weakest Rows in a Matrix

You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

    The number of soldiers in row i is less than the number of soldiers in row j.
    Both rows have the same number of soldiers and i < j.

Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.
*/

var kWeakestRows = function(mat, k) {
  const soldiers = mat.map(row => row.filter(element => element === 1).length)
  let soldiersObject = { ...soldiers }

  let soldiersIndex = Object.entries(soldiersObject).sort((a, b) => a[1] - b[1]).map(element => element[0])
  soldiersIndex.length = k

  for (let index = 0; index < k; index++) {
    soldiersIndex[index] = parseInt(soldiersIndex[index])
  }

  return soldiersIndex
};


/*log(kWeakestRows(
  [[1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1]], 3)) // [2,0,3]

log(kWeakestRows(
  [[1, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
  [1, 0, 0, 0]], 2)) // [0, 2]*/

/*
1022. Sum of Root To Leaf Binary Numbers

You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

    For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

The test cases are generated so that the answer fits in a 32-bits integer.
*/

var sumRootToLeaf = function(root) {
    
  function getSum (root, sum) {
    if ( root === null ) return 0;
    sum = 2 * sum + root.val;
    if ( root.left === null && root.right === null ) return sum;
    return getSum(root.left, sum) + getSum(root.right, sum);
  }

  return getSum(root, 0);
};

/*
1742. Maximum Number of Balls in a Box

You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.

Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.

Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.
*/

var countBalls = function(lowLimit, highLimit) {

  function ballsDecoding(element) {
    box = element.toString().split('').reduce((total, value) => total + parseInt(value), 0)
    return box
  }

  let ballsInBoxes = {}

  for (let i = lowLimit; i <= highLimit; i++) {
    ballsInBoxes[ballsDecoding(i)] === undefined ? ballsInBoxes[ballsDecoding(i)] = 1 : ballsInBoxes[ballsDecoding(i)] += 1
  }

  return Math.max(...Object.values(ballsInBoxes))
};

//log(countBalls(1, 10)) //2
//log(countBalls(5, 15)) //2
//log(countBalls(19, 28)) //2

/*
2315. Count Asterisks

You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

Return the number of '*' in s, excluding the '*' between each pair of '|'.

Note that each '|' will belong to exactly one pair.
*/

var countAsterisks = function(s) {
  let countAsterisks = 0

  s = s.split('|')

  for(let i = 0; i < s.length; i+= 2) {
    for (let char of s[i]) {
      if (char === '*') countAsterisks++
    }
  }
  
  return countAsterisks
};

//log(countAsterisks("l|*e*et|c**o|*de|")) // 2
//log(countAsterisks("iamprogrammer")) // 0
//log(countAsterisks("yo|uar|e**|b|e***au|tifu|l")) // 5

/*
2154. Keep Multiplying Found Values by Two

You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

You then do the following steps:

    If original is found in nums, multiply it by two (i.e., set original = 2 * original).
    Otherwise, stop the process.
    Repeat this process with the new number as long as you keep finding the number.

Return the final value of original.
*/

var findFinalValue = function(nums, original) {
  
  while(nums.some(element => element === original)){
    original = nums.find(element => element === original) * 2
  }

  return original
};

//log(findFinalValue([5,3,6,1,12], 3)) // 24
//log(findFinalValue([2,7,9], 4)) // 4

/*
1880. Check if Word Equals Summation of Two Words

The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

    For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.

You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.
*/

var isSumEqual = function(firstWord, secondWord, targetWord) {
  
  function valueOfString(str) {
    let value = ''

    for (let index = 0; index < str.length; index ++) {
      value += (str.charCodeAt(index)-97)
    }
    
  return value 
  }
  
  return (parseInt(valueOfString(firstWord)) + parseInt(valueOfString(secondWord)))  === parseInt(valueOfString(targetWord))
};

//log(isSumEqual("acb", "cba", "cdb")) // true
//log(isSumEqual("aaa", "a", "aab")) // false
//log(isSumEqual("aaa", "a", "aaaa")) // true

/*
1710. Maximum Units on a Truck

You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

    numberOfBoxesi is the number of boxes of type i.
    numberOfUnitsPerBoxi is the number of units in each box of the type i.

You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.
*/

var maximumUnits = function(boxTypes, truckSize) {
  
  boxTypes.sort((a, b) => b[1] - a[1]);
  
  let boxesTruck = 0;
  
  for (let [ boxes, units ] of boxTypes) {
  
  const takeBoxes = Math.min(boxes, truckSize);
    
  boxesTruck += units * takeBoxes;
  truckSize -= takeBoxes;
  if(!truckSize) break
  }

  return boxesTruck;
};

//log(maximumUnits([[1,3],[2,2],[3,1]], 4)) // 8
//log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10)) // 91
//log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 35)) // 76

/*
682. Baseball Game

You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

    An integer x - Record a new score of x.
    "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
    "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
    "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

Return the sum of all the scores on the record. The test cases are generated so that the answer fits in a 32-bit integer.
*/

var calPoints = function(ops) {
  let scores = []

  for(let op of ops) {
    switch(op) {
      case '+':
        scores.push(scores.at(-1) + scores.at(-2));
        break;
      case 'D':
        scores.push(scores.at(-1) * 2);
        break
      case 'C':
        scores.pop()
        break
      default:
        scores.push(parseInt(op))        
    }
  }

  return scores.reduce((total, value) => total + value, 0)
};

//log(calPoints(["5","2","C","D","+"])) // 30
//log(calPoints(["5","-2","4","C","D","9","+","+"])) // 27
//log(calPoints(["1","C"])) // 0

/*
2278. Percentage of Letter in String

Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.
*/

var percentageLetter = function(s, letter) {
  let counter = 0;

  for(let char of s) {
    if(char === letter) counter++
  }

  return Math.floor((counter/s.length)*100)
};

//log(percentageLetter("foobar", "o")) // 33
//log(percentageLetter("jjjj", "k")) // 0

/*
2325. Decode the Message

You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

    Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
    Align the substitution table with the regular English alphabet.
    Each letter in message is then substituted using the table.
    Spaces ' ' are transformed to themselves.

    For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').

Return the decoded message.
*/

var decodeMessage = function(key, message) {
  key = Array.from(new Set(key.split(' ').join('')))
  let decoded = ''

  for(let char of message) {
    decoded += char === ' ' ? ' ' : String.fromCharCode(key.indexOf(char) + 97)
  }

  return decoded
};

log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")) // "this is a secret"
log(decodeMessage("eljuxhpwnyrdgtqkviszcfmabo", "zwx hnfx lqantp mnoeius ycgk vcnjrdb")) // "the five boxing wizards jump quickly"