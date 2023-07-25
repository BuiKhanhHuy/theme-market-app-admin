import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as ApproachAddFormInterface } from '../../components/Approach/interfaces';
import { ApproachAddForm  } from '../../components/Approach';
import { approachService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: ApproachAddFormInterface) => {
    console.log(data)
  }

  return (
    <Card title="New approach">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: ApproachAddForm */}
        <ApproachAddForm onSubmit={handleSubmit} />
        {/* End: ApproachAddForm */}
      </div>
    </Card>
  )
}

export default Add