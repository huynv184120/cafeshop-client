export const cartAction = {
    addProductToCart: 'addProduct',
    removeProductFromCart: 'removeProduct',
    resetCart: 'resetCart',
    deleteProductFromCart: 'deleteProduct',
}

export const addProductToCart = (data) => {
    return {
        type: cartAction.addProductToCart,
        data: data,    
    }
}

export const removeProductFromCart = (data) => {
    return {
        type: cartAction.removeProductFromCart,
        data: data,
    }
}

export const resetCart = (data) => {
    return {
        type: cartAction.resetCart,
        data: data,
    }
}

export const deleteProductFromCart = (data) => {
    return {
        type: cartAction.deleteProductFromCart,
        data: data,
    }
}