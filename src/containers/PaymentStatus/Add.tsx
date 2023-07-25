import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as PaymentStatusAddFormInterface } from '../../components/PaymentStatus/interfaces';
import { PaymentStatusAddForm  } from '../../components/PaymentStatus';
import { paymentStatusService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: PaymentStatusAddFormInterface) => {
    console.log(data)
  }

  return (
    <Card title="New payment status">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: PaymentStatusAddForm */}
        <PaymentStatusAddForm onSubmit={handleSubmit} />
        {/* End: PaymentStatusAddForm */}
      </div>
    </Card>
  )
}

export default Add