export const countReducer = function (
  state = { tableData: [], filterData: [], filter: "", totalAlerts: 0, date:"",summery:{}, test:[] },
  action
) {
  switch (action.type) {
    case "global":
      return { ...state, tableData: action.payload }
    case "filteredData":
      return {...state, filterData: action.payload}
    case "filter":
      return { ...state, filter: action.payload }
    case "totalAlerts":
      return { ...state, totalAlerts: action.payload }
    case "date":
      return { ...state, date: action.payload}
    case "summery":
      return{...state, summery: action.payload}
    case "test":
      return {...state, test : action.payload}
    default:
      return state;
  }
};