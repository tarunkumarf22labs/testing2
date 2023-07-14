import React, { useState } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ToastAlert from "src/Toast";

interface IInquiryForm {
  props: {
    id: number;
    title: string;
  }[];
}

const InquiryForm = ({ props }: IInquiryForm) => {
  const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i;
  const [name,setName] = useState({
    firstName:'',
    lastName:''
  })
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ValidPhoneNumber, setValidPhoneNumber] = useState(true);
  const [location, setLocation] = useState("");
  const [guestsNumber, setGuestsNumber] = useState({
    adults: null,
    children: null,
    infants: null,
    pets: null,
    staff: null
  })
  const [specialRequest, setSpecialRequest] = useState('')
  const [dates, setDates] = useState({
    firstDate: null,
    lastDate: null,
  })

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
    console.log(newEmail);
  };

  const handleEmailBlur = () => {
    if (email === "") {
      setIsValidEmail(true);
    }
  };

  const validateNumber = (phoneNumber) => {
    setValidPhoneNumber(isValidPhoneNumber(`+${phoneNumber}`));
  };

  const handleFormSubmit = ( e ) =>{
    e.preventDefault();
    console.log('called')
    if(!name.firstName){
        ToastAlert("Please Enter First Name",'warn')
        return
    }
    if(!name.lastName){
        ToastAlert("Please Enter Last Name",'warn')
        return
    }
    if(!isValidEmail) {
        ToastAlert("Please Enter Valid Email",'warn')
        return
    }
    if(!ValidPhoneNumber){
        ToastAlert("Please Enter Valid Mobile Number",'warn')
        return
    }
    if(!location){
        ToastAlert("Please Select a location",'warn')
        return
    }
    if(!dates.firstDate){
        ToastAlert("Please Provide from Date",'warn')
        return
    }
    if(!dates.lastDate){
        ToastAlert("Please Enter Last Date",'warn')
        return
    }
    if(!guestsNumber.adults){
        ToastAlert("Please Provide Number of Guests",'warn')
        return
    }
  }

  console.log(dates)
  return (
    <div className="w-11/12 p-6 md:p-12 m-auto bg-white mt-10 md:absolute md:top-20 md:left-[50%] md:-translate-x-[50%]">
      <form action="">
        <div>
          <div className="w-full m-auto mb-8">
            <input
              type="text"
              className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 "
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              placeholder="First Name*"
              value={name.firstName}
              onChange={(e) => {
                setName({...name, firstName: e.target.value});
              }}
            />
          </div>
          <div className="w-full m-auto mb-8">
            <input
              type="text"
              className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 "
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              placeholder="Last Name*"
              value={name.lastName}
              onChange={(e) => {
                setName({...name, lastName: e.target.value});
              }}
            />
          </div>
          <div className="w-full m-auto mb-8">
            <input
              type="email"
              className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 "
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              placeholder="Email*"
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              value={email}
            />
            {!isValidEmail && (
              <p className="ml-2 text-xs text-left text-red-500">
                {" Please Enter a Valid Email"}
              </p>
            )}
          </div>
          <div className="w-full m-auto mb-8">
            <PhoneInput
              country={"in"}
              value={phoneNumber}
              onChange={(value) => {
                setPhoneNumber(value);
                validateNumber(value);
              }}
              onBlur={() => validateNumber(phoneNumber)}
              inputStyle={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid #c5c5cc",
                borderRadius: "0px",
              }}
            />
            {!ValidPhoneNumber && (
              <p className="mt-0 ml-2 -mb-6 text-xs text-left text-red-500 ">
                {" Please Enter a Valid Mobile Number"}
              </p>
            )}
          </div>
          <div className="w-full m-auto mb-8">
            {/* <input
              type="text"
              className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 "
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              placeholder="First Name"
            /> */}
            <select
              name=""
              id=""
              value={location}
              className="w-full text-xs uppercase border-none outline-none focus:ring-0 custom-select text-[#545456]"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
            >
              <option value="">Select your option</option>
              {props.map((ele) => {
                return (
                  <option key={ele.id} value={ele.title}>
                    {ele.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col items-start justify-between w-full m-auto mb-8 md:flex-row">
            <input
              type="date"
              className="w-full md:w-[45%] placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 text-[#545456] mb-8 md:mb-0"
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              value={dates.firstDate}
              onChange={(e) => {
                setDates({...dates, firstDate: e.target.value})
              }}
            />
            <input
              type="date"
              className="w-full md:w-[45%] placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 text-[#545456]"
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              value={dates.lastDate}
              onChange={(e) => {
                setDates({...dates, lastDate: e.target.value})
              }}
            />
          </div>
          <div className="w-full m-auto mb-8">
            <input
              type="number"
              className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 "
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              placeholder="No. of Adults*"
              value={guestsNumber.adults}
              onChange={(e) => {
                setGuestsNumber({...guestsNumber, adults: Number(e.target.value)})
              }}
              min={1}
            />
          </div>
          <div className="w-full m-auto mb-8">
            <input
              type="number"
              className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 "
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              placeholder="No. of Children (5-12 yrs)*"
              value={guestsNumber.children}
              onChange={(e) => {
                setGuestsNumber({...guestsNumber, children: Number(e.target.value)})
              }}
              min={1}
            />
          </div>
          <div className="w-full m-auto mb-8">
            <input
              type="number"
              className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 "
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              placeholder="No. of Infants (<5 yrs)*"
              value={guestsNumber.infants}
              onChange={(e) => {
                setGuestsNumber({...guestsNumber, infants: Number(e.target.value)})
              }}
              min={1}
            />
          </div>
          <div className="w-full m-auto mb-8">
            <input
              type="number"
              className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 "
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              placeholder="No. of Pets*"
              value={guestsNumber.pets}
              onChange={(e) => {
                setGuestsNumber({...guestsNumber, pets: Number(e.target.value)})
              }}
              min={1}
            />
          </div>
          <div className="w-full m-auto mb-8">
            <input
              type="number"
              className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 "
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              placeholder="No. of  Accompanying Staff*"
              value={guestsNumber.staff}
              onChange={(e) => {
                setGuestsNumber({...guestsNumber, staff: Number(e.target.value)})
              }}
              min={1}
            />
          </div>
          <div className="w-full m-auto mb-8">
            <input
              type="text"
              className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 "
              style={{ borderBottom: "0.5px solid #c5c5cc" }}
              placeholder="Special Request"
              value={specialRequest}
              onChange={(e) =>{
                setSpecialRequest(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="w-full m-auto mb-8">
            <input type="submit" 
            className="w-full placeholder-[#545456] text-sm border-none outline-none focus:ring-0 pl-4 pr-4 pt-3 pb-3 bg-[#8A1E61] text-white cursor-pointer hover:text-[#8A1E61] hover:bg-[#F8F8F9] ease-in-out duration-500"
            onClick={handleFormSubmit}
            />
        </div>
      </form>
    </div>
  );
};

export default InquiryForm;
