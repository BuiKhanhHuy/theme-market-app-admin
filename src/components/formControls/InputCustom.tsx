import React from 'react'
import { Form, Input } from 'antd'
import { Rule } from 'antd/es/form';

type InputCustomType = {
  name: string;
  label?: string;
  rules?: Rule[];
  placeholder?: string;
  prefix?: React.ReactNode
  type?: "text" | "password"
}

const InputCustom: React.FC<InputCustomType> = ({ name, label = "", rules = [], placeholder = "", prefix = '', type = "text" }) => {
  return (
    <Form.Item
      name={name}
      label={label}
      hasFeedback
      rules={rules}
    >
      {
        type === "text" ?
          <Input
            allowClear={true}
            placeholder={placeholder}
            prefix={prefix ? prefix : ""}
          /> :
          <Input.Password allowClear={true} placeholder={placeholder}/>
      }


    </Form.Item>
  )
}

export default InputCustom