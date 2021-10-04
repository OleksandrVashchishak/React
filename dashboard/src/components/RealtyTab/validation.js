export const realtyVaild = (realty) => {
    let isErrors = false
    let validObj = {}

    const requiredField = ['firstName', 'lastName', 'price', 'typeSale']
    const requiredLength = ['category', 'nameRealty']
    requiredField.forEach(el => {
        if (!realty[el]) {
            validObj = { ...validObj, [el]: "Це поле обов'язкове до заповнення" }
            isErrors = true
        }
    })
    requiredLength.forEach(el => {
        if (realty[el].length < 3) {
            validObj = { ...validObj, [el]: "Не менше 3 символів" }
            isErrors = true
        }
    })

    if (isErrors) {
        validObj = { ...validObj, isErrors: true }
    }
    return validObj
}



export const onChangeValid = (name, value) => {
    let errorObj = {};

    if ((name === 'nameRealty' && value.length < 3) ||
        (name === 'category' && value.length < 3)) {
        errorObj = { ...errorObj, [name]: "Не менше 3 символів" }
    } else {
        errorObj = { ...errorObj, [name]: '' }
    }

    const requiredField = ['firstName', 'lastName', 'price', 'typeSale']
    requiredField.forEach(el => {
        if (name === el && !value) {
            errorObj = { ...errorObj, [el]: "Це поле обов'язкове до заповнення" }
        }
    })


    return errorObj
}