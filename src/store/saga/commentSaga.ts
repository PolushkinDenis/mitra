import { AxiosResponse } from 'axios';
import {call, delay, put, takeEvery} from 'redux-saga/effects'
import { fetchComments } from '../../api/commentsAPI';
import { comments, COMMENTS_FETCHING_SUCCESS } from '../comments/commentsSlice';
import { IComment } from '../../types/IComment';


function* fetchCommentsWorker(action: any) {
    try {
        yield put(comments.actions.commentsFetching())
        const data: AxiosResponse<IComment[]> = yield call(fetchComments, action.postId)
        yield put(comments.actions.commentsFetchingSuccess(data.data))
    }
    catch (e) {
        yield put(comments.actions.commentsFetchingError("Ошибка при загрузке данных"))
    }
}

export function* commentsWatcher() {
    yield takeEvery(COMMENTS_FETCHING_SUCCESS, fetchCommentsWorker)
}