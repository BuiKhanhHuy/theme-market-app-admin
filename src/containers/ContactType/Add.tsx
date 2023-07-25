import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as ContactTypeAddFormInterface } from '../../components/ContactType/interfaces';
import { ContactTypeAddForm  } from '../../components/ContactType';
import { contactTypeService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: ContactTypeAddFormInterface) => {
    console.log(data)
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