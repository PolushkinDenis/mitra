import { all } from "redux-saga/effects";
import { userWatcher } from "./userSaga";
import { postsWatcher } from "./postSaga";
import { commentsWatcher } from "./commentSaga";


export function* rootWatcher() {
    console.log("rootWatcher start")
    yield all([userWatcher(), postsWatcher(), commentsWatcher()])
    console.log("rootWatcher end")

}