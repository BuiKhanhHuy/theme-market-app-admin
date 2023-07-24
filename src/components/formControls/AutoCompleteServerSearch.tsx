import React from 'react'
import { Controller } from 'react-hook-form';
import { AutoComplete, Form } from 'antd'
import useDebounce from '../../hooks/useDebounce';

type OptionType = {
    id: number | string;
    email: string;
}

type AutoCompleteServerSearchType = {
    control: any;
    name: string;
    label?: string;
    required?: boolean;
    placeholder?: string;
}


const AutoCompleteServerSearch: React.FC<AutoCompleteServerSearchType> = ({ control, name, label = "", required = false, placeholder = "" }) => {
    const [loading, setLoading] = React.useState<boolean>(false)
    const [searchText, setSearchText] = React.useState<string>("")
    const [options, setOptions] = React.useState<OptionType[]>([])

    const debounded = useDebounce(searchText, 300);

    React.useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users/?q=${debounded}`).then(res => res.json()).then(data => {
            setOptions(data)
        }).then(() => setLoading(false))
    }, [debounded])

    const autocompleteOptions = React.useMemo(() => {
        return options.map(o => {
            return {
                id: o.id,
                value: o.email
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
                        validateStatus={loading ? "validating" : (fieldState.invalid ? "error" : "")}
                        help={fieldState.invalid ? fieldState.error?.message : ""}
                    >
                        <AutoComplete
                            options={autocompleteOptions}
                            placeholder={placeholder}
                            allowClear={true}
                            onChange={(value) => {
                                setSearchText(value)
                            }}
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

export default AutoCompleteServerSearch