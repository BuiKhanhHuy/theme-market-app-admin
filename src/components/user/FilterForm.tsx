import React from 'react'
import { Button, Col, Form, Row, Space, message } from 'antd'
import {
    SearchOutlined,
    ReloadOutlined
} from '@ant-design/icons';
import { ROLE } from '../../configs/settings';
import { FilterFormInterface } from './interfaces';
import { userService } from '../../services';
import InputCustom from '../formControls/InputCustom';
import RadioCustom from '../formControls/RadioCustom';
import AutoCompleteServerSearch from '../formControls/AutoCompleteServerSearch';

interface FilterFormProps {
    onSubmit: (data: FilterFormInterface) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onSubmit }) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        message.success('Submit success!');
        onSubmit(values)
    };

    const handleResetForm = () => {
        form.resetFields();
    }

    return (
        <Form
            onFinish={onFinish}
            form={form}
            layout="vertical"
            initialValues={{
                kw: "",
                professionId: "",
                roleName: "",
                isActive: "",
                isEmailVerified: ""
            }}
        >
            <Row gutter={{ xs: 2, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={7}>
                    <InputCustom
                        name='kw'
                        label='Search'
                        rules={[{ required: false }, { type: 'string', max: 100 }]}
                        placeholder='Search ...'
                        prefix={<SearchOutlined />}
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={4}>
                    <AutoCompleteServerSearch
                        name='professionId'
                        label='Profession'
                        placeholder="Choose profession"
                        modelUrl={userService.MODEL_URL}
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={4}>
                    <RadioCustom
                        name='roleName'
                        label='Role'
                        options={[{ id: ROLE.ADMIN, name: "Admin" }, { id: ROLE.CUSTOMER, name: "Customer" }]}
                        showAll={true}
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={4}>
                    <RadioCustom
                        name='isActive'
                        label='Active'
                        options={[{ id: true, name: "Active" }, { id: false, name: "Inactive" }]}
                        showAll={true}
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={5}>
                    <RadioCustom
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
                    <Button type="default" icon={<ReloadOutlined />} htmlType='button' onClick={handleResetForm}>
                        Reset
                    </Button>
                </Space>
            </div>
        </Form>
    )
}

export default FilterForm