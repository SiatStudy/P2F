import errorFunc from "../../../../P1F/src/util/errorFunc";

const isEventObjBack = (state) => {
    const objKeys = {
        id : { type : 'int' },
        title : { type : 'string' },
        content : { type : 'string' },
        startDate : { type : 'string', validator : validateDateFormat, dateFormat : "YYYY-MM-DDThh:mm" },
        endDate : { type : 'string', validator : validateDateFormat, dateFormat : "YYYY-MM-DDThh:mm" },
        status : { type : "number" }
    };

    for(const key in objKeys) {
        const { type, validator, dateFormat } = objKeys[key];

        if(typeof state[key] !== type ) {
            errorFunc('isEventObjBack', `${key}의 자료형이 잘못되었습니다.`);
        } else if(validator) {
            if(key === "startDate" || key === "endDate") {
                validator(state[key], dateFormat, key);
            }
        }
    }

    return state;
}

const validateDateFormat = (dateString, format, parentKey) => {
    const parsedDate = new Date(dateString);

    if (parsedDate instanceof Date && !isNaN(parsedDate) && parsedDate.toISOString().slice(0,10) !== dateString) {
        errorFunc('validateDateFormat', `${parentKey}의 형식이 올바르지 않습니다. (올바른 형식: ${format})`);
    }
}

export { isEventObjBack };