import ACTION_CONSTANTS from "./actionConstants";

export const setBundleSelectedForms = (data) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.BUNDLE_SELECTED_FORMS,
    payload: data,
  });
};

export const setBundleForms = (data) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.BUNDLE_FORM_LIST,
    payload: data,
  });
};

export const setBundleFormListLoading = (data) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.BUNDLE_FORM_LIST_LOADING,
    payload: data,
  });
};

export const setBundleFormListPage = (data) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.BUNDLE_FORM_LIST_PAGE_CHANGE,
    payload: data,
  });
};

export const setBundleFormListSort = (data) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.BUNDLE_FORM_LIST_SORT_CHANGE,
    payload: data,
  });
};

export const setBundleFormSearch = (data) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.BUNDLE_FORM_LIST_FORM_SEARCH,
    payload: data,
  });
};

export const resetBundleData = (data) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.BUNDLE_RESET,
    payload: data,
  });
};

export const setBundleSubmissionData = (data) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.BUNDLE_FORM_SUBMISSION,
    payload: data,
  });
};

export const setBundleLoading = (data) => (dispatch) => {
  dispatch({
    type: ACTION_CONSTANTS.BUNDLE_LOADING,
    payload: data,
  });
};