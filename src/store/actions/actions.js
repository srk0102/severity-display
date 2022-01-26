/**
 * This will return the object that needs to be in format of dispatch object.
 * @param {Number} data this is the data that will be sent as payload for type totalAlerts.
 * @returns the oject with type and payload in it for totalAlerts action.
 */
 export const mapTotalAlertsToStore = (data) => {
  return {
    type: "totalAlerts",
    payload: data
  }
}

/**
 * This will return the object that needs to be in format of dispatch object.
 * @param {Object} data this is data will be sent as payload for type global.
 * @returns the object with type and payload in it for global action.
 */
export const mapTableDataToStore = (data) => {
  return {
    type: "global",
    payload: data
  }
}

/**
 * This will return the object that needs to be in format of dispatch object.
 * @param {Object} data this is data will be sent as payload for type filterData.
 * @returns the object with type and payload in it for FilterData action.
 */
export const mapFilteredDataToStore = (data) => {
  return {
    type: "filteredData",
    payload: data
  }
}

/**
 * This will return the object that needs to be in format of dispatch object.
 * @param {String} data This is data that will be sent as payload for type filter.
 * @returns the object with type and payload in it for Filter action.
 */
export const mapFilterToStore = (data) => {
  return {
    type: "filter",
    payload: data
  }
}

/**
 * 
 */
export const mapDatetoStore = (data) => {
  return {
    type:"date",
    payload: data
  }
}

/**
 * 
 * @param {Object} data 
 * @returns 
 */
export const mapSummerytoStore = (data) => {
  return{
    type:"summery",
    payload: data
  }
} 


/**
 * 
 */
export const mapTestToStore = (data) => {
  return {
    type:"test",
    payload: data,
  }
}