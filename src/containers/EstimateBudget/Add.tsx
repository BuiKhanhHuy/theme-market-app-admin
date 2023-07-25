import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as EstimateBudgetAddFormInterface } from '../../components/EstimateBudget/interfaces';
import { EstimateBudgetAddForm  } from '../../components/EstimateBudget';
import { estimateBudgetService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: EstimateBudgetAddFormInterface) => {
    console.log(data)
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