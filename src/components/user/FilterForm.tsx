import React from 'react'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Control } from 'react-hook-form';
import { Button, Col, Form, Row, Space } from 'antd'
import {
    SearchOutlined,
    ReloadOutlined
} from '@ant-design/icons';
import { ROLE } from '../../configs/settings';
import { FilterFormInterface } from './interfaces';
import InputCustom from '../formControls/InputCustom';
import RadioCustom from '../formControls/RadioCustom';
import AutoCompleteServerSearch from '../formControls/AutoCompleteServerSearch';

const schema = yup.object().shape({
    kw: yup
        .string()
        .default("")
        .max(150, 'Must not exceed 150 characters'),
    professionId: yup.number().default(null).nullable(),
    roleName: yup
        .string().default(null).nullable(),
    isEmailVerified: yup.boolean().default(null).nullable(),
    isActive: yup.boolean().default(null).nullable(),
})

const FilterForm = () => {
    const [form] = Form.useForm();

    const { handleSubmit, control } = useForm<FilterFormInterface>({
        resolver: yupResolver(schema),
        defaultValues: {
            roleName: null,
            isEmailVerified: null,
            isActive: null
        }
    });

    const onSubmit: SubmitHandler<FilterFormInterface> = (data) => {
        console.log(data);
    };

    return (
        <Form
            onFinish={handleSubmit(onSubmit)}

            form={form}
            layout="vertical">
            <Row gutter={{ xs: 2, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={7}>
                    <InputCustom
                        control={control as Control<FilterFormInterface>}
                        name='kw'
                        label='Search'
                        placeholder='Search ...'
                        prefix={<SearchOutlined />}
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={4}>
                    <AutoCompleteServerSearch
                        control={control as Control<FilterFormInterface>}
                        name='professionId'
                        label='Profession'
                        placeholder='Choose profession'
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={4}>
                    <RadioCustom
                        control={control as Control<FilterFormInterface>}
                        name='roleName'
                        label='Role'
                        options={[{ id: ROLE.ADMIN, name: "Admin" }, { id: ROLE.CUSTOMER, name: "Customer" }]}
                        showAll={true}
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={4}>
                    <RadioCustom
                        control={control as Control<FilterFormInterface>}
                        name='isActive'
                        label='Active'
                        options={[{ id: true, name: "Active" }, { id: false, name: "Inactive" }]}
                        showAll={true}
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={5}>
                    <RadioCustom
                        control={control as Control<FilterFormInterface>}
                        name='isEmailVerified'
                        label='Email Verified'
                        options={[{ id: true, name: "Verified" }, { id: false, name: "Unverified" }]}
                        showAll={true}
                    />
                </Col>
            </Row>

            <div>
                <Space size="small">
                    <Button type="primary" icon={<SearchOutlined />} htmlType='submit'>
                        Search
                    </Button>
                    <Button type="default" icon={<ReloadOutlined />}>
                        Reset
                    </Button>
                </Space>
            </div>
        </Form>
    )
}

export default FilterForm