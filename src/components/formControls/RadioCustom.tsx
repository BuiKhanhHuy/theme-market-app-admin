import React from 'react';
import { Radio, Form } from 'antd';
import { Rule } from 'antd/es/form';

type OptionType = {
    id: number | string | boolean;
    name: string;
}

type RadioCustomType = {
    name: string;
    label?: string;
    options?: OptionType[];
    rules?: Rule[];
    showAll?: boolean;
}


const RadioCustom: React.FC<RadioCustomType> = ({ name, label = "", options = [], showAll = false, rules = [] }) => {
    return (
        <Form.Item
            name={name}
            label={label}
            hasFeedback
            rules={rules}
        >
            <Radio.Group>
                {
                    showAll && <Radio value={""}>All</Radio>
                }
                {
                    options.map((option, index) => <Radio key={index} value={option.id}>{option.name}</Radio>)
                }
            </Radio.Group>
        </Form.Item>

    )
}

export default RadioCustom