import { AxiosResponse } from 'axios';
import {call, delay, put, takeEvery} from 'redux-saga/effects'
import { IPost } from '../../types/IPost';
import { fetchPost } from '../../api/postAPI';
import { POST_FETCHING_SUCCESS, posts } from '../posts/postSlice';


function* fetchPostsWorker() {
    try {
        yield put(posts.actions.postsFetching())
        const data: AxiosResponse<IPost[]> = yield call(fetchPost)
        yield delay(500)
        yield put(posts.actions.postsFetchingSuccess(data.data))
    }
    catch (e) {
        yield put(posts.actions.postsFetchingError("Ошибка при загрузке данных"))
    }
}

export function* postsWatcher() {
    yield takeEvery(POST_FETCHING_SUCCESS, fetchPostsWorker)
}