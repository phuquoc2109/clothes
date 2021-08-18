import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            state.push(action.payload);

        },
        editQuantity: (state, action) => {
            const productEdit = action.payload;
            const idIndex = state.findIndex(product => product.id === productEdit.id)
            if (idIndex >= 0) {
                state[idIndex].quantity = productEdit.editquanity;
            }
        },
        removeProduct: (state, action) => {
            const productRemove = action.payload;
            return state.filter(product => product.id !== productRemove);
        },
        removeCart: (state, action) => {
            return state = [];
        }
    }
})

const { reducer, actions } = cart;
export const { addCart, editQuantity, removeProduct, removeCart } = actions;
export default reducer;