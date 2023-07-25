import React from 'react'
import { Form, message } from 'antd'
import { EditFormInterface } from './interfaces';
import FormAction from '../common/FormAction';
import InputCustom from '../formControls/InputCustom';
import TextAreaCustom from '../formControls/TextAreaCustom';

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
      initialValues={{
        description: ""
      }}
    >
      {/* Start: Name */}
      <InputCustom
        name='name'
        label='Name'
        rules={[{ required: true }, { type: 'string', max: 255 }]}
        placeholder='Enter payment status name'
      />
      {/* End: Name */}
      {/* Start: Description */}
      <TextAreaCustom
        name='description'
        label='Description'
        rules={[{ required: false }, { type: 'string', max: 255 }]}
        placeholder='Enter description'
      />
      {/* End: Description */}

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