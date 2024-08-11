import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'fetchReducer/fetchData',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    // console.log(data);
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
        addreaction: (state, action) => {
            const {id, name} = action.payload;
            const post = state.data.find((post) => post.id === id);
            if (post) {
                post.reactions[name] += 1;
            }
        },
      removeUser: (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
    }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            // console.log(state);
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            const loadedPosts = action.payload.map(post => {
                post.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,                
                };
                return post;
            })
            state.data = loadedPosts;
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
          });
    },
});

export const get_posts = (state) => state.fetchReducer.data;
export const get_loading = (state) => state.fetchReducer.loading;
export const get_error = (state) => state.fetchReducer.error;

export const {removeUser, addreaction} = fetchSlice.actions;
export default fetchSlice.reducer;
