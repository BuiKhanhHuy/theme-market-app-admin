import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as ConfessionAddFormInterface } from '../../components/Profession/interfaces';
import { ProfessionAddForm } from '../../components/Profession';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: ConfessionAddFormInterface) => {
    console.log(data)
  }

  return (
    <Card title="New confession">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: ProfessionAddForm */}
        <ProfessionAddForm onSubmit={handleSubmit} />
        {/* End: ProfessionAddForm */}
      </div>
    </Card>
  )
}

export default Add