const isString = (val) => {
    if(!(typeof val === 'string')) {
        throw new Error('[ERROR] This value is not a string.');
    }

    return true;
}

export { isString };