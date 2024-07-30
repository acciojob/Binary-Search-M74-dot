function binarySearch(nums, target) {
// Your code here
// Return index if target is present
// else return -1
	let i=0, j=nums.length-1;
	while(i<=j){
		let mid = parseInt((i+j)/2);
		if(nums[mid]==target)return mid;
		else if(nums[mid]<target)i=mid+1;
		else j=mid-1;
	}
	return -1;
}

module.exports = binarySearch;
