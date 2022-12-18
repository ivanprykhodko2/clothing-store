import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../Utils/Firebase/Firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFaild } from './categories.action';

import { CATEGORIES_ACTION_TYPES } from './categories.types';



export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
    }
    catch (error) {
        yield put(fetchCategoriesFaild(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}