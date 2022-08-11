export const chatUserAction = {
    showFrame: 'showFrame',
}

export const showFrame = (data)=> {
    return {
        type: chatUserAction.showFrame,
        data: data,
    }
}