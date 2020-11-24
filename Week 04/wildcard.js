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

function getCount(pattern) {
    let count = 0;
    for (let i = 0; i < pattern.length; i++) if (pattern[i] === '*') count++;
    return count;
}

function wildcard(source, pattern) {
    let starCount = getCount(pattern);

    if (starCount === 0) {
        if (source.length !== pattern.length) {
            return false;
        }

        for (let i = 0; i < pattern.length; i++) {
            if (pattern[i] !== source[i] && pattern[i] !== '?') {
                return false;
            }
        }
        return true;
    }

    let startIndex = 0;
    let lastIndex = 0;
    for (startIndex = 0; pattern[startIndex] !== '*'; startIndex++) {
        if (pattern[startIndex] !== source[startIndex] && pattern[startIndex] !== '?') {
            return false;
        }
    }
    for (
        lastIndex = 0;
        lastIndex <= source.length - lastIndex && pattern[pattern.length - lastIndex] !== '*';
        lastIndex++
    ) {
        if (
            pattern[pattern.length - lastIndex] !== source[source.length - lastIndex] &&
            pattern[pattern.length - lastIndex] !== '?'
        ) {
            return false;
        }
    }

    if (starCount === 1) {
        return true;
    }

    source = source.slice(startIndex + 1, -lastIndex);
    pattern = pattern.slice(startIndex + 1, -lastIndex);
    console.log(source, pattern);

    if (getCount(pattern) === 0) {
        return kmp(source, pattern);
    } else {
        return wildcard(source, pattern);
    }
}

console.log(wildcard('asdasas1drtrtfas2d', 'as*as?d*as?d'));
