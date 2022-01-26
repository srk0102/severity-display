//Importing npm modules
import React from "react";

/**
 * @param {Number} count Total alerts counter.
 * @param {Date} date date of first severity.
 * @returns the tsx element of headers and count of total alerts.
 */
export function Summery(props: any) {
  const { count, date, summ } = props;

  return (
    <>
      <div className="container ms-0">
        <div className="row">
          <div className="col-12 d-flex flex-row justify-content-between p-3">
            <div className="d-flex flex-row justify-content-around col-8">
              <div className="d-flex flex-column p-2">
                <h5 className="m-0 fw-bold" style={{ fontSize: "13px" }}>
                  Total alerts
                </h5>
                <p className="m-0 text-primary fs-1">{count}</p>
                <span className="text-secondary" style={{ fontSize: "10px" }}>
                  Since {date ? date : "NA"}
                </span>
              </div>
              <div className="d-flex flex-column p-2">
                <h5 className="m-0 fw-bold" style={{ fontSize: "13px" }}>
                  Smart Groups(Preview)
                </h5>
                <p className="m-0 text-primary fs-1">{summ.smartGroups ? summ.smartGroups : "NA"}</p>
                <span className="text-secondary" style={{ fontSize: "10px" }}>
                  99.11% Reduction
                </span>
              </div>
              <div className="d-flex flex-column p-2">
                <h5 className="m-0 fw-bold" style={{ fontSize: "13px" }}>
                  Total alert rules
                </h5>
                <p className="m-0 text-primary fs-1">{summ.totalAlertRules ? summ.totalAlertRules : "NA"}</p>
                <span className="text-secondary" style={{ fontSize: "10px" }}>
                  Enabled 633
                </span>
              </div>
              <div className="d-flex flex-column p-2">
                <h5 className="m-0 fw-bold" style={{ fontSize: "13px" }}>
                  Action rules(preview)
                </h5>
                <p className="m-0 text-primary fs-1">{summ.actionRules ? summ.actionRules : "NA"}</p>
                <span className="text-secondary" style={{ fontSize: "10px" }}>
                  Enabled 41
                </span>
              </div>
            </div>
            <div className="col-4 d-flex flex-row justify-content-end">
              <div className="d-flex flex-column">
                <p>Learn More</p>
                <a href="/">
                  About Alerts<i className="fas fa-external-link-alt ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
