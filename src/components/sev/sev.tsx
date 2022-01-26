import React, { useState } from "react";
import Async from "./async";
import { useSelector } from "react-redux";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import "./sev.css"

export default function Sev() {
  //Getting index from url parameter
  const id = window.location.pathname.split("/")[2];

  const [td, setData] = useState<any>();

  //Getting data from redux
  const reduxData: any = useSelector((state) => state);
  let data =
    reduxData?.LocalUserDetails?.filterData?.length !== 0
      ? reduxData?.LocalUserDetails?.filterData[id]?.data
      : reduxData?.LocalUserDetails?.tableData[id]?.data;

  const timeOut = of(null).pipe(delay(4000));

  /**
   *This function will reverse the order of data
   */
  const tod = () => {
    setData((td ? td : data)?.slice(0).reverse());
  };

  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-row justify-content-end">
            <i
              className="fas fa-sort fa-lg"
              style={{ color: "#0D6EfD" }}
              onClick={() => tod()}
            ></i>
          </div>
          <table className="col-12">
            <thead>
              <tr className="d-flex flex-row justify-content-between border-bottom pb-1">
                <th className="col-3">SEVERTY</th>
                <th className="col-3">TYPE OF ALERTS</th>
                <th className="col-3">STATUS</th>
                <th className="col-3">Id</th>
              </tr>
            </thead>
            <tbody>
              {(td ? td : data)?.map((obj: any) => (
                <>
                  <tr className="d-flex flex-row justify-content-between border-bottom pb-1 mt-2">
                    <td
                      className={`col-3 border-top-0 border-end-0 border-bottom-0 border-5 rounded ps-1 ${obj.sev}`}
                    >
                      {obj.sev}
                    </td>
                    <td className="col-3">{obj.resource}</td>
                    <td className="col-3">{obj.type}</td>
                    <td className="col-3">{obj.id}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
