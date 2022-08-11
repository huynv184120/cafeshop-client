export const userAction = {
    updateUserInfo: 'updateUserInfo',
}


export const updateUserInfo = (data) => {
    return {
        type: 'updateUserInfo',
        data: data,
    }
}