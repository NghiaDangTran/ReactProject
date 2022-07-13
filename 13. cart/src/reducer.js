const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        })
        return { ...state, cart: tempCart }
    }
    if (action.type === "THROW_ITEM") {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {

                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
        }).filter(cartItem => cartItem.amount !== 0)
        return { ...state, cart: tempCart }
    }
    if (action.type === "CLEAR_ALL") {
        return { ...state, cart: [] }


    }
    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }
    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart: action.payload, loading: false }
    }
    if (action.type === "LOAD_ITEM") {


        let total = 0
        let amount = 0
        state.cart.forEach((element) => {
            amount += element.amount
            total += element.price * element.amount
        });

        total = total.toFixed(2);

        return { ...state, total, amount }


    }
    if (action.type === "REMOVE_ITEM") {

        const newCart = state.cart.filter((i) =>
            i.id !== action.payload

        )


        return { ...state, cart: newCart }


    }



}

export default reducer