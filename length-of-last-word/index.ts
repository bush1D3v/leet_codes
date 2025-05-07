function lengthOfLastWord(s: string): number {
    const wordsArr = s.trim().split(" ");

    const lastWOrd = wordsArr[wordsArr.length - 1];
    return lastWOrd.length;
};