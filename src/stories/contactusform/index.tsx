import React, { useState } from 'react'
import PrimaryButton from '../PrimaryButton';
import { Ierros } from './types';

function Contactform({ onSubmit }) {
    const initialState = {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        message: '',
        intrested: "",
        newsletter: ""
    };
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({} as Ierros);
    function handleChange(event) {
        const eventData = event.target;
        let eventValue = eventData.name === "newsletter" ? eventData.checked : eventData.value
        setData((prevdata) => {
            return {
                ...prevdata,
                [eventData.name]: eventValue
            };
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = validate(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            onSubmit(data);
        }
    }


    function validate(values) {
        const errors: Ierros = {
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: '',
            message: '',
        };
        if (!values.firstname) {
            errors.firstname = 'First name is required';
        }
        if (!values.lastname) {
            errors.lastname = 'Last name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(values.email)) {
            errors.email = 'Email is not valid';
        }
        if (!values.phonenumber) {
            errors.phonenumber = 'Phone number is required';
        } else if (values.phonenumber.length < 10) {
            errors.phonenumber = 'Phone number must be at least 10 digits long';
        }

        return errors;
    }


    const options = ["Rent", "Career", "Partner as Homeowner", "Other"]


    return (
        <div className='w-full flex items-start justify-center flex-col  px-5  py-10 sm:px-[80px] sm:pt-[5rem] sm:pb-[4rem] sm:pl-[109px]   bg-[#F8F8F9] ' >
            <h4 className=' text-sm uppercase   pb-5 text-[#8A1E61] font-bold tracking-[4.2px]' >have something in mind</h4>
            <p className='font-centaur uppercase font-normal text-5xl tracking-wider sm:pb-20 pb-5' >Just write us a message</p>
            <form className='w-full  lg:max-w-[550px]  bg-white' onSubmit={handleSubmit} >
                <div className=" bg-white p-8 ">
                    <div className='w-full'>
                        <input
                            className='border-0  border-b-[1px]  border-[#7b808433] outline-none w-full pt-4 '
                            type="text"
                            name="firstname"
                            placeholder="First Name*"
                            onChange={handleChange}
                            value={data.firstname}
                        />
                        {errors.firstname && (
                            <span className="text-red-500 text-xs">{errors.firstname}</span>
                        )}
                    </div>
                    <div className='w-full'>
                        <input
                            className='border-0  border-b-[1px]  border-[#7b808433] outline-none w-full pt-4 mt-[2rem]'
                            type="text"
                            name="lastname"
                            placeholder="Last Name*"
                            onChange={handleChange}
                            value={data.lastname}
                        />
                        {errors.lastname && (
                            <span className="text-red-500 text-xs">{errors.lastname}</span>
                        )}
                    </div>
                    <div className='w-full'>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            onChange={handleChange}
                            value={data.email}
                            className='border-0  border-b-[1px]  border-[#7b808433] outline-none w-full mt-[2rem]' />
                        {errors.email && (
                            <span className="text-red-500 text-xs">{errors.email}</span>
                        )}
                    </div>
                    <div className='w-full'>
                        <input
                            className="border-0 w-full border-b-[1px]  border-[#7b808433] outline-none pt-4 mt-[2rem]"
                            type="number"
                            name="phonenumber"
                            placeholder="Phone*"
                            onChange={handleChange}
                            value={data.phonenumber}

                        />
                        {errors.phonenumber && (
                            <span className="text-red-500 text-xs">{errors.phonenumber}</span>
                        )}
                    </div>

                    <div className='w-full'>
                        <select
                            className="border-0 w-full border-b-[1px]  border-[#7b808433] outline-none pt-4 mt-[2rem]"
                            name="intrested"
                            onChange={handleChange}
                            value={data.intrested}

                        >
                            <option selected >intrested in</option>
                            {options.map((value) => {
                                return <option key={value} >{value}</option>
                            })}

                        </select>
                    </div>
                    <div className='w-full '>
                        <textarea
                            className='border-0  border-b-[1px] border-[#7b808433] outline-none w-full h-[218px] resize-none pt-4 mt-[2rem]'
                            placeholder='MESSAGE'
                            name='message'
                            onChange={handleChange}
                            value={data.message}
                        />
                    </div>
                    <div className='w-full '>
                        <input type="checkbox"
                            onChange={handleChange}
                            id='newsletter' name='newsletter' />
                        <label className='pl-4' id="newsletter" htmlFor='newsletter' >Join our newsletter for exclusive updates.</label>
                    </div>

                    <PrimaryButton
                        title={"SUBMIT"}
                        onClick={() => { }}
                        className="mt-8  w-full flex justify-center"
                    />
                </div>



            </form>
        </div>
    )
}

export default Contactform