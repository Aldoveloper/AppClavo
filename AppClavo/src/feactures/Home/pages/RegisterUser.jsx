import { Form, Input, InputNumber } from "antd";
import { React } from "react";
import { Controller, useForm } from "react-hook-form";
import { InputForm, InputNumberForm } from "../components/Forms";

const RegisterUser = () => {
  const methods = useForm();
  return (
    <div>
      <InputForm
        name="firstName"
        ruler={{ required: true, message: "First Name is required" }}
        control={methods.control}
        label="First Name"
        labelCol={{ span: 24 }} 
        placeholder="First Name"

      />
        <InputForm
            name="lastName"
            ruler={{ required: true, message: "Last Name is required" }}
            control={methods.control}
            label="Last Name"
            labelCol={{ span: 24 }} 
            placeholder="Last Name"
            />
            <InputForm
            name="email"
            ruler={{ required: true, message: "Email is required" }}
            control={methods.control}
            label="Email"
            labelCol={{ span: 24 }}
            placeholder="Email"
            />
            <InputNumberForm
            name="phone"
            ruler={{ required: true, message: "Phone is required" }}
            control={methods.control}
            label="Phone"
            labelCol={{ span: 24 }}
            placeholder="Phone"
            />
            
    </div>
  );
};

export default RegisterUser;
