export const productAction = {
    updateProducts: 'updateProducts',
    updateNumberProduct: 'updateNumberProduct',
}

export const updateProduct= (data) => {
    return {
        type: productAction.updateProducts,
        data: data,
    }
}

export const updateNumberProduct= (data) => {
    return {
        type: productAction.updateNumberProduct,
        data:data,
    }
}