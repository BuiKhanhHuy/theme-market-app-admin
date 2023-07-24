import React from 'react'
import { Controller } from 'react-hook-form';
import { Form, Input } from 'antd'

type InputCustomType = {
  control: any;
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  prefix?: React.ReactNode
}

const InputCustom: React.FC<InputCustomType> = ({  control, name, label = "", required = false, placeholder = "", prefix = '' }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <Form.Item
            required={required}
            name={name}
            label={label}
            hasFeedback
            validateStatus={fieldState.invalid ? "error" : ""}
            help={fieldState.invalid ? fieldState.error?.message : ""}
            initialValue={field.value}
          >
            <Input
              allowClear={true}
              placeholder={placeholder}
              prefix={prefix ? prefix : ""}
              value={field.value}
              defaultValue={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          </Form.Item>
        </>)}
    />
  )
}

export default InputCustom