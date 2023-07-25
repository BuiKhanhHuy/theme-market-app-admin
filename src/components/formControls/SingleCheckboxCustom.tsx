import React from 'react'
import { Checkbox, Form } from 'antd'
import { Rule } from 'antd/es/form';

type SingleCheckboxCustomType = {
    name: string;
    label?: string;
    rules?: Rule[];
}

const SingleCheckboxCustom: React.FC<SingleCheckboxCustomType> = ({ name, label = "", rules = [] }) => {
    return (
        <Form.Item
            name={name}
            valuePropName="checked"
            rules={rules}
            style={{ marginBottom: 0 }}
        >
            <Checkbox >{label}</Checkbox>
        </Form.Item>
    )
}

export default SingleCheckboxCustom