import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk commands
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('https://lit-bayou-30151.herokuapp.com/products').then(res => res.json())
        console.log(response);
        return response

    }
)

// main slice and reducers
const productslice = createSlice({
    name: 'products',
    initialState: {
        allitems: [{}],
        playList: [],
        status: 'idle'
    },
    reducers: {
        addToPlaylist: (state, { payload }) => {
            state.playList.push(payload)
        },
        removeFromPlaylist: (state, { payload }) => {
            state.playList = state.playList.filter(game => game.id !== payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.allitems = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'pending';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addToPlaylist, removeFromPlaylist } = productslice.actions;

export default productslice.reducer;
