export const userAction = {
    signin: 'signin',
    signout: 'signout',
    updateUserInfo: 'updateUserInfo',
}

export const signin = (data) => {
    return {
        type: 'signin',
        data: data,
    }
}

export const signout = (data) => {
    return {
        type: 'signout',
        data: data,
    }
}

export const updateUserInfo = (data) => {
    return {
        type: 'updateUserInfo',
        data: data,
    }
}