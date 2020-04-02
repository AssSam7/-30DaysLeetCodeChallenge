# 30DaysLeetCodeChallenge

This is a repository of my solutions to problems in #30DaysLeetCodeChallenge of LeetCode.

## Day 1 - Single Number

**Statement:** Here given a non-empty array of integers, every element appears twice except for one. Find that single one.

**Approach:** I used the
[**_filter()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method of arrays in javascript which helps to return all the duplicate values of that array and store into a new array. Next I used [**_forEach()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to iterate over the main array and identify the element which doesn't exist in my new array of duplicates returned by [**_filter()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method. Finally return that array by [**_join()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method to return a string.

## Day 2 - Happy Number

**Statement:** A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

**Approach:** I used the concept of recursion to iterate over and over upon getting sum of squares of their digits as one, limited to 8 recursions. I have uses [**_map_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to square the digits and [**_split_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to split the converted string from into to array for further operations on digits.
