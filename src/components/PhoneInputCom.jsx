import {useState} from 'react'
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";

const PhoneInputCom = () => {
    const [phone, setPhone] = useState("");

    let handleOnChange = value => {
        setPhone(value);
      };
    
      let handleOnChangephone = e => {
        setPhone(e.target.value);
      };
    
  return (
    <div>
         <PhoneInput
        name="multipleErrorInput4"
        autoCorrect="off"
        placeholder="Enter a Valid Phone Number"
        country={"eg"}
        value={phone}
        onChange={handleOnChange}
      />

      <input
        style={{ display: "none" }}
        placeholder="Enter a Valid Phone Number"
        autoCorrect="off"
        id="multipleErrorInput4"
        name="multipleErrorInput4"
        
        value={phone}
        onChange={handleOnChangephone}
      />

     

    </div>
  )
}

export default PhoneInputCom