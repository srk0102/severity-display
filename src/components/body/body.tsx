//Importing npm modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Async from "../sev/async";

//Importing utility functions from utilities
import { filteringTheData } from "../utilities/utilities";

export function Body() {
  const navigate = useNavigate();
  const [td, setData] = useState<any>();

  // Getting data from redux.
  const reduxData: any = useSelector((state) => state);
  let data =
    reduxData?.LocalUserDetails?.filterData?.length !== 0
      ? reduxData?.LocalUserDetails?.filterData
      : reduxData?.LocalUserDetails?.tableData;

  //Colors array for severity
  const colorsArray = [
    "#fc3535",
    "#fc6435",
    "#fcb335",
    "#355dfc",
    "#9235fc",
    "#f235fc",
  ];

  /**
  *This function will reverse the order of data
  */
  const tod = () => {
    setData((td ? td : data)?.slice(0).reverse());
  };

  /**
   * This Function will navigate the page to particular severity page.
   * @param {object} event this object contains the div event trigger object and everything about that container.
   */
  const handle = (event: any) => {
    navigate(`/sev/${event}`);
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
                <th className="col-2">SEVERITY</th>
                <th className="col-4">TOTAL ALERTS</th>
                <th className="col-2">NEW</th>
                <th className="col-2">ACKNOWLEDGE</th>
                <th className="col-2">CLOSED</th>
              </tr>
            </thead>
            <tbody>
              {(td ? td : data)?.map((obj: any, index: any) => (
                <>
                  <tr
                    className="d-flex flex-row justify-content-between border-bottom pb-1 mt-2"
                    onClick={() => handle(index)}
                  >
                    <td
                      className={`col-2 border-top-0 border-end-0 border-bottom-0 border-5 rounded ps-1`}
                      style={{
                        borderColor: colorsArray[parseInt(obj.title.slice(-1))],
                      }}
                    >
                      {obj.title}
                    </td>
                    <td className="col-4">
                      <div className="d-flex flex-row justify-content-start align-items-center">
                        <label className="col-2 pe-2 text-end" htmlFor="file">
                          {obj.totalAlerts}
                        </label>
                        <meter id="file" value={obj.totalAlerts / 100}></meter>
                      </div>
                    </td>
                    <td className="col-2">
                      {filteringTheData(obj.data, "new")}
                    </td>
                    <td className="col-2">
                      {filteringTheData(obj.data, "acknowledge")}
                    </td>
                    <td className="col-2">
                      {filteringTheData(obj.data, "closed")}
                    </td>
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
