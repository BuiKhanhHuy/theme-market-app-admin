import React from 'react'
import { Form, message } from 'antd'
import { EditFormInterface } from './interfaces';
import FormAction from '../common/FormAction';
import InputCustom from '../formControls/InputCustom';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

interface EditFormProps {
  editData: EditFormInterface | null;
  onSubmit: (data: EditFormInterface) => void;
}

const EditForm: React.FC<EditFormProps> = ({ editData, onSubmit }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (editData) {
      form.setFieldsValue(editData);
    }
  }, [editData, form])

  const onFinish = (values: any) => {
    message.success('Submit success!');
    console.log(values)
  };

  const handleResetForm = () => {
    form.resetFields();
  }

  return (
    <Form
      {...layout}
      form={form}
      onFinish={onFinish}
      style={{ maxWidth: 1000 }}
    >
      {/* Start: Name */}
      <InputCustom
        name='name'
        label='Name'
        rules={[{ required: true }, { type: 'string', max: 255 }]}
        placeholder='Enter product type name'
      />
      {/* End: Name */}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        {/* Start: FormAction */}
        <FormAction
          onReset={handleResetForm}
        />
        {/* End: FormAction */}
      </Form.Item>
    </Form>
  )
}

export default EditForm