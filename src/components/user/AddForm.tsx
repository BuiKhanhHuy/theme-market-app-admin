import React from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Control } from 'react-hook-form';
import { Button, Form, Space, Upload, UploadFile } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { ROLE } from '../../configs/settings';
import { AddFormInterface } from './interfaces';
import FormAction from '../common/FormAction';
import InputCustom from '../formControls/InputCustom';
import PasswordInputCustom from '../formControls/PasswordInputCustom';
import SingleCheckboxCustom from '../formControls/SingleCheckboxCustom';
import AutoCompleteCustom from '../formControls/AutoCompleteCustom';
import AutoCompleteServerSearch from '../formControls/AutoCompleteServerSearch';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email().max(128, "Exceeded the allowable length"),
  firstName: yup.string().required("First name is required").max(50, "Exceeded the allowable length"),
  lastName: yup.string().required("Last name is required").max(100, 'Exceeded the allowable length'),
  professionId: yup.number().default(null).nullable(),
  roleName: yup
    .string().required("Role name is required"),
  password: yup.string().required("Password is required"),
  isActive: yup.boolean().default(false),
  isEmailVerified: yup.boolean().default(false)
})

interface AddFormProps {
  onSubmit: (data: AddFormInterface) => void;
}

const AddForm: React.FC<AddFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const { handleSubmit, reset, control } = useForm<AddFormInterface>({
    resolver: yupResolver(schema),

  });

  const handleResetForm = () => {
    reset();
  }

  const fileList: UploadFile[] = [
    {
      uid: '-1',
      name: 'yyy.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }
  ];

  // const onSubmit: SubmitHandler<FormInterface> = (data) => {
  //   console.log(data);
  // };

  return (
    <Form
      {...layout}
      form={form}
      onFinish={handleSubmit(onSubmit)}
      style={{ maxWidth: 1000 }}

    >
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          defaultFileList={[...fileList]}
        >
          <Button icon={<UploadOutlined />}>Upload avatar</Button>
        </Upload>
      </Form.Item>
      <InputCustom
        control={control as Control<AddFormInterface>}
        name='email'
        label='Email'
        required={true}
        placeholder='Enter email'
      />
      <InputCustom
        control={control as Control<AddFormInterface>}
        name='firstName'
        label='First name'
        required={true}
        placeholder='Enter first name'
      />
      <InputCustom
        control={control as Control<AddFormInterface>}
        name='lastName'
        label='Last name'
        required={true}
        placeholder='Enter last name'
      />
      <AutoCompleteServerSearch
        control={control as Control<AddFormInterface>}
        name='professionId'
        label='Profession'
        placeholder='Choose profession'
      />
      <PasswordInputCustom
        control={control as Control<AddFormInterface>}
        name='password'
        label='Password'
        required={true}
        placeholder='Enter password'
      />
      <AutoCompleteCustom
        control={control as Control<AddFormInterface>}
        name='roleName'
        label='Role'
        required={true}
        options={[{ id: ROLE.ADMIN, name: "Admin" }, { id: ROLE.CUSTOMER, name: "Customer" }]}
        placeholder='Choose role'
      />
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        <Space direction='vertical' size="middle">
          <SingleCheckboxCustom control={control as Control<AddFormInterface>} name='isEmailVerified' label='Email verified' />
          <SingleCheckboxCustom control={control as Control<AddFormInterface>} name='isActive' label='Active' />
        </Space>
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