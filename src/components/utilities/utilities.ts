// import Data from "../../data.json"
import Data from "../../first.json"


const gg = async () => {
  const getData = fetch("https://api.jsonbin.io/b/61c0217978cc9429607c55e2/2", {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'secret-key': '$2b$10$VVdH1AWkxbEmTJoC6egWdODN6vARjNJNteEUKPUrCOk5zJj6Vcz7m'
    }
  }).then(res => res.json())

  return await getData
}

const gh = async () => {
  const getData = fetch("https://api.jsonbin.io/b/61c2ef0b5763ef239c4b6c01", {
    method : "GET",
    headers : {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'secret-key': '$2b$10$VVdH1AWkxbEmTJoC6egWdODN6vARjNJNteEUKPUrCOk5zJj6Vcz7m'
    }
  }).then(res => res.json())
  
  return await getData
}

/**
 * This function is to count the number of times given string is in data.
 * @param {Array} data 
 * @param {String} type 
 * @returns {Number} it will return a number of count(type) in data
 */
function filteringTheData(data: any, type: String) {
  let count = 0;
  for (let obj of data) {
    if (obj.type === type) {
      count += 1;
    }
  }
  return count;
};

/**
 * @param {Object} data
 * @returns the count of total alerts.
 */
function countTotalAlerts(data: any = Data) {
  return data.length
}

/**
 * This function will change date format and gives the last date in data.
 * @param {Data} date
 * @returns 
 */
export function getMinimumDate(data: any = Data) {
  let dates = [] as any
  for (let obj of Data) {
    dates.push(new Date(obj.date))
  }
  let minDate = dates.reduce((first: any, second: any) => first < second ? first : second);
  return minDate.toString().split(" ").slice(1, 5).join("-")
}


/**
 * This function is to send json data to redux state.
 * @param {Object} obj this is the data will be sent to redux.
 * @return -> this will send data to redux and returns nothing. 
 */
const SendDataToRedux = (sel: any = "", data: any = []) => {
  var testData = [] as any
  // console.log("data",data)

  for (let obj of data) {
    let testObj = {
      title: "",
      totalAlerts: 0,
      data: [] as any[],
    }
    let checkData = testData.some((ele: any) => ele.title === obj.sev)

    if (checkData && obj.resource === (sel === "" ? obj.resource : sel)) {
      let indexOfEle = testData.findIndex((item: any) => item.title === obj.sev);
      testData[indexOfEle].totalAlerts += 1
      testData[indexOfEle].data.push(obj);
    } else {
      if (obj.resource === (sel === "" ? obj.resource : sel)) {
        testObj.title = obj.sev
        testObj.totalAlerts += 1
        testObj.data.push(obj)
        testData.push(testObj)
      } else if (checkData === false) {
        testObj.title = obj.sev
        testData.push(testObj)
      }
    }
  }
  testData.sort((a: any, b: any) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
  return (testData)
}


export { filteringTheData, SendDataToRedux, countTotalAlerts, gg, gh }