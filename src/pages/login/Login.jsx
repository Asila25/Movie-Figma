import React from "react";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/google.svg";

const Login = () => {
  return (

    <div className="text-white flex flex-col items-center justify-center text-center mx-auto px-6 py-12 gap-4 ">
      <h2 className="text-white text-[32px] font-semibold mb-4">Регистрация</h2>
      <p className="w-[380px] text-[#777777] font-normal text-base leading-6 tracking-[0.01em] text-center">
        Введите номер телефона для того чтобы войти или пройти регистрацию
      </p>
      <input
        type="text"
        placeholder="+998 88 800-90-00"
        className="w-[380px] mb-6 px-4 py-3 rounded-md bg-[#222222] text-white placeholder-[#777777] border border-transparent focus:outline-none focus:border-red-600"
      />
      <button className="w-[380px] bg-[#C61F1F] hover:bg-red-600 text-white py-[16px] px-[140px] rounded-[12px] font-[16] mb-6  ">
        Регистрация
      </button>
      <p className="text-[#777777] text-center mb-6">или</p>
      <div className="flex justify-center gap-3">
        <button className="flex items-center gap-1 justify-center  bg-[#222222] rounded-md hover:bg-[#db4437] transition-colors p-2.5">
          <img src={facebook} alt="facebook" className="w-6 h-6" />
          <p>Facebook</p>
        </button>
        <button className="flex items-center gap-1 justify-center bg-[#222222]  rounded-md hover:bg-[#db4437] transition-colors p-2.5">
          <img src={google} alt="google" className="w-6 h-6" />
          <p>Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
