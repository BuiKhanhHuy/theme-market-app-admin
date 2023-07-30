import React from 'react'
import { Form } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import { AddFormInterface } from './interfaces';
import FormAction from '../common/FormAction';
import InputCustom from '../formControls/InputCustom';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

interface AddFormProps {
  onSubmit: (data: AddFormInterface, callback: (serverErrors: FieldData[]) => void) => void;
}

const AddForm: React.FC<AddFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleServerError = (serverErrors: FieldData[]) => {
    form.setFields(serverErrors);
  };

  const onFinish = (values: any) => {
    onSubmit(values, handleServerError);

    form.resetFields();
  };

  const handleResetForm = () => {
    form.resetFields();
  }

  return (
    <Form
      {...layout}
      form={form}
      style={{ maxWidth: 1000 }}
      onFinish={onFinish}
    >
      {/* Start: Name */}
      <InputCustom
        name='name'
        label='Name'
        rules={[{ required: true }, { type: 'string', max: 255 }]}
        placeholder='Enter tag name'
      />
      {/* End: Name */}

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        {/* Start: FormAction */}
        <FormAction onReset={handleResetForm} />
        {/* End: FormAction */}
      </Form.Item>
    </Form>
  )
}

export default AddForm