const isIDPattern = (id) => {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/;
    const unicode = /[^\w\s]/;

    if(korean.test(id) || unicode.test(id)) {
        return false;
    }

    return id.length >= 8 && id.length < 3 ? false : id;
}

export { isIDPattern };