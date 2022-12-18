import { CATEGORIES_ACTION_TYPES } from "./categories.types";

import { createActions } from "../../Utils/reducer/reducer.utils";

import { getCategoriesAndDocuments } from "../../Utils/Firebase/Firebase.utils";

export const setCategories = (categoriesArray) => createActions(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => createActions(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => createActions(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFaild = (error) => createActions(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILD, error);