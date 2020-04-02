# 30DaysLeetCodeChallenge
This is a repository of my solutions to problems in #30DaysLeetCodeChallenge of LeetCode.

# Day 1 - Single Number
**Statement:** Here given a non-empty array of integers, every element appears twice except for one. Find that single one.

**Approach:** I used the 
[***filter()***](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method of arrays in javascript which helps to return all the duplicate values of that array and store into a new array. Next I used ***forEach()*** to iterate over the main array and identify the element which doesn't exist in my new array of duplicates returned by ***filter()*** method. Finally return that array by ***join()*** method to return a string.
