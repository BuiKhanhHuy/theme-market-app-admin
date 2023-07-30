import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { AddFormInterface as PaymentTypeAddFormInterface } from '../../components/PaymentType/interfaces';
import { PaymentTypeAddForm  } from '../../components/PaymentType';
import { paymentTypeService } from '../../services';

const Add: React.FC = () => {
  const {  token: { colorBgContainer } } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: PaymentTypeAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addPaymentType = async (professionData: PaymentTypeAddFormInterface) => {
      try {
        await paymentTypeService.addPaymentType(professionData)
        message.success("Add payment type success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addPaymentType(data)
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