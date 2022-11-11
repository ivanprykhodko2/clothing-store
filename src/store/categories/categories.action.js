import { createActions } from "../../Utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories = (categoriesArray) => createActions(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);