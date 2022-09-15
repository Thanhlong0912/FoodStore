// For Add Item Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}
// For Delate Item from Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}