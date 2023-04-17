import { useState } from "react";
import axios from 'axios';
import { format } from "date-fns";

export default function AddSlot() {
  const initialValues = {slotNumber:"",startDate:new Date().toISOString().substr(0, 16) ,lastDate:""}
  const [formValues,setValues]=useState(initialValues);
  const [errorValues,setError]=useState({});

  const handleChange = (event) =>{
    const {name,value} =event.target;
    setValues({...formValues,[name]:value});

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm(formValues));
    console.log(formValues);
    if (Object.keys(validateForm(formValues)).length === 0) {
      axios.post(`http://localhost:8080/park/save-slot`,formValues)
        .then((response) => {
          console.log(response.data);
          setError({success:"Registration Successfully"})
        })
        .catch((error) => {
          setError({credential: "Registration Failed"});
          console.log(error);
        });
    }
  }

  const validateForm = (values) => {
    const errors = {};
    if (!values.slotNumber) {
      errors.slotNumber = 'Slot number is invalid !!';
    }

    if (!values.startDate) {
      errors.startDate = 'Start date is invalid !!';
    }
    
    if (!values.lastDate ) {
      errors.lastDate = `Last date is invalid !!`;
    }
    
    return errors;
  }

  const formatDate = (date) => {
    return date ? format(new Date(date), "dd/MM/yyyy") : "";
  };
      
  return (
    <div className="container-head">    
      <div className="container">
        <div className="header">
          <h2>Create Slot</h2>
        </div>
        <form id="myForm" className="form" onSubmit={handleSubmit}>
          {<div className="invalid">{errorValues.credential}</div>}
          {<div className="success">{errorValues.success}</div>}
          <br></br>
          <div className="form-control">
            <label>Slot Number</label>
            <input type="text" name="slotNumber" id="slotNumber" value={formValues.slotNumber} onChange={handleChange} />
            <div className="error">{errorValues.slotNumber}</div>
          </div>
          <div className="form-control">
            <label>Start Date</label>
            <input type="datetime-local" name="startDate" id="startDate" value={formValues.startDate}     min={new Date().toISOString().substr(0, 16)} onChange={handleChange} />
            <div className="error">{errorValues.startDate}</div>
          </div>
          <div className="form-control">
            <label>Last Date</label>
            <input type="datetime-local" name="lastDate" id="lastDate" value={formValues.lastDate} onChange={handleChange} />
            <div className="error">{errorValues.lastDate}</div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>   
  );
}
