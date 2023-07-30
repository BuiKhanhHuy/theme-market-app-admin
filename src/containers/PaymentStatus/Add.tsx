import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { AddFormInterface as PaymentStatusAddFormInterface } from '../../components/PaymentStatus/interfaces';
import { PaymentStatusAddForm } from '../../components/PaymentStatus';
import { paymentStatusService } from '../../services';

const Add: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: PaymentStatusAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addPaymentStatus = async (paymentStatusData: PaymentStatusAddFormInterface) => {
      try {
        await paymentStatusService.addPaymentStatus(paymentStatusData)
        message.success("Add payment status success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addPaymentStatus(data)
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