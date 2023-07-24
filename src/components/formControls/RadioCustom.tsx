import React from 'react';
import { Controller } from 'react-hook-form';
import { Radio, Form } from 'antd';

type OptionType = {
    id: number | string | boolean;
    name: string;
}

type RadioCustomType = {
    control: any;
    name: string;
    label?: string;
    options?: OptionType[];
    required?: boolean;
    showAll?: boolean;
}


const RadioCustom: React.FC<RadioCustomType> = ({ control, name, label = "", options = [], required = false, showAll = false }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <>
                    <Form.Item
                        label={label}
                        required={required}
                        hasFeedback
                        validateStatus={fieldState.invalid ? "error" : ""}
                        help={fieldState.invalid ? fieldState.error?.message : ""}
                    >
                        <Radio.Group onChange={field.onChange} value={field.value}>
                            {
                                showAll && <Radio value={null}>All</Radio>
                            }
                            {
                                options.map((option, index) => <Radio key={index} value={option.id}>{option.name}</Radio>)
                            }
                        </Radio.Group>
                    </Form.Item>
                </>
            )}
        />

    )
}

export default RadioCustom