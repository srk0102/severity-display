//Importing npm modules
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Importing Global coms to main folder
import { TopBar } from "../topbar/topbar";
import { Summery } from "../summery/summery";
import { Body } from "../body/body";

//Importing utilities from utilities folder
import {
  SendDataToRedux,
  countTotalAlerts,
  getMinimumDate,
  gg,
  gh
} from "../utilities/utilities";

//Importing payloads from actions
import {
  sendTotalAlertsToStore,
  sendTableDataToStore,
  sendDateToStore,
  sendTestToStore,
  sendSummeryToStore
} from "../../store/actions/counter";

export function Main() {
  const dispatch = useDispatch();

  useEffect(()=>{
    (async () => {
      dispatch(sendTestToStore(await gg()));
    })();
    (async () => {
      dispatch(sendSummeryToStore(await gh()));
    })();
  }, [])

  // Getting data from redux.
  const reduxData: any = useSelector((state) => state);
  let filter = reduxData?.LocalUserDetails?.filter;
  let totalAlerts = reduxData?.LocalUserDetails?.totalAlerts;
  let date = reduxData?.LocalUserDetails?.date;
  let summ = reduxData?.LocalUserDetails?.summery

  //Sending Data to redux
  useEffect(() => {
    (async () => {
      dispatch(sendTableDataToStore(SendDataToRedux(filter, await gg())));
    })();
    dispatch(sendTotalAlertsToStore(countTotalAlerts()));
    dispatch(sendDateToStore(getMinimumDate()));
  }, [filter]);

  return (
    <>
      <TopBar />
      <Summery count={totalAlerts} date={date} summ={summ} />
      <Body />
    </>
  );
}
