import {mapTotalAlertsToStore, mapTableDataToStore, mapFilteredDataToStore, mapFilterToStore, mapDatetoStore,mapSummerytoStore, mapTestToStore} from './actions'

/**
 * This function will dispatch the data to TableData in redux Store.
 * @param {Object} data this is the data that will be sent to the redux store
 * @returns data to redux store
 */
export function sendTableDataToStore(data) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(mapTableDataToStore(data));
    }, 1);
  }
}

/**
 * This function will dispatch the data to FilterData in redux Store.
 * @param {Object} data this is the data that will be sent to the redux store.
 * @returns data to redux store.
 */
export function sendFilterDataToStore(data) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(mapFilteredDataToStore(data));
    }, 1);
  }
}

/**
 * This function will dispatch the data to Filter in redux store.
 * @param {String} data this is the data that will be sent to the redux store.
 * @returns data to redux store.
 */
export function sendFilterOptionToStore(data) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(mapFilterToStore(data));
    }, 1)
  }
}

/**
 * This function will dispatch the data to TotalAlerts in redux store.
 * @param {Number} data this is the data that will be sent to the redux store.
 * @returns data to redux store.
 */
export function sendTotalAlertsToStore(data) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(mapTotalAlertsToStore(data));
    }, 1)
  }
}

/**
 * 
 */
export function sendDateToStore(data) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(mapDatetoStore(data));
    }, 1)
  }
}

/**
 * 
 * @param {*} data 
 * @returns 
 */
export function sendSummeryToStore(data){
  return function (dispatch) {
    setTimeout(function () {
      dispatch(mapSummerytoStore(data));
    }, 1)
  }
}


/**
 * 
 * @param {*} data 
 * @returns 
 */
export function sendTestToStore(data) {
  return function (dispatch) {
    setTimeout(function () {
      dispatch(mapTestToStore(data));
    }, 1)
  }
}

