const isNickNamePattern = (nickname) => {
    const isLengthValid = nickname.length >= 3 && nickname.length <= 16;
    const isNumberOnly = /^\d+$/.test(nickname);

    return isLengthValid && !isNumberOnly;
}

export { isNickNamePattern };