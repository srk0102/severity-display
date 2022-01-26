import React from "react";

//Importing Reusable componenets
import { Filter } from "../filter/filter";

export function TopBar() {
  const alerts = ["Reboot", "HDMI Failure", "FirmWare Update"]
  return (
    <>
      <div className="bg-secondary bg-opacity-25">
        <div className="container">
          <div className="row">
            <div className="col-12 p-3">
              <p className="hyper-link fw-bold fs-6 col-12">
                Don't see a subscription?
                <a
                  href="/"
                  className="fw-normal
                "
                >
                  Open Directory + Subscription settings
                </a>
              </p>
              <div className="d-flex flex-row justify-content-around align-items-end col-12">
                <div className="col-3 d-flex flex-column p-1">
                  <Filter labelName="*Subscribe" list={alerts} placeholder="type some thing to filter..."/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
