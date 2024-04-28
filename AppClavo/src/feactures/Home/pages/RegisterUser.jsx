import { Form, Input, InputNumber } from "antd";
import { React } from "react";
import { Controller, useForm } from "react-hook-form";
import { CheckboxForm, DatePickerForm, InputForm, InputNumberForm, SelectForm } from "../components/Forms";

const RegisterUser = () => {
  const methods = useForm();
  const style ={
    backgroundColor: "#f2f2f2",
    padding: "10px",
    borderRadius: "10px",
    width: "50%",
    textAlign: "center",
    color: "black",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: "10px",
    textAlign: "center",
  }
  const styleFont = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  } 

return (
    <div style={{ display: "flex" , gap:'30px'}}>
        {/* Personal Data */}
        <div style={style}>
            <p style={styleFont}>Información personal</p>
            <InputForm
                name="firstName"
                ruler={{ required: true, message: "First Name is required" }}
                control={methods.control}
                label="Nombres"
                labelCol={{ span: 24 }}
                placeholder="First Name"
            />
            <InputForm
                name="lastName"
                ruler={{ required: true, message: "Last Name is required" }}
                control={methods.control}
                label="Apellidos"
                labelCol={{ span: 24 }}
                placeholder="Last Name"
            />
            <InputForm
                name ="cedula"
                ruler={{ required: true, message: "Cedula is required" }}
                control={methods.control}
                label="Cedula"
                labelCol={{ span: 24 }}
                placeholder="Cedula"
            />

            <InputForm
                name="adress"
                ruler={{ required: true, message: "Email is required" }}
                control={methods.control}
                label="dirección"
                labelCol={{ span: 24 }}
                placeholder="direccion"
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

        {/* Loan Information */}
        <div style={style}>
            <p style={styleFont}>Data credito</p>
            <InputNumberForm
                name="credit"
                ruler={{ required: true, message: "Campo requerido" }}
                control={methods.control}
                label="Monto a prestar"
                labelCol={{ span: 24 }}
                placeholder="Monto a prestar"
            />
            <InputNumberForm
                name="porcentajeInteres"
                ruler={{ required: true, message: "Campo requerido" }}
                control={methods.control}
                label="Porcentaje de interes"
                labelCol={{ span: 24 }}
                placeholder="Porcentaje de interes"
            />
            <DatePickerForm
                name="fechaPrestamo"
                ruler={{ required: true, message: "Campo requerido" }}
                control={methods.control}
                label="Fecha de prestamo"
                labelCol={{ span: 24 }}
                placeholder="Fecha de prestamo"
            />
            <SelectForm
                name="frecuenciaPagos"
                ruler={{ required: true, message: "Campo requerido" }}
                control={methods.control}
                label="Frecuencia de pagos"
                labelCol={{ span: 24 }}
                placeholder="Frecuencia de pagos"
                options={[
                    { value: "diario", label: "Diario" },
                    { value: "semanal", label: "Semanal" },
                    { value: "quincenal", label: "Quincenal" },
                    { value: "mensual", label: "Mensual" },
                ]}
            />
            <CheckboxForm
                name="seguro"
                label= "Descontar seguro"
                control={methods.control}
            />

            {
                methods.watch("seguro") && (
                    <InputNumberForm
                        name="valorSeguro"
                        ruler={{ required: true, message: "Campo requerido" }}
                        control={methods.control}
                        label="Valor seguro"
                        labelCol={{ span: 24 }}
                        placeholder="Valor seguro"
                    />
                )
            }

        </div>

        
        <div style={style}>
            <p style={styleFont}>Resumen del credito </p>
            <p>Nombre completo: {methods.watch("firstName")} {methods.watch("lastName")}</p>
            <p>Cantidad prestada: {methods.watch("credit")}</p>
            <p>Cantidad a entregar al usuario: $SELECTION_PLACEHOLDER$</p>
            <p>Fecha de entrega: $SELECTION_PLACEHOLDER$</p>
            <p>Fechas de pago: $SELECTION_PLACEHOLDER$</p>
        </div>
    </div>
);
};

export default RegisterUser;
