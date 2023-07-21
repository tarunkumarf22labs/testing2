import ReCAPTCHA from 'react-google-recaptcha';
import React, { useContext, useEffect, useRef, useState } from 'react';
import HeaderLogo from './HeaderLogo';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { isValidPhoneNumber } from 'libphonenumber-js';
import ToastAlert from 'src/Toast';
import NetWrapper from 'src/Network/netWrapper';
import { AppContext } from 'src/Context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ArrowLeft } from '@phosphor-icons/react';

const Login = () => {
  const [slide, setSlide] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [code, setCode] = useState('');
  const { setShowLoginPopup, showLoginPopup } = useContext(AppContext);
  return (
    <div className="fixed left-0 w-full overflow-auto h-[100vh] top-40 ease-in-out z-[500] rounded-3xl">
      <div
        className="fixed top-0 left-0 w-full h-screen -z-[10]"
        style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
        onClick={() => {
          setShowLoginPopup(!showLoginPopup);
        }}
      ></div>
      <div className="w-[90%] sm:w-[450px] m-auto  items-center justify-between overflow-hidden border-2 rounded-md shadow-lg bg-white z-50">
        <div
          className="w-[200%] m-auto flex items-center justify-between overflow-hidden relative"
          style={{
            transform: slide && 'translateX(-50%)',
            transition: slide && '1s'
          }}
          id="login-container"
        >
          <div className="w-[100%] h-full relative">
            <button
              className="absolute top-3 right-[5%]"
              onClick={() => setShowLoginPopup(false)}
            >
              <XMarkIcon className="w-7 h-7" />
            </button>
            <FirstChild
              setSlide={setSlide}
              slide={slide}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
              code={code}
              setCode={setCode}
            />
          </div>
          <div className="w-[100%] h-full relative">
            <button
              className="absolute -top-8 right-[5%]"
              onClick={() => setShowLoginPopup(false)}
            >
              <XMarkIcon className="w-7 h-7" />
            </button>
            {slide && (
              <SecondChild
                code={code}
                setCode={setCode}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                countryCode={countryCode}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

function FirstChild({
  setSlide,
  slide,
  phoneNumber,
  setPhoneNumber,
  countryCode,
  setCountryCode,
  code,
  setCode
}) {
  const captchaRef = useRef(null);
  const [ValidPhoneNumber, setValidPhoneNumber] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captchaResponse = captchaRef.current.getValue();
    // Perform your validation and submit logic here

    if (!ValidPhoneNumber) {
      ToastAlert('Please Enter a Valid Phone Number', 'warning');
      return;
    }

    try {
      const { data, error, status } = await NetWrapper('api/sendotp', {
        method: 'POST',
        body: JSON.stringify({
          countryCode,
          phone: phoneNumber.substring(countryCode?.length),
          captcha: captchaResponse
        })
      });

      console.log(error);

      if (error) {
        ToastAlert(error, 'error');
      } else {
        //@ts-ignore
        setCode(data.token);
        setSlide(!slide);
      }
      console.log(data, error, status);
    } catch (error) {}
  };

  const validateNumber = (phoneNumber) => {
    setValidPhoneNumber(isValidPhoneNumber(`+${phoneNumber}`));
  };

  console.log(ValidPhoneNumber);

  return (
    <div className="p-2 sm:p-10">
      <div className="flex items-center justify-center m-auto">
        <HeaderLogo logoUrl="/images/logo_primary.svg" />
      </div>
      <p className="text-[#8A1E61] text-xs font-bold mt-16 text-center">
        LOG IN
      </p>
      <p className="text-[#1C1917] text-4xl uppercase mt-1 text-center">
        WELCOME
      </p>
      <p className="text-[#545456] text-xl font-[Centaur] text-center">
        Please Login to avail exclusive benefits.
      </p>

      <div className="w-4/5 m-auto sm:w-full placeholder-[#545456] text-xs border-none outline-none focus:ring-0 bg-[#F8F8F9] mt-16">
        <PhoneInput
          country={'in'}
          value={phoneNumber}
          onChange={(value, val) => {
            setPhoneNumber(value);
            validateNumber(value);
            //@ts-ignore
            setCountryCode(val.dialCode);
            // dialCode
          }}
          inputStyle={{
            width: '100%',
            background: 'none',
            backgroundColor: 'white',
            border: 'none',
            borderBottom: '1px solid black',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px'
          }}
        />

        <div className="flex items-center justify-center mt-4 mb-4 bg-white">
          {/* Replace the `data-sitekey` with your actual reCAPTCHA site key */}
          <ReCAPTCHA
            className="m-auto"
            sitekey={process.env.NEXT_PUBLIC_API_RECAPTCHA_KEY}
            ref={captchaRef}
          ></ReCAPTCHA>
        </div>

        <button
          className={`text-xs text-white bg-[#8A1E61] w-full font-bold mt-8 pt-4 pb-4 ${
            (!ValidPhoneNumber || phoneNumber.length < 4) &&
            'opacity-[0.2] pointer-events-none'
          }`}
          onClick={handleSubmit}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}

function SecondChild({
  code,
  setCode,
  phoneNumber,
  setPhoneNumber,
  countryCode
}) {
  const [otp, setOtp] = useState('');
  const inputRefs = useRef([]);
  const [seconds, setSeconds] = useState(60);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const { showLoginPopup, setShowLoginPopup } = useContext(AppContext);
  const captchaRef = useRef(null);

  const submitOtp = async (e) => {
    e.preventDefault();
    console.log(code);
    let body = {
      otp: otp,
      token: code
    };
    try {
      const { data, error, status } = await NetWrapper('api/verification', {
        method: 'POST',
        body: JSON.stringify(body)
      });
      if (error) {
        ToastAlert(error, 'error');
      } else {
        localStorage.setItem(
          'luxunlock_login',
          //@ts-ignore
          JSON.stringify(data.token)
        );
      }
      setOtp('');
      setShowLoginPopup(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (seconds > 0) {
      const countdownInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [seconds, showCaptcha]);

  const resendOtp = async () => {
    const captchaResponse = captchaRef.current.getValue();
    // Perform your validation and submit logic here

    try {
      const { data, error, status } = await NetWrapper('api/sendotp', {
        method: 'POST',
        body: JSON.stringify({
          countryCode,
          phone: phoneNumber.substring(countryCode?.length),
          captcha: captchaResponse
        })
      });
      console.log(data, error, status);

      if (error) {
        ToastAlert(error, 'error');
      } else {
        //@ts-ignore
        setCode(data.token);
        setShowCaptcha(!showCaptcha);
        setSeconds(60);
      }
    } catch (error) {}
  };

  const numOfbox = Array(6).fill('');

  const handleInputChange = (e, index) => {
    const elem = e.target;
    const val = e.target.value;
    if (!/[0-9]{1}/.test(val) && val !== '') return;
    console.log(otp, 'otp');
    //@ts-ignore
    const valueArr = otp?.split('');
    console.log(valueArr, 'value');
    valueArr[index] = val;
    const newVal = valueArr?.join('').slice(0, 6);
    onChange(newVal);
    if (val) {
      const next = elem.nextElementSibling as HTMLInputElement | null;
      next?.focus();
    }
  };

  const onChange = (val) => {
    setOtp(val);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const val = e.clipboardData.getData('text').substring(0, 6);
    onChange(val);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const current = e.currentTarget;
    if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
      const prev = current.previousElementSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }
    if (e.key === 'ArrowRight') {
      const prev = current.nextSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }
  };
  console.log(otp);

  return (
    <div className="relative p-2 sm:p-10">
      <div
        className="absolute -top-8 left-5"
        onClick={() => {
          document.getElementById('login-container').style.transform =
            'translateX(0%)';
          document.getElementById('login-container').style.transition = '1s';
        }}
      >
        <ArrowLeft size={32} />
      </div>
      <div className="flex items-center justify-center m-auto">
        <HeaderLogo logoUrl="/images/logo_primary.svg" />
      </div>
      <p className="text-[#8A1E61] text-xs font-bold mt-16 text-center">
        LOG IN
      </p>
      <p className=" text-[#1C1917] text-4xl uppercase mt-1 text-center">
        WELCOME
      </p>
      <p className="text-[#545456] font-[Centaur] text-xl text-center">
        {phoneNumber &&
          `Please enter OTP sent to ${phoneNumber.substring(
            countryCode?.length
          )}`}
      </p>
      <div className="mt-12 m-full">
        <div className="flex justify-between w-full gap-4 m-auto">
          {numOfbox.map((digit, index) => (
            <input
              key={index + digit}
              type="text"
              pattern={'/[0-9]{1}/'}
              className="w-8 sm:w-12 h-12 text-center border-none focus:outline-none focus:ring focus:border-blue-300 border-[#7B8084] text-[#8A1E61] "
              value={otp.at(index) ?? ''}
              onChange={(e) => handleInputChange(e, index)}
              onKeyUp={handleKeyUp}
              maxLength={6}
              onPaste={handlePaste}
              style={{
                borderBottom: '1px solid black',
                borderColor: '#7B8084',
                color: '#8A1E61'
              }}
            />
          ))}
        </div>
        <p className="text-right">
          00:{seconds < 10 ? `0${seconds}` : seconds}
          <span
            className={`text-[#8A1E61] text-xs font-bold ${
              seconds !== 0 &&
              'pointer-events-none text-opacity-[0.3] text-[#8A1E61]'
            } cursor-pointer`}
            onClick={() => setShowCaptcha(!showCaptcha)}
          >
            {' '}
            RESEND OTP
          </span>
        </p>
        {showCaptcha && (
          <div className="flex items-center justify-center mt-4 mb-4 bg-white">
            {/* Replace the `data-sitekey` with your actual reCAPTCHA site key */}
            <ReCAPTCHA
              className="m-auto "
              sitekey={process.env.NEXT_PUBLIC_API_RECAPTCHA_KEY}
              ref={captchaRef}
              onChange={resendOtp}
            ></ReCAPTCHA>
          </div>
        )}
        <button
          className="text-xs text-white bg-[#8A1E61] w-full font-bold mt-8 pt-4 pb-4"
          onClick={submitOtp}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}

// 7077114742
