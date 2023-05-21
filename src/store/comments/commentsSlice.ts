import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IComment } from "../../types/IComment"

interface CommentsState {
    comments: IComment[],
    loading: boolean,
    error: null | string
}

const initialState: CommentsState = {
    comments: [],
    loading: false,
    error: null
}
export const comments = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        commentsFetching(state) {
            state.loading = true
        },
        commentsFetchingSuccess(state, action: PayloadAction<IComment[]>) {
            state.loading = false;
            state.error = ''
            state.comments.push(...action.payload)
        },
        commentsFetchingError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        }
    },
})

export const COMMENTS_FETCHING_SUCCESS = 'comments/commentsFetch'
export const getComments = (postId: string | undefined) => ({ type: COMMENTS_FETCHING_SUCCESS, postId });

export default comments.reducer
 