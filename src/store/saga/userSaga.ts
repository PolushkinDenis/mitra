import axios, { AxiosResponse } from 'axios';
import {call, delay, put, takeEvery} from 'redux-saga/effects'
import { IUser } from '../../types/IUser';
import { USER_FETCHING_SUCCESS, getUsers, users } from '../user/userSlice';
import { fetchUser } from '../../api/userAPI';
import { fetchUserPost } from '../../api/postAPI';
import { IPost } from '../../types/IPost';

function* fetchUsersWorker(action: any) {
    try {
        yield put(users.actions.usersFetching())
        const userData: AxiosResponse<IUser> = yield call(fetchUser, action.userId)      
        const userPosts: AxiosResponse<IPost[]> = yield call(fetchUserPost, action.userId)
        yield delay(500)
        yield put(users.actions.usersFetchingSuccess(userData.data))
        yield put(users.actions.usersPostsFetchingSuccess(userPosts.data))
    }
    catch (e) {
        yield put(users.actions.userssFetchingError("Ошибка при загрузке данных"))
    }
}

export function* userWatcher() {
    yield takeEvery(USER_FETCHING_SUCCESS, fetchUsersWorker)
}