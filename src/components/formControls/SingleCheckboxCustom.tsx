import React from 'react'
import { Controller } from 'react-hook-form';
import { Checkbox, Form } from 'antd'

type SingleCheckboxCustomType = {
    control: any;
    name: string;
    label?: string;
}

const SingleCheckboxCustom: React.FC<SingleCheckboxCustomType> = ({ control, name, label = "" }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <>
                    <Checkbox value={field.value} onChange={field.onChange}>{label}</Checkbox>
                </>)
            }
        />
    )
}

export default SingleCheckboxCustom