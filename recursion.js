/** product: calculate the product of an array of numbers. */

// function product(nums) {
function product(nums, idx = 0) {
	// base case
	// if (nums.length === 0) return 1;
	// normal case
	// return nums[0] * product(nums.slice(1));

	// suggested solution
	if (idx === nums.length) return 1;
	return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

// function longest(words) {
function longest(words, idx = 0, longestSoFar = 0) {
	// base case
	// if (words.length === 0) return 0;
	// normal case
	// return Math.max(words[0].length, longest(words.slice(1)));

	if (idx === words.length) return longestSoFar;
	longestSoFar = Math.max(words[idx].length, longestSoFar);
	return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

// function everyOther(str) {
function everyOther(str, idx = 0, newStr = '') {
	// base case
	// if (str.length === 0) return '';
	// normal case
	// return str[0] + everyOther(str.slice(2));

	if (idx >= str.length) return newStr;
	newStr += str[idx];
	return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

// function isPalindrome(str) {
function isPalindrome(str, idx = 0) {
	// base case
	// if (str.length <= 1) return true;
	// normal case
	// return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1));

	let leftIdx = idx;
	let rightIdx = str.length - idx - 1;
	if (leftIdx >= rightIdx) return true;
	if (str[leftIdx] !== str[rightIdx]) return false;
	return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
	// base case
	if (idx === arr.length) return -1;
	// normal case
	if (arr[idx] === val) return idx;
	return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

// function revString(str) {
function revString(str, idx = 0, newStr = '') {
	// base case
	// if (str.length === 0) return '';
	// normal case
	// return str[str.length - 1] + revString(str.slice(0, -1));

	if (newStr.length === str.length) return newStr;
	newStr += str[str.length - 1 - idx];
	return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let strArr = [];
	for (let key in obj) {
		if (typeof obj[key] === 'string') strArr.push(obj[key]);
		if (typeof obj[key] === 'object') strArr.push(...gatherStrings(obj[key]));
	}
	return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
	if (left > right) return -1;

	let middle = Math.floor((left + right) / 2);
	if (arr[middle] === val) return middle;

	if (arr[middle] > val) return binarySearch(arr, val, left, middle - 1);
	return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
