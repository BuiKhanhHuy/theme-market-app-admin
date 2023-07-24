import React from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Control, } from 'react-hook-form';
import { Form } from 'antd'
import { ROLE } from '../../configs/settings';
import { EditFormInterface } from './interfaces';
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
  email: yup.string().required().email().max(128),
  firstName: yup.string().required().max(50),
  lastName: yup.string().required().max(100),
  professionId: yup.number().default(null).nullable(),
  roleName: yup
    .string().required(),
  password: yup.string().required(),
  isActive: yup.boolean().default(false),
  isEmailVerified: yup.boolean().default(false)
})

interface EditFormProps {
  editData: EditFormInterface | null;
  onSubmit: (data: EditFormInterface) => void;
}

const EditForm: React.FC<EditFormProps> = ({ editData, onSubmit }) => {
  const [form] = Form.useForm();

  const { handleSubmit, setValue, reset, control } = useForm<EditFormInterface>({
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    console.log("EDIT DATA: ", editData)

    if (editData) {
      reset((formValues) => ({
        ...formValues,
        ...editData,
      }));
    } else {
      reset()
    }
  }, [editData, reset]);

  const handleResetForm = () => {
    reset();
  }

  return (
    <Form
      {...layout}
      form={form}
      onFinish={handleSubmit(onSubmit)}
      style={{ maxWidth: 1000 }}
    >
      <InputCustom
        control={control as Control<EditFormInterface>}
        name='email'
        label='Email'
        required={true}
        placeholder='Enter email'
      />
      <InputCustom
        control={control as Control<EditFormInterface>}
        name='firstName'
        label='First name'
        required={true}
        placeholder='Enter first name'
      />
      <InputCustom
        control={control as Control<EditFormInterface>}
        name='lastName'
        label='Last name'
        required={true}
        placeholder='Enter last name'
      />
      <AutoCompleteServerSearch
        control={control as Control<EditFormInterface>}
        name='professionId'
        label='Profession'
        placeholder='Choose profession'
      />
      <PasswordInputCustom
        control={control as Control<EditFormInterface>}
        name='password'
        label='Password'
        required={true}
        placeholder='Enter password'
      />
      <AutoCompleteCustom
        control={control as Control<EditFormInterface>}
        name='roleName'
        label='Role'
        required={true}
        options={[{ id: ROLE.ADMIN, name: "Admin" }, { id: ROLE.CUSTOMER, name: "Customer" }]}
        placeholder='Choose role'
      />
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        {/* <Space direction='vertical' size="middle">
          <SingleCheckboxCustom control={control as Control<EditFormInterface>} name='isEmailVerified' label='Email verified' />
          <SingleCheckboxCustom control={control as Control<EditFormInterface>} name='isActive' label='Active' />
        </Space> */}
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        {/* Start: FormAction */}
        <FormAction onReset={handleResetForm} />

        {/* End: FormAction */}
      </Form.Item>
    </Form>
  )
}

export default EditForm