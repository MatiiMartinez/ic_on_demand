import { call, put, takeEvery } from "redux-saga/effects";

function getApi(params) {
    // Ejecutar fetch GET
}

function* getUser() {
    try {
        const user = yield call(getApi);
        yield put({ type: "GET_USER_SUCCESS", payload: user });
    } catch (error) {
        yield put({ type: "GET_USER_FAILED", message: error.message });
    }
}

export default function* userSaga() {
    yield takeEvery("GET_USER_LOGIN", getUser);
}
