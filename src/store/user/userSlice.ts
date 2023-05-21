import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IUser } from "../../types/IUser"
import { IPost } from "../../types/IPost"

interface UserState {
    user: IUser | null,
    posts: IPost[]
    loading: boolean,
    error: null | string
}

const initialState: UserState = {
    user: null,
    posts: [],
    loading: false,
    error: null
}
export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersFetching(state) {
            state.loading = true
            state.posts = []
            state.user = null
        },
        usersFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.loading = false;
            state.error = ''
            state.posts = []
            state.user = action.payload
        },
        usersPostsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
            state.loading = false;
            state.error = ''
            state.posts = action.payload
        },
        userssFetchingError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        }
    },
})

export const USER_FETCHING_SUCCESS = 'USER_FETCHING_SUCCESS'
export const getUsers = (userId: string | undefined) => ({ type: USER_FETCHING_SUCCESS, userId });

export default users.reducer
 