import React from 'react'
import { Form, Select } from 'antd'
import { Rule } from 'antd/es/form';
import useDebounce from '../../hooks/useDebounce';
import { autocompleteService } from '../../services';

type OptionType = {
    id: number | string;
    email: string;
}

type AutoCompleteServerSearchType = {
    name: string;
    label?: string;
    placeholder?: string;
    rules?: Rule[];
    modelUrl: string
}


const AutoCompleteServerSearch: React.FC<AutoCompleteServerSearchType> = ({ name, label = "", placeholder = "", rules = [], modelUrl }) => {
    const [loading, setLoading] = React.useState<boolean>(false)
    const [searchText, setSearchText] = React.useState<string>("")
    const [options, setOptions] = React.useState<OptionType[]>([])


    const debounded = useDebounce(searchText, 300);

    const fetchData = async (modelUrl: string) => {
        try {
            const res = await autocompleteService.getOptionsByModel(modelUrl)
            const data = res.data

            console.log(data)
        } catch (error) {

        }
    }

    React.useEffect(() => {
        // fetchData(modelUrl)

        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/users/?q=${debounded}`).then(res => res.json()).then(data => {
            setOptions(data)
        }).then(() => setLoading(false))
    }, [debounded])

    const autocompleteOptions = React.useMemo(() => {
        return options.map(o => {
            return {
                value: o.id,
                label: o.email
            }
        });
    }, [options])

    return (
        <Form.Item
            name={name}
            label={label}
            hasFeedback
            rules={rules}
            // validateStatus={loading ? "validating" : ""}
        >
            <Select
                options={autocompleteOptions}
                placeholder={placeholder}
                allowClear={true}
                showSearch={true}
                onSearch={(value) => setSearchText(value)}
            />
        </Form.Item>

    )
}

export default AutoCompleteServerSearch