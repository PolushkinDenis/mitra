import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IPost } from "../../types/IPost"

interface PostState {
    posts: IPost[],
    loading: boolean,
    error: null | string
}

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
}
export const posts = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsFetching(state) { // Начало загрузки
            state.loading = true
        },
        postsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
            state.loading = false;
            state.error = ''
            state.posts = action.payload
        },
        postsFetchingError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        }
    },
})

export const POST_FETCHING_SUCCESS = 'posts/postsFetch'
export const getPosts = createAction(POST_FETCHING_SUCCESS)

export default posts.reducer
 