export const orderAction = {
    updateOrder: 'updateOrder',
    updateNumberOrder: 'updateNumberOrder',
}

export const updateOrder = (data) => {
    return {
        type: orderAction.updateOrder,
        data: data,
    }
}

export const updateNumberOrder = (data) => {
    return {
        type: orderAction.updateNumberOrder,
        data: data,
    }
}