import React from 'react'
import { Controller } from 'react-hook-form';
import { AutoComplete, Form } from 'antd'

type OptionType = {
  id: number | string;
  name: string;
}

type AutoCompleteCustomType = {
  control: any;
  name: string;
  label?: string;
  options?: OptionType[];
  required?: boolean;
  placeholder?: string;
}


const AutoCompleteCustom: React.FC<AutoCompleteCustomType> = ({ control, name, label = "", options = [], required = false, placeholder = "" }) => {
  const autocompleteOptions = React.useMemo(() => {
    return options.map(o => {
      return {
        id: o.id,
        value: o.name
      }
    });
  }, [options])

  return (

    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <Form.Item
            name={name}
            label={label}
            required={required}
            hasFeedback
            validateStatus={fieldState.invalid ? "error" : ""}
            help={fieldState.invalid ? fieldState.error?.message : ""}
          >
            <AutoComplete
              options={autocompleteOptions}
              placeholder={placeholder}
              filterOption={(inputValue, option) => option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
              allowClear={true}
              onSelect={(value, option) => {
                field.onChange(option.id)
              }}
              onClear={() => {
                field.onChange(null)
              }}
            />
          </Form.Item>
        </>)}
    />

  )
}

export default AutoCompleteCustom