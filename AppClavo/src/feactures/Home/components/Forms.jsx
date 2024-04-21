import { Controller } from "react-hook-form";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
} from "antd";
export const InputForm = (props) => {
  return (
    <Controller
      {...props}
      control={props.control}
      name={props.name}
      rules={{ ...props.rules }}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <>
            <Form.Item
            labelCol={props.labelCol}
              help={error?.message}
              validateStatus={error ? "error" : ""}
              label={props.label}
              style={{ textAlign: "left" }}
            >
              <Input
                hidden={props.hidden || false}
                style={props.style}
                value={value}
                disabled={props.disabled}
                readOnly={props.readOnly}
                placeholder={props.placeholder}
                onChange={(e) => {
                  if (props.onChange) {
                    props.onChange(e);
                  }
                  onChange(e);
                }}
              />
            </Form.Item>
          </>
        );
      }}
    />
  );
};

export const InputNumberForm = (props) => {
    return (
      <Controller
        {...props}
        control={props.control}
        name={props.name}
        rules={{ ...props.rules }}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <>
              <Form.Item
              labelCol={props.labelCol}
                help={error?.message}
                validateStatus={error ? "error" : ""}
                label={props.label}
                style={{ textAlign: "left" }}
              >
                <InputNumber
                  disabled={props.disabled}
                  hidden={props.hidden || false}
                  style={props.style}
                  value={value}
                  placeholder={props.placeholder}
                  onChange={(e) => {
                    if (props.onChange) {
                      props.onChange(e);
                    }
                    onChange(e);
                  }}
                />
              </Form.Item>
            </>
          );
        }}
      />
    );
  };

  export const CheckboxForm = (props) => {
    return (
      <Controller
        {...props}
        control={props.control}
        name={props.name}
        rules={{ ...props.rules }}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <>
              <Form.Item
                required={props.required}
                help={error?.message}
                validateStatus={error ? "error" : ""}
                label={props.label}
              >
                <Checkbox
                  style={props.style}
                  hidden={props.hidden || false}
                  checked={value}
                  onChange={(e) => {
                    if (props.onChange) {
                      props.onChange(e);
                    }
                    onChange(e);
                  }}
                />
              </Form.Item>
            </>
          );
        }}
      />
    );
  };

  export const SwitchForm = (props) => {
    return (
      <Controller
        {...props}
        control={props.control}
        name={props.name}
        rules={{ ...props.rules }}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <>
              <Form.Item
                help={error?.message}
                validateStatus={error ? "error" : ""}
                label={props.label}
              >
                <label style={{ textAlign: "left" }}>{props.labelInput}</label>
                <Switch
                  style={props.style}
                  hidden={props.hidden || false}
                  valuePropName="checked"
                  checked={value}
                  onChange={(e) => {
                    if (props.onChange) {
                      props.onChange(e);
                    }
                    onChange(e);
                  }}
                />
              </Form.Item>
            </>
          );
        }}
      />
    );
  };

  export const SelectForm = (props) => {
    return (
      <Controller
        {...props}
        control={props.control}
        name={props.name}
        rules={{ ...props.rules }}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <>
              {}
              <Form.Item
                required={props.required}
                style={{ textAlign: "left" }}
                help={error?.message}
                validateStatus={error ? "error" : ""}
                label={props.label}
              >
                <Select
                  labelCol={props.labelCol}
                  placeholder={props.placeholder}
                  style={{ ...props.style }}
                  value={value}
                  onSelect={props.onSelect}
                  onChange={(e) => {
                    if (props.onChange) {
                      props.onChange(e);
                    }
                    onChange(e);
                  }}
                  showSearch={props.showSearch || false}
                  mode={props.mode}
                >
                  {props.children}
                </Select>
              </Form.Item>
            </>
          );
        }}
      />
    );
  };
  
  export const DatePickerForm = (props) => {
    return (
      <Controller
        {...props}
        control={props.control}
        name={props.name}
        rules={{ ...props.rules }}
        render={({ field: { onChange }, fieldState: { error } }) => {
          return (
            <>
              <Form.Item
                help={error?.message}
                validateStatus={error ? "error" : ""}
                label={props.label}
              >
                <DatePicker
                  style={{ ...props.style }}
                  onChange={(e) => {
                    if (props.onChange) {
                      props.onChange(e);
                    }
                    onChange(e);
                  }}
                  picker={props.picker}
                />
              </Form.Item>
            </>
          );
        }}
      />
    );
  };
  