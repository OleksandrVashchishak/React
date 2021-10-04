const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePhone = (phone) => {
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    return re.test(String(phone).toLowerCase());
}

export const registerValid = (user) => {
    let isErrors = false
    let validObj = {}
    const requiredField = ['firstName', 'lastName']
    requiredField.forEach(el => {
        if (user[el].length < 3) {
            validObj = { ...validObj, [el]: "Це поле обов'язкове до заповнення" }
            isErrors = true
        }
    })

    if (!validateEmail(user.email)) {
        validObj = { ...validObj, email: "Невірний формат електронної пошти" }
        isErrors = true
    }

    if (!validatePhone(user.phone)) {
        validObj = { ...validObj, phone: "Невірний формат номера телефону" }
        isErrors = true
    }

    if (user.password.length < 6) {
        validObj = { ...validObj, password: "Введіть не менше шести символів" }
        isErrors = true
    }

    if (isErrors) {
        validObj = { ...validObj, isErrors: true }
    }
    return validObj
}

export const loginValid = (user) => {
    let isErrors = false
    let validObj = {}

    if (!validateEmail(user.email)) {
        validObj = { ...validObj, email: "Невірний формат електронної пошти" }
        isErrors = true
    }

    if (user.password.length < 6) {
        validObj = { ...validObj, password: "Введіть не менше шести символів" }
        isErrors = true
    }

    if (isErrors) {
        validObj = { ...validObj, isErrors: true }
    }
    return validObj
}

export const onChangeValid = (name, value) => {
    let errorObj = {};

    if ((name === 'email') && !validateEmail(value)) {
        errorObj = { ...errorObj, email: 'Невірний формат електронної пошти' }
    } else if ((name === 'email') && validateEmail(value)) {
        errorObj = { ...errorObj, email: '' }
    }

    if ((name === 'phone') && !validatePhone(value)) {
        errorObj = { ...errorObj, phone: 'Невірний формат номера телефону' }
    } else if ((name === 'phone') && validatePhone(value)) {
        errorObj = { ...errorObj, phone: '' }
    }

    if ((name === 'firstName' && !value)) {
        errorObj = { ...errorObj, firstName: "Це поле обов'язкове до заповнення" }
    } else {
        errorObj = { ...errorObj, firstName: '' }
    }

    if ((name === 'lastName' && !value)) {
        errorObj = { ...errorObj, lastName: "Це поле обов'язкове до заповнення" }
    } else {
        errorObj = { ...errorObj, lastName: '' }
    }

    if ((name === 'password' && value.length < 6)) {
        errorObj = { ...errorObj, password: "Введіть не менше шести символів" }
    } else {
        errorObj = { ...errorObj, password: '' }
    }

    return errorObj
}