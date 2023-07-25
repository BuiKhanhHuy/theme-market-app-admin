import React from 'react'
import { Form, Select } from 'antd'
import { Rule } from 'antd/es/form';

type OptionType = {
    id: number | string;
    name: string;
}

type SelectCustomProps = {
    name: string;
    label?: string;
    options: OptionType[];
    placeholder?: string;
    rules: Rule[]
}

const SelectCustom: React.FC<SelectCustomProps> = ({ name, label, options, placeholder = "", rules = [] }) => {
    const autocompleteOptions = React.useMemo(() => {
        return options.map(o => {
            return {
                value: o.id,
                label: o.name
            }
        });
    }, [options])

    return (
        <Form.Item
            name={name}
            label={label}
            rules={rules}
            hasFeedback
        >
            <Select placeholder={placeholder} allowClear={true} showSearch={true} options={autocompleteOptions} />
        </Form.Item>
    )
}

export default SelectCustom