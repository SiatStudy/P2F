import errorFunc from "../../../../P1F/src/util/errorFunc.js";

const isEventObjFront = (state) => {
    const objKeys = {
        id : { type : 'int' },
        title: { type: 'string' },
        extendedProps : { type: 'object', validator : validateExtended },
        start : { type: 'string', validator : validateDateFormat, dateFormat : "YYYY-MM-DD" },
        end: { type: 'string', validator : validateDateFormat, dateFormat : "YYYY-MM-DD" },
        constraint : { type : 'object', validator : validateConstraint },
        state: { type: 'boolean' }
    };

    for (const key in objKeys) {
        const { type, validator, dateFormat } = objKeys[key];

        if (typeof state[key] !== type) {
            errorFunc('isEventObjFront', `${key}의 자료형이 잘못되었습니다.`);
        } else if (validator) {
            if(key === "start" || key === "end") {
                validator(state[key], dateFormat, key);
            } else {
                validator(state[key], key);
            }
        }
    }

    return state;
};

const validateExtended = (state, parentKey) => {
    if (typeof state["eventContent"] !== "string") {
        errorFunc('validateExtended', `${parentKey}의 eventContent 값의 자료형이 잘못되었습니다.`)
    }
}

const validateConstraint = (state, parentKey) => {
    const objKey = {
        startTime : { type : "string", format : "hh:mm" },
        endTime : { type : "string", format : "hh:mm" }
    }

    for(const key in objKey) {
        const { type, format } = objKey[key];

        if(typeof state[key] !== type) {
            errorFunc('validateConstraint', `${parentKey}의 ${key} 값의 자료형이 잘못되었습니다.`)
        } else if (format) {
            validateDateFormat(state[key], format, `${parentKey}의 ${key}`);
        }
    }
}

const validateDateFormat = (dateString, format, parentKey) => {
    const parsedDate = new Date(dateString);

    if (parsedDate instanceof Date && !isNaN(parsedDate) && parsedDate.toISOString().slice(0,10) !== dateString) {
        errorFunc('validateDateFormat', `${parentKey}의 형식이 올바르지 않습니다. (올바른 형식: ${format})`);
    }
}

export { isEventObjFront };