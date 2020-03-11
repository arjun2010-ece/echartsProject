import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  const [focusedInput, setFocusedInput] = useState(null)
  const handleDatesChange =  ({ startDate, endDate }) => {
        setStartDate(startDate);
        const sdate = startDate._d;
        console.log("Start date :",sdate);
        console.log("Formatted Start date :",moment(sdate).format('dddd'));
        if(endDate){
            setEndDate(endDate);
            const edate = endDate._d;
            console.log("end date :",edate);
            console.log("Formatted end date :",moment(edate).format('dddd'));

        }
        if(startDate && endDate){
            console.log("both exists...");
        }
  };
  const handleFocusChange = focusedInput => {
    setFocusedInput(focusedInput);
    console.log("focussed input :",focusedInput);
  }
  return (
    <DateRangePicker
      startDate={startDate}
      startDateId="Start"
      endDate={endDate}
      endDateId="End"
      onDatesChange={handleDatesChange}
      focusedInput={focusedInput}
      onFocusChange={handleFocusChange}
    />
  )
}

export default DatePicker;
