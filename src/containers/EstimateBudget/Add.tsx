import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { AddFormInterface as EstimateBudgetAddFormInterface } from '../../components/EstimateBudget/interfaces';
import { EstimateBudgetAddForm  } from '../../components/EstimateBudget';
import { estimateBudgetService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: EstimateBudgetAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addEstimateBudget = async (addEstimateBudgetData: EstimateBudgetAddFormInterface) => {
      try {
        await estimateBudgetService.addEstimateBudget(addEstimateBudgetData)
        message.success("Add estimate budget success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addEstimateBudget(data)
  }

  return (
    <Card title="New estimate budget">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: EstimateBudgetAddForm */}
        <EstimateBudgetAddForm onSubmit={handleSubmit} />
        {/* End: EstimateBudgetAddForm */}
      </div>
    </Card>
  )
}

export default Add