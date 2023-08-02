const isNumber = (val) => {
    if(!(typeof val === 'number')) {
        throw new Error('[ERROR] This value is not a number.');
    }

    return true;
}

export { isNumber };