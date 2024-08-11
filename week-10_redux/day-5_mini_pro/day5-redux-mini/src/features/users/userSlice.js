import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'users/fetchData',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    return data
  }
);

const initialState = {
    data: [],
    currentUser: -1,
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
      removeUser: (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
            console.log('SetCurrentUser-payload: ', action.payload);
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

export const get_currentUser = (state) => state.userReducer.currentUser;

export const {removeUser, setCurrentUser} = userSlice.actions;
export default userSlice.reducer;
