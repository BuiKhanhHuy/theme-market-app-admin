import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import { AddFormInterface as ContactTypeAddFormInterface } from '../../components/ContactType/interfaces';
import { ContactTypeAddForm  } from '../../components/ContactType';
import { contactTypeService } from '../../services';
import errorHandler from '../../utils/errorHandler';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: ContactTypeAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addContactType = async (contactTypeData: ContactTypeAddFormInterface) => {
      try {
        await contactTypeService.addContactType(contactTypeData)
        message.success("Add contact type success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addContactType(data)
  }

  return (
    <Card title="New contact type">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: ContactTypeAddForm */}
        <ContactTypeAddForm onSubmit={handleSubmit} />
        {/* End: ContactTypeAddForm */}
      </div>
    </Card>
  )
}

export default Add