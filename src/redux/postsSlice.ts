import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
    id: number;
    title: string;
  }

  interface PostsState {
    posts: Post[];
  }

  const initialState: PostsState = {
    posts: [],
  };

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        addPost: (state, action: PayloadAction<Post>)=>{
            state.posts.push(action.payload)
        }
    }
})

export const { addPost } = postsSlice.actions;
export const selectPosts = (state: { posts: PostsState }) => state.posts.posts;
export default postsSlice.reducer;
