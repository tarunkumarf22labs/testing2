import React, { useEffect, useState } from "react";
import Image from "next/image";
import ToastAlert from "src/Toast";
import { isValidPhoneNumber } from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import NetWrapper from "src/Network/netWrapper";

const ContactDetails = () => {
  const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i;
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [address, setAddress] = useState('');
  const [textAreaMessage, seTextAreaMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ValidPhoneNumber, setValidPhoneNumber] = useState(true);
  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  });

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
    console.log(newEmail);
  };

  const handleBlur = () => {
    if (email === '') {
      setIsValidEmail(true);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          print(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  function print(lat, lng) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          const result = data.results[0];
          const addressComponents = result.address_components;
          let countryName = '';
          let stateName = '';
          let cityName = '';

          for (let i = 0; i < addressComponents.length; i++) {
            const types = addressComponents[i].types;
            if (!countryName && types.includes('country')) {
              countryName = addressComponents[i].long_name;
            } else if (
              !stateName &&
              types.includes('administrative_area_level_1')
            ) {
              stateName = addressComponents[i].long_name;
            } else if (
              !cityName &&
              (types.includes('locality') || types.includes('postal_town'))
            ) {
              cityName = addressComponents[i].long_name;
            }
            if (countryName && stateName && cityName) {
              break;
            }
          }
          setAddress(`${cityName}, ${stateName}, ${countryName}`);
        } else {
          console.log('Error:', data.status);
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (file) {
      if (file.size <= 5 * 1024 * 1024) {
        console.log('File uploaded successfully:', file);
      } else {
        ToastAlert('File size exceeds the limit (5MB)', 'warn');
        event.target.value = null;
      }
    }
  };

  const validateNumber = (phoneNumber) => {
    setValidPhoneNumber(isValidPhoneNumber(`+${phoneNumber}`));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phoneNumber.length);
    if (!name.firstName) {
      ToastAlert("Please Enter First Name", "warn");
      return;
    } else if (!name.lastName) {
      ToastAlert("Please Enter Last Name", "warn");
      return;
    } else if (phoneNumber.length < 3 || !ValidPhoneNumber) {
      ToastAlert("Please Enter a Valid Mobile Number", "warn");
      return;
    } else if (!email) {
      ToastAlert("Please Enter a Valid Email", "warn");
      return;
    } else if (!address) {
      ToastAlert("Please Enter your address", "warn");
      return;
    }

    let body = {
      data: {
        firstName: name.firstName,
        lastName: name.lastName,
        email: email,
        phone: phoneNumber,
        location: address,
        message: textAreaMessage,
      },
    };
    submitData(body);
  };
  console.log(ValidPhoneNumber);

  const submitData = async (body) => {
    try {
      const { data, error, status } = await NetWrapper("api/homeownerforms", {
        method: "POST",
        body: JSON.stringify(body),
      });
      console.log(status);
      if(error){
        ToastAlert("something went wrong in sending Data", "warn")
      }else{
        ToastAlert("Form Submitted Successfully", "success");
        setName({
          firstName: "",
          lastName: "",
        });
        setEmail('');
        setPhoneNumber("");
        setAddress('');
        seTextAreaMessage("")
      }
    } catch (error) {
      console.log(error)
    }

  };
  return (
    <div className=" bg-[#F8F8F9] sm:max-w-lg m-auto">
      <div className="pt-14 h-28 sm:w-[85%] sm:m-auto">
        <h1 className="text-center sm:text-left text-[#18181B] uppercase leading-10 text-4xl sm:text-2xl font-light">
          Contact Details
        </h1>
      </div>
      <div className="text-center sm:text-left text-[#545456] text-lg font-[Centaur] font-normal  pt-15 pr-15 pl-5 pr-5 mb-10 sm:w-[85%] sm:m-auto sm:pl-0 sm:pr-0">
        {
          'Accor, a global hotel company, has set an ambitious goal to become the first hotel company to enable owners to onboard a hotel in 24 hours. The company recognizes the challenges of the traditional onboarding process.'
        }
      </div>
      <form action="" className="w-11/12 m-auto ">
        <div className="p-6 sm:flex sm:justify-between sm:items-center ">
          <input
            type="text"
            className="w-full placeholder-[#545456] text-xs sm:w-[45%] border-none outline-none focus:ring-0 bg-[#F8F8F9]"
            style={{ borderBottom: '1px solid #545456' }}
            placeholder="First Name"
            value={name.firstName}
            onChange={(e) => {
              setName({ ...name, firstName: e.target.value });
            }}
          />
          <input
            type="text"
            className="w-full placeholder-[#545456] mt-12 text-xs sm:w-[45%] sm:mt-0 border-none outline-none focus:ring-0  bg-[#F8F8F9]"
            style={{ borderBottom: '1px solid #545456' }}
            placeholder="last Name"
            value={name.lastName}
            onChange={(e) => {
              setName({ ...name, lastName: e.target.value });
            }}
          />
        </div>
        <div className="p-6 sm:flex sm:justify-between sm:items-center">
          <div className="w-full placeholder-[#545456] sm:w-[45%] text-xs border-none outline-none focus:ring-0 bg-[#F8F8F9]">
            <PhoneInput
              country={'in'}
              value={phoneNumber}
              onChange={(value) => {
                setPhoneNumber(value);
                validateNumber(value);
              }}
              inputStyle={{
                width: '100%',
                border: 'none',
                backgroundColor: '#F8F8F9',
                borderBottom: '1px solid #545456',
                borderRadius: '0px'
              }}
            />
          </div>
          {!ValidPhoneNumber && (
            <p className="mt-0 ml-2 -mb-6 text-xs text-left text-red-500 sm:hidden ">
              {' Please Enter a Valid Mobile Number'}
            </p>
          )}
          <input
            type="email"
            className="w-full placeholder-[#545456] text-xs mt-12 sm:mt-0 sm:w-[45%] border-none outline-none focus:ring-0 bg-[#F8F8F9]"
            style={{ borderBottom: '1px solid #545456' }}
            placeholder="Email Address"
            onChange={handleEmailChange}
            onBlur={handleBlur}
          />
        </div>
        {(!isValidEmail || !ValidPhoneNumber) && (
          <div className="p-6 -mt-12 sm:flex sm:justify-between sm:items-center">
            <div className="hidden sm:block  w-full sm:w-[45%]">
              <p className="ml-2 text-xs text-left text-red-500">
                {!ValidPhoneNumber && ' Please Enter a Valid Mobile Number'}
              </p>
            </div>
            <div className="w-full sm:w-[45%]">
              <p className="ml-1 text-xs text-left text-red-500">
                {!isValidEmail && 'Please Enter a Valid Email'}
              </p>
            </div>
          </div>
        )}

        <div
          className="flex items-center justify-center w-[90%] sm:w-[91.26%] pt-6 pb-0 m-auto"
          style={{ borderBottom: '1px solid #545456' }}
        >
          <input
            type="text"
            className="w-11/12 placeholder-[#545456] text-xs border-none outline-none focus:ring-0 bg-[#F8F8F9]"
            placeholder="Location"
            value={address}
          />
          <div className="w-1/12 h-full cursor-pointer" onClick={getLocation}>
            <Image
              src={'./images/location.svg'}
              alt="location-logo"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
        <div
          className="flex items-center justify-center w-[90%] sm:w-[91.26%] pt-6 pb-0 m-auto mb-6 mt-6"
          style={{ borderBottom: '1px solid #545456' }}
        >
          <input
            className="w-11/12 border-none outline-none custom-file-input focus:ring-0 bg-[#F8F8F9]"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
          />
          <div className="w-1/12 h-full">
            <Image
              src={'./images/upload.svg'}
              alt="location-logo"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="p-6">
          <textarea
            name="postContent"
            className="w-full placeholder-[#545456] text-xs h-52 border-none outline-none focus:ring-0 bg-[#F8F8F9]"
            style={{ borderBottom: '1px solid #545456' }}
            placeholder="Your Message..."
            maxLength={500}
            value={textAreaMessage}
            onChange={(e) => {
              seTextAreaMessage(e.target.value);
            }}
          />
          {textAreaMessage.length >= 20 && (
            <p className="hidden mt-0 mb-8 ml-2 text-xs text-left text-red-500 sm:w-full sm:block">
              {textAreaMessage.length === 30 &&
                `only 500 characters are allowed`}
            </p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#8A1E61] uppercase text-white text-xs h-10 font-bold mb-6 w-11/12 ml-[4.5%]"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactDetails;
