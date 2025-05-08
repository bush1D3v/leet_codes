function isPalindrome(s: string): boolean {
    const cleanedStr = s.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
    const cleanedStrLength = cleanedStr.length;

    for (let i = 0; i < cleanedStrLength; i++) {
        if (cleanedStr[ i ] !== cleanedStr[ (cleanedStrLength - 1) - i ]) {
            return false;
        }
    }

    return true;
};
