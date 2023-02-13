var numSplits = function(s) {
    let set1 = new Set(), set2 = new Set();
    let arr = [], res = 0;
    for (let i = 0; i < s.length; i++) {
        set1.add(s[i]);
        arr[i] = set1.size;
    }
    for (let j = s.length-1; j > 0; j--) {
        set2.add(s[j]);
        if (arr[j-1] === set2.size) res++;
    }
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}