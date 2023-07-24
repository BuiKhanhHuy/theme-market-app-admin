import React from 'react'
import { Controller } from 'react-hook-form';
import { Form, Input } from 'antd'

type PasswordInputCustomType = {
    control: any;
    name: string;
    label?: string;
    required?: boolean;
    placeholder?: string;
}

const PasswordInputCustom: React.FC<PasswordInputCustomType> = ({ control, name, label = "", required = false, placeholder = "" }) => {
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
                    >
                        <Input.Password allowClear={true} placeholder={placeholder} value={field.value} onChange={field.onChange} />
                    </Form.Item>
                </>)}
        />
    )
}

export default PasswordInputCustom