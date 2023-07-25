import React from 'react'
import { Form, Input } from 'antd'
import { Rule } from 'antd/es/form';

type TextAreaCustomType = {
    name: string;
    label?: string;
    rules?: Rule[];
    placeholder?: string;
}

const TextAreaCustom: React.FC<TextAreaCustomType> = ({ name, label = "", rules = [], placeholder = "" }) => {
    return (
        <Form.Item
            name={name}
            label={label}
            hasFeedback
            rules={rules}
        >
            <Input.TextArea placeholder={placeholder} />
        </Form.Item>
    )
}

export default TextAreaCustom