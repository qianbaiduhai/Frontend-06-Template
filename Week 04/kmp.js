function getNext(pattern) {
    let next = new Array(pattern.length).fill(0);
    let i = 0;
    let j = -1;
    //求next数组的j 初始化为-1。这样设计是要使next[1]=0;
    next[0] = -1;

    while (i < pattern.length - 1) {
        if (j === -1 || pattern[i] === pattern[j]) {
            next[i + 1] = j + 1;
            i++;
            j++;
        } else {
            j = -1;
        }
    }
    return next;
}

function kmp(source, pattern) {
    let i = 0;
    let j = 0;

    let next = getNext(pattern);

    while (i < source.length && j < pattern.length) {
        if (j === -1 || source[i] === pattern[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }

    if (j === pattern.length) {
        return i - j;
    } else {
        return -1;
    }
}

function test() {
    let str1 = 'ababababca';
    let str2 = 'abababca';

    let next = getNext(str2);

    console.log(next);

    console.log(kmp(str1, str2));
}
test();
