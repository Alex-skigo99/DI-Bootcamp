import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'fetchReducer/fetchData',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    return data
  }
);

const initialState = {
    data: [],
    loading: false,
    error: null
};

const fetchSlice = createSlice({
    name: 'fetchReducer',
    initialState,
    reducers:{
      removeUser: (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
    }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            console.log(state);
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
          });
    },
});

export const {removeUser} = fetchSlice.actions;
export default fetchSlice.reducer;
