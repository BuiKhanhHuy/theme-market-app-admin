import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as PaymentTypeAddFormInterface } from '../../components/PaymentType/interfaces';
import { PaymentTypeAddForm  } from '../../components/PaymentType';
import { paymentTypeService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: PaymentTypeAddFormInterface) => {
    console.log(data)
  }

  return (
    <Card title="New payment type">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: PaymentTypeAddForm */}
        <PaymentTypeAddForm onSubmit={handleSubmit} />
        {/* End: PaymentTypeAddForm */}
      </div>
    </Card>
  )
}

export default Add