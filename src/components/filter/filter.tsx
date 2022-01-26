//Importing npm modules
import React, {useState} from "react";
import { useDispatch} from "react-redux";

//Importing css doc
import "./filter.css";

//Importing utilities from utilities folder
import { SendDataToRedux } from "../utilities/utilities";

//Importing payloads from actions
import {sendFilterOptionToStore, sendFilterDataToStore} from "../../store/actions/counter"

/**
 * this function is to create a searching component
 * @param {Object} props it will contain list, placeholder, labelName.
 * @returns the tsx element of filtering component
 */
export function Filter(props: any) {
  var { list, placeholder, labelName } = props;

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  list = list ? list : [""];

  /**
   * This function is to send the selected filter to redux state
   * @returns it will send filter type to redux state.
   */
  const submit = () => {
    dispatch(sendFilterOptionToStore(value))
    dispatch(sendFilterDataToStore(SendDataToRedux(value)));
  }

  return (
    <>
      <div className="col-12">
        <div className="d-flex flex-column justify-content-center">
          <label htmlFor="in">
            {labelName ? labelName : ""}
            <i
              className="fas fa-info-circle ms-1"
              style={{ fontSize: "10px" }}
            ></i>
          </label>
          <input
            type="text"
            list="alerts"
            id="in"
            placeholder={placeholder ? placeholder : ""}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <datalist id="alerts">
          {list.map((ele: any) => (
            <option value={ele}>{ele}</option>
          ))}
        </datalist>
      </div>
        <button className="btn btn-primary" onClick={submit}>Submit</button>
    </>
  );
}
