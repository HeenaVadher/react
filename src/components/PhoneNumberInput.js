'use client'

import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import '../app/commingSoon/global.css';
import '../app/login/login.css'


const PhoneNumberInput = () => {
  const [value, setValue] = useState("");
  return (
   
    <>
     
      <PhoneInput
                masks={{ us: ' (...) ..-..-..', in: ' (....) ...-....' }}
                placeholder="Phone Number"
                value={value}
                onChange={(phoneNumber) => setValue(phoneNumber)}
                country={'us'}
                enableSearch
                buttonStyle={{
                  width: 40,
                  marginTop:-12,
                  height: 50,
                  borderRadius: '100px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  //  marginLeft: 0,
                }}
                inputStyle={{
                  width: "100%",
                  height:30,
                  display: 'flex',
                  justifyItems: 'center',alignItems:'center', 
                  backgroundColor: 'transparent',
                  fontSize: '14px', 
                  border: 'none'
                }}
                dropdownStyle={{
                  
                  width: '260px',
                  padding: '10px',
                  borderRadius: '20px',
                  backgroundColor: '#F8F8F8',
                }}
              />
    </>
  );
};

export default PhoneNumberInput;
