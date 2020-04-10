# 30DaysLeetCodeChallenge

This is a repository of my solutions to problems in #30DaysLeetCodeChallenge of LeetCode.

## Day 1 - Single Number

**Statement:** Here given a non-empty array of integers, every element appears twice except for one. Find that single one.

**Approach:** I used the
[**_filter()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method of arrays in javascript which helps to return all the duplicate values of that array and store into a new array. Next I used [**_forEach()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) to iterate over the main array and identify the element which doesn't exist in my new array of duplicates returned by [**_filter()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method. Finally return that array by [**_join()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method to return a string.

## Day 2 - Happy Number

**Statement:** A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

**Approach:** Again I implemented the solution in javascript using the concept of recursion to iterate over and over upon getting the sum of squares of their digits equal to one, limited to 8 recursions. I have used [**_map()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to square the digits and [**_split()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to split the converted string from into to array for further operations on digits.

## Day 3 - Maximum Subarray

**Statement:** Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Approach:** Question is so tricky that it leads to the approach by calculating the sub-array of our input and then conducting the sum of those sub-array, finally finding out the maximum number in that sums array, this approach always leads to **O(n^2)** complexity but the question is to find the maximum sum of the sub-array not finding out the sub-arrays. For this it takes only **O(n)** complexity where the maximum sum is calculated and returned from the input. Due to ES6, the maximum of an array can be calculated with so ease by using [**_spread operator_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

## Day 4 - Moving Zeroes

**Statement:** Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

**Approach:** Input array has a set of non-positive integers and zeros, where on encountering **zero** it must be picked from that index of the array and pushed or appended at the end of the array i.e. if the length of the array is 5, **zero** encountered must be the place the new index of **(array.length-1)+1**. A simple approach to it is not to use any buffer array to copy all zeros but to alter the original array itself. My approach is a bit tricky but very subtle, it's written only in 6 lines of code. Firstly, I used the **Javascript** [**_filter()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) to get both the non-positive integers and zeros and store them into another array and push it to a buffer using [**_spread_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and deleting the old elements from the input array, pushing these new elements. It's time complexity constitutes to O(n) only however.

## Day 5 - Best Time To Buy Sell Stock II

**Statement:**
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

**Note:** You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Approach:** Question is unknowingly so simple that it seems to be very difficult and crisp as spoon-feeding isn't done. Questions exemplifies that

> There is an input array with values as prices and indexes as days. Design an algorithm and return the result by calculating the maximum profit occurred. (Conditions are that if you buy today, next day you need to sell definitely no matter how many transactions occur)
> Iterate through the elements and check if today's price **is greater than** yesterday's price i.e. to consider a profit. For such elements add and return the result

## Day 6 - Grouping Anagrams

**Statement:**
Given an array of strings, group anagrams together.

**Approach:**
The question is pretty straight forward but falls under **medium** category due to intensive operations. My approach is, anagrams can be calculated by splitting the string and sorting it and comparing the array using [**_JSON.Stringify()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). Used the object in ES6 to eliminate duplicates efficiently using [**_spread operator_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and object returning the result i.e values of the object.

## Day 7 - Counting Elements

**Statement:**
Given an integer array arr, count element x such that x + 1 is also in arr.

**Note:**
If there're duplicates in arr, count them separately.

**Approach:**
The question is really simple, iterate over all the elements in the input and count that only if (element+1) exists. Used a temporary count variable and a [**_forEach_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## Day 8 - Middle of the Linked List

**Statement:**
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

**Note:**
If there are two middle nodes, return the second middle node.

**Approach:**
Question is a part of the one of the most important data structures in Computer Programming, Singly Linked List. Singly means the linked list can traverse only in the single direction i.e. forward. Question is to identify the middle element in the linked list, if more than 1 exists, return last most i.e. second node.

## Day 9 - Backspace Compare

**Statement:**
Given two strings **'S'** and **'T'**, return if they are equal when both are typed into empty text editors. # means a backspace character.

**Approach:**
The problem needs to be solved in **O(n)** or **O(1)** complexity for both time and space. Hence, deleting the backspace character should happen on the original string itself in order to achieve the desired complexity. Take 2 for loops, First iterate over **S** string, identify 2 edge cases

- When the whole string has only **'#'** character
- When the whole string has multiple backspace characters('#').

For the above cases slice the input string and store into the same **'S'** and **'T'**

## Day 10 - Min Stack

**Statement:**
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- getMin() -- Retrieve the minimum element in the stack.

**Approach:**
This problem needs to implement a basic stack data structure with **push()**, **pop()**, **top()** and **getMin()** as the methods of **Stack** object (Class in languages like **Java**). As others, I used Javascript as my language to solve this challenge. In Javascript with the advanced **ES6+** concepts like classes, protoypical inheritance a similar kind of code can be created here like in other **OOP** languages like **Java**. In this approach [**_function constructors_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) are used to implement the **OOPs** concept. I have used private variables to encapsulate the data, In **Javascript** private variables can be created inside objects by using **\_** before variable declarations.

> **_push():_**
Push an element inside the stack by using native [**_push()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method of Array object (Array.prototype.pop).

> **_pop():_**
Pop i.e. remove the last inserted element of the stack, use the native [**_pop()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method of Array object (Array.prototype.pop).

> **_top():_**
Finding out the top is very simple, top is nothing but the length of the stack - 1

> **_getMin():_**
Finding the minimum element of the stack, can be done by [**_Math.min()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min). It accepts an iterable, to pass an array [**_spread operator_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) can be used.
