import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const ageUpAsync = createAsyncThunk(
  'age/up',
  () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
          res(1);
        //   rej()
        }, 3000);
      });
      }
);

export const ageDownAsync = createAsyncThunk(
  'age/down',
  () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
          res(1);
        //   rej()
        }, 3000);
      });
      }
);

const initialState = {
    age: 25,
    loading: false,
    error: null
};

const ageSlice = createSlice({
    name: 'age',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(ageUpAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(ageUpAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.age += action.payload;
          })
          .addCase(ageUpAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
          })
          .addCase(ageDownAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(ageDownAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.age -= action.payload;
          })
          .addCase(ageDownAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
          });

    },
});

export default ageSlice.reducer;
