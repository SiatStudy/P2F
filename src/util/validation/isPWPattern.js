const isPWPattern = (pw) => {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/;
    const unicode = /^[!@#$%]+$/;
    const english = /[a-zA-Z]/;
    const number = /[0-9]/;

    if (korean.test(pw) || /\s/.test(pw)) {
        return false;
    }

    if (!(unicode.test(pw) && english.test(pw) && number.test(pw))) {
        return false;
    }

    return pw.length >= 8;
};

export { isPWPattern };