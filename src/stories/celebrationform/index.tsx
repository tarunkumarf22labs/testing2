import React, { useState } from 'react'
import PrimaryButton from '../PrimaryButton';
import { Ierros, Iinitial } from './types';

function CelebrationForm({ onSubmit }) {


    const initialState = {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        message: ''
    };
    
    const [data, setData] = useState<Iinitial>(initialState);
    const [errors, setErrors] = useState({} as Ierros);
    function handleChange(event) {
        const eventData = event.target;
        setData((prevdata) => {
            return {
                ...prevdata,
                [eventData.name]: eventData.value
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
            message: ''
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
        if (!values.message) {
            errors.message = 'message is required'
        }
        return errors;
    }
    return (
        <div className='bg-white' >
            <form className='w-full  p-2 lg:max-w-[550px] sm:p-6 bg-white' onSubmit={handleSubmit} >
                <h4 className='pb-2 text-2xl uppercase tracking-wider font-light' >Need any Help?</h4>
                <p className='pb-8 font-centaur text-base font-normal' >Accor, a global hotel company, has set an ambitious goal to become the first hotel company to enable owners to onboard a hotel in 24 hours. The company recognizes the challenges of the traditional onboarding process.</p>
                <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='w-full'>
                        <input
                            className='border-0  border-b-[1px] outline-none w-full'
                            type="text"
                            name="firstname"
                            placeholder="First Name *"
                            onChange={handleChange}
                            value={data.firstname}
                        />
                        {errors.firstname && (
                            <span className="text-red-500 text-xs">{errors.firstname}</span>
                        )}
                    </div>
                    <div className='w-full'>
                        <input
                            className='border-0  border-b-[1px] outline-none w-full'
                            type="text"
                            name="lastname"
                            placeholder="Last Name *"
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
                            placeholder="Email ID *"
                            onChange={handleChange}
                            value={data.email}
                            className='border-0  border-b-[1px] outline-none w-full' />
                        {errors.email && (
                            <span className="text-red-500 text-xs">{errors.email}</span>
                        )}
                    </div>
                    <div className='w-full'>
                        <input
                            className="border-0 w-full border-b-[1px] outline-none "
                            type="number"
                            name="phonenumber"
                            placeholder="PHONE NUMBER *"
                            onChange={handleChange}
                            value={data.phonenumber}

                        />
                        {errors.phonenumber && (
                            <span className="text-red-500 text-xs">{errors.phonenumber}</span>
                        )}
                    </div>
                    <div className='w-full md:col-[1/3]'>
                        <textarea
                            className='border-0  border-b-[1px] outline-none w-full h-[218px] resize-none'
                            placeholder='Your MESSAGE*'
                            name='message'
                            onChange={handleChange}
                            value={data.message}
                        />
                        {errors.message && (
                            <span className="text-red-500 text-xs">{errors.message}</span>
                        )}
                    </div>


                </div>
                <PrimaryButton
                    title={"CONTACT US"}
                    onClick={() => { }}
                    className="mt-8  w-full flex justify-center"
                />
            </form>
        </div>
    )
}

export default CelebrationForm