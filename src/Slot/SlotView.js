import React, { useEffect, useState } from "react";
import "./ParkingSlot.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

function ShowView() {
  const [data, setData] = useState([]);
  const URL='http://localhost:8080/park/view-slot';
  const navigate = useNavigate();
  const [activeSlot, setActiveSlot] = useState(null);



  const handleClick = (id) => {

    navigate('/login')
  };

  const handleSlotHover = (slot) => {
    setActiveSlot(slot);
  }



  useEffect(() => {
    axios.get(URL)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="parking-container">
    <h2>Parking Slots</h2>
    <div className="parking-slots">
      {data.map((slot) => (
        
        <div
          key={slot.id}
          className={`parking-slot available`}
          onClick={() => handleClick(slot.id)}
       
          onMouseEnter={() => handleSlotHover(slot)}
          onMouseLeave={() => handleSlotHover(null)}
        >
            <br/>
            <div>
           Slot No : {slot.slotNumber}  
           </div>
            {activeSlot === slot && (
              <div className="slot-tooltip">
                <p> Available Till : {slot.lastDateAsString} </p>
              </div>
            )}
        
        </div>
      ))}
    </div>
  </div>
  );
  
}
export default ShowView;
