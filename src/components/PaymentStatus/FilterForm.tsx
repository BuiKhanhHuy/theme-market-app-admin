import React from 'react'
import { Button, Col, Form, Row, Space } from 'antd'
import {
    SearchOutlined,
    ReloadOutlined
} from '@ant-design/icons';
import { FilterFormInterface } from './interfaces';
import InputCustom from '../formControls/InputCustom';

interface FilterFormProps {
    onSubmit: (data: FilterFormInterface) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onSubmit }) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        onSubmit(values)
    };

    const handleResetForm = () => {
        form.resetFields();
        onSubmit(form.getFieldsValue())
    }

    return (
        <Form
            onFinish={onFinish}
            form={form}
            layout="vertical"
            initialValues={{
                q: "",
            }}
        >
            <Row gutter={{ xs: 2, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={24} md={12} lg={12} xl={7}>
                    <InputCustom
                        name='q'
                        label='Search'
                        rules={[{ required: false }, { type: 'string', max: 100 }]}
                        placeholder='Search ...'
                        prefix={<SearchOutlined />}
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