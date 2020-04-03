# 30DaysLeetCodeChallenge

This is a repository of my solutions to problems in #30DaysLeetCodeChallenge of LeetCode.

## Day 1 - Single Number

**Statement:** Here given a non-empty array of integers, every element appears twice except for one. Find that single one.

**Approach:** I used the
[**_filter()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method of arrays in javascript which helps to return all the duplicate values of that array and store into a new array. Next I used [**_forEach()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to iterate over the main array and identify the element which doesn't exist in my new array of duplicates returned by [**_filter()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method. Finally return that array by [**_join()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method to return a string.

## Day 2 - Happy Number

**Statement:** A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

**Approach:** Again I implemented the solution in javascript using the concept of recursion to iterate over and over upon getting sum of squares of their digits equal to one, limited to 8 recursions. I have used [**_map()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to square the digits and [**_split()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to split the converted string from into to array for further operations on digits.

## Day 3 - Maximum Subarray

**Statement:** Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Approach:** Question is so tricky that it leads to the approach by calculating the sub array of our input and then conducting the sum of those sub array, finally finding out the maximum number in that sums array. Actually, question is to find the maximum sum of the sub array not finding out the sub arrays. This approach is of O(n) where the maximum sum is calculated and returned from the input. Due to ES6 max of an array can be calculate with so ease by using [**_spread operator_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
