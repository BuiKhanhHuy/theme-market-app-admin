import React from 'react'
import { Form, message } from 'antd'
import { ROLE } from '../../configs/settings';
import { AddFormInterface } from './interfaces';
import FormAction from '../common/FormAction';
import SelectCustom from '../formControls/SelectCustom';
import AutoCompleteServerSearch from '../formControls/AutoCompleteServerSearch';
import InputCustom from '../formControls/InputCustom';
import SingleCheckboxCustom from '../formControls/SingleCheckboxCustom';
import { userService } from '../../services';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

interface AddFormProps {
  onSubmit: (data: AddFormInterface) => void;
}

const AddForm: React.FC<AddFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    message.success('Submit success!');
    onSubmit(values)
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  const handleResetForm = () => {
  }

  return (
    <Form
      {...layout}
      initialValues={{
        isEmailVerified: false,
        isActive: false,
      }}
      form={form}
      style={{ maxWidth: 1000 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {/* Start: Email */}
      <InputCustom
        name='email'
        label='Email'
        rules={[{ required: true }, { type: 'email', max: 128 }]}
        placeholder='Enter email'
      />
      {/* End: Email */}

      {/* Start: First name */}
      <InputCustom
        name='firstName'
        label='First name'
        rules={[{ required: true }, { type: 'string', max: 50 }]}
        placeholder='Enter first name'
      />
      {/* End: First name */}

      {/* Start: Last name */}
      <InputCustom
        name='lastName'
        label='Last name'
        rules={[{ required: true }, { type: 'string', max: 100 }]}
        placeholder='Enter last name'
      />
      {/* End: Last name */}

      {/* Start: Password */}
      <InputCustom
        name='password'
        label='Password'
        rules={[{ required: true }, { type: 'string', max: 100 }]}
        placeholder='Enter password'
        type='password'
      />
      {/* End: Password */}

      {/* Start: Profession id */}
      <AutoCompleteServerSearch
        name='professionId'
        label='Profession'
        placeholder="Choose profession"
        modelUrl={userService.MODEL_URL}
      />
      {/* End: Profession id */}

      {/* Start: Role name */}
      <SelectCustom
        name='roleName'
        label='Role'
        rules={[{ required: true }, { type: 'string' }]}
        placeholder='Choose role'
        options={
          [{ id: ROLE.ADMIN, name: "Admin" }, { id: ROLE.CUSTOMER, name: "Customer" }]
        }
      />
      {/* End: Role name */}

      <Form.Item wrapperCol={{ offset: 6 }}>
        {/* Start: Email verified */}
        <SingleCheckboxCustom name="isEmailVerified" label='Email verified' rules={[{ required: false }]} />
        {/* End: Email verified */}

        {/* Start: Active */}
        <SingleCheckboxCustom name="isActive" label='Active' rules={[{ required: false }]} />
        {/* End: Active */}
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        {/* Start: FormAction */}
        <FormAction onReset={handleResetForm} />
        {/* End: FormAction */}
      </Form.Item>
    </Form>
  )
}

export default AddForm