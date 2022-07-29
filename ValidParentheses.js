function validParentheses(s) {
    const hashMap = { "(": ")", "{": "}", "[": "]" };
    let stk = [];
    let isValid;
    for (let ch of s) {
        if (hashMap[ch]) {
            // ch is an opening bracket
            stk.push(hashMap[ch]);
        } else if (stk.length > 0 && stk[stk.length - 1] === ch) {
            // ch is a closing bracket and top of stack matches
            stk.pop();
        } else {
            // ch is a closing bracket and top of the stack doesn't match
            isValid = false;
        }
    }
    isValid = stk.length === 0;
    if (isValid === true){
        output = 'valid';
    }
    else{
        output = 'invalid';
    }
    
    return output;
};

console.log(validParentheses("()"));
console.log(validParentheses("()[]{}"));
console.log(validParentheses("(]"));
console.log(validParentheses("(("));
console.log(validParentheses("{][}"));
console.log(validParentheses("{[}]"));
