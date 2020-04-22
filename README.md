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

**_push():_**
Push an element inside the stack by using native [**_push()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method of Array object (Array.prototype.pop).

**_pop():_**
Pop i.e. remove the last inserted element of the stack, use the native [**_pop()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method of Array object (Array.prototype.pop).

**_top():_**
Finding out the top is very simple, top is nothing but the length of the stack - 1

**_getMin():_**
Finding the minimum element of the stack, can be done by [**_Math.min()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min). It accepts an iterable, to pass an array [**_spread operator_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) can be used.

## Day 11 - Diameter of Binary Tree

**Statement:**
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

**Note:**
The length of path between two nodes is represented by the number of edges between them.

**Approach:**
The approach is very simple, you need to calculate the depth of the tree both left and right. Diameter of a binary tree is the maximum number of edges between any 2 nodes of the graph i.e. the most distant 2 nodes of the tree.

## Day 12 - Last Stone Weight

**Statement:**
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together. Suppose the stones have weights x and y with x <= y. The result of this smash is:

- If x == y, both stones are totally destroyed;
- If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.

At the end, there is at most 1 stone left. Return the weight of this stone (or 0 if there are no stones left.)

**Approach:**
The problem is very simple, firstly need to extract the first maximum and second maximum number from the input and based on the above conditions if they're not equal push their **difference** to the array. We need to repeat the same until there is one or none of the elements in the array.

## Day 13 - Contiguous Array

**Statement:**
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

**Approach:**
The problem is little tricky, the main concern is it's complexity. Naive approach requires **O(n^2)** to **O(n^3)** complexity, while the problem doesn't permit to solve using this approach. It has more than 500 test cases and required **O(n)** logic. This approach is referenced from the solutions, and is a hashmap approach.

## Day 14 - Perform String Shifts

**Statement:**
You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

- direction can be 0 (for left shift) or 1 (for right shift).
- amount is the amount by which string s is to be shifted.
- A left shift by 1 means remove the first character of s and append it to the end.
- Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
  Return the final string after all operations.

**Approach:**
The problem is very simple, in the input there's an array with all the **shift** operations. Perform the shift operations accordingly and return the final string after all the shifts. If the first value in the shift array is **'0'** then take the first **'arr[1]'** elements from the string and shift to the end, similarly if the first value in the shift array is **'1'** then take the last **'arr[1]'** elements from the string and shift to the beginning. For extracting and updating javascript [**_substring()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) serves the purpose.

**_Example_**

1. If shift array is **[0,3]** then shift the first **'3'** elements to the end i.e. append the first **'3'** elements and update the input string

2. If shift array is **[1,2]** then shift the last **'2'** elements to the beginning i.e. insert the last **'2'** elements to the beginning and update the input string

## Day 15 - Product of Array Except Self

**Statement:**
Given an array **nums** of n integers where n > 1, return an array **output** such that **output[i]** is equal to the product of all the elements of **nums** except **nums[i]**.

**Note:**
Please solve it without **division** and in **O(n)**.

**Follow up:**
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

**Approach:**
This problem can be solved in many ways, I have solved it using 2 approaches

**1.**
Use the [**_map()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [**_reduce_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) methods of **Array.prototype** in Javascript. In this approach use **'\_'**, **'i'** as the parameter to the map and using the reduce function with parameters as **prod** as **accumulator**, **val** as **current value** and **j** as **index**, return the product with a simple formule like if **'i'** is equal to **'j'** then multiple the **prod** by 1 else by **current value(val)**.

**2.**
Similar to the above approach use the same [**_map()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [**_reduce_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) methods of **Array.prototype** in Javascript. In **map** take the **item** as the **current item**, **i** as **index** and **arr** as **input array** and [**_slice_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) the **arr** to store it in a buffer and remove the current element from that buffer and perform the multiplication using the [**_reduce_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method.

## Day 16 - Valid Paranthesis

**Statement:**
Given a string containing only three types of characters: '(', ')' and '\*', write a function to check whether this string is valid. We define the validity of a string by these rules:

1. Any left parenthesis '(' must have a corresponding right parenthesis ')'.

2. Any right parenthesis ')' must have a corresponding left parenthesis '('.

3. Left parenthesis '(' must go before the corresponding right parenthesis ')'.

4. '\*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.

5. An empty string is also valid.

**Approach:**
This approach handle the main invalid cases, Take two loops to iterate over the input array. If you encounter an opening bracket i.e. **'('** or **'asterick'** increment a counter, else if you encounter a closing bracker i.e. **')'** **'asterick'** again increment the counter. In the first iteration for the first case if you find closing bracket **')'** and the **counter<1** then return **false** right away, similarly in the second iteration for the second case. The problem works on these edge cases.

## Day 19 - Search in Rotated Sorted Array

**Statement:**
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., **[0,1,2,4,5,6,7]** might become **[4,5,6,7,0,1,2]**).

You are given a target value to search. If found in the array return its **index**, otherwise return **-1**.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of **O(log n)**.

**Approach:**
This problem is meant to be solved using some search algorithm in order to compensate under the order of **O(log n)**. I solved it using javascript [**_indexOf_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), which serves the purpose.

## Day 20 - Construct Binary Search Tree from Preorder Traversal

**Statement:**
Return the root node of a binary search tree that matches the given **preorder** traversal.

(_Recall that a binary search tree is a binary tree where for every node, any descendant of **node.left** has a value less than **node.val**, and any descendant of **node.right** has a value greater than **node.val**. Also recall that a **preorder** traversal displays the value of the node first, then traverses node.**left**, then traverses **node.right**._)

**Approach:**
Problem is to construct a **binary search tree** from the given input array of the **pre-order** traversal. Approach is to use a recursive function to insert and return the values according to the **pre-order** traversal. I used [**_-Infinity_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity) as the **low** and [**_Infinity_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity) as high values passed as parameter to the recursive function to check the range. **TreeNode** is the function constructor for this tree, a new value can be inserted in here using [**_new operator_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new). The arguments to the **TreeNode** function constructor is the return value of [**_shift()_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) i.e. the first element of the input array. Create a temporary element like **root** to store the buffer element and pass to the function constuctor, returning it.

## Day 22 - Sub Array with Sum Equal to K

**Statement:**
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

**Example 1:**

```javascript
Input: (nums = [1, 1, 1]), (k = 2);
Output: 2;
```

**Note:**

1. The length of the array is in range [1, 20,000].
2. The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

**Approach:**
This problem stands in the **Medium** difficulty level at Leetcode. The approach is **brute force**, which ideally is not **O(n^2)** but serves the purpose. Take two loops, iterate in the first loop and initialize a variable **sum** to **0**, in the second iteration increment the **sum** to the value occurred in the iteration. Here, check the condition if the sum happens to be **k** then count that particular sub-array. Return the **sub-array**.
