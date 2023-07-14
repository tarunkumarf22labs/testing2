import React, { useState } from 'react'
import { Button } from '../Button'

interface Ierros { 
    firstname : string ,
    lastname  : string ,
    email     : string ,
    phonenumber : string,

}

function BookingForm({ onSubmit }) {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    refferedby: "",
  };

  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState<Ierros>({} as Ierros ) ;

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(data);
    }
  }

  function handleChange(event) {
    const eventData = event.target;
    setData((prevdata) => {
      return {
        ...prevdata,
        [eventData.name]: eventData.value,
      };
    });

    if (errors[eventData.name]) {
      setErrors({ ...errors, [eventData.name]: "" });
    }
  }

  function validate(values) {
    const errors : Ierros = {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: ''
    };
    if (!values.firstname) {
      errors.firstname = "First name is required";
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Email is not valid";
    }
    if (!values.phonenumber) {
      errors.phonenumber = "Phone number is required";
    } else if (values.phonenumber.length < 10) {
      errors.phonenumber = "Phone number must be at least 10 digits long";
    }
    return errors;
  }

  return (
    <div className="w-full h-full  xl:w-[792px] md:h-[445px] bg-white p-8 ">
      <div className="text-pantonepink text-sm ">02</div>
      <div className="uppercase -tracking-[0.74px] text-2xl pb-8 font-light pt-1 ">
        Contact Details
      </div>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-10 ">
         <div className='grid  grid-cols-1  md:grid-cols-2 gap-8' >
        <div className = "w-full" >
        <input
          className="border-0  border-b-[1px] outline-none w-full "
          type="text"
          name="firstname"
          placeholder="First Name *"
          required
          onChange={handleChange}
          value={data.firstname}
        />
        {errors.firstname && (
          <span className="text-red-500 text-xs">{errors.firstname}</span>
        )}
        </div>

        <div className = "w-full" >
        <input
          className="border-0  border-b-[1px] outline-none w-full "
          type="text"
          name="lastname"
          placeholder="Last Name *"
          required
          onChange={handleChange}
          value={data.lastname}
        />
        {errors.lastname && (
          <span className="text-red-500 text-xs">{errors.lastname}</span>
        )}
        </div>
      <div className = "w-full" >
      <input
          className="border-0  border-b-[1px] outline-none w-full "
          type="email"
          name="email"
          placeholder="Email ID *"
          required
          onChange={handleChange}
          value={data.email}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email}</span>
        )}
      </div>
       <div className = "w-full" >
       <input
          className="border-0 w-full border-b-[1px] outline-none "
          type="number"
          name="phonenumber"
          placeholder="PHONE NUMBER *"
          required
          onChange={handleChange}
          value={data.phonenumber}
        />
        {errors.phonenumber && (
          <span className="text-red-500 text-xs">{errors.phonenumber}</span>
        )}
       </div>
     <div className = "w-full" >

     <input
          className="border-0 w-full  border-b-[1px] outline-none "
          type="text"
          name="refferedby"
          placeholder="Referred by"
          onChange={handleChange}
          value={data.refferedby}
        />
     </div>
     </div>
        <button
          className="w-full  bg-[#8A1E61] text-white  text-xs p-2 mt-8 "
          type="submit"
        >
          CONTINUE
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
