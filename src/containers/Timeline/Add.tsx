import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as TimelineAddFormInterface } from '../../components/Timeline/interfaces';
import { TimelineAddForm  } from '../../components/Timeline';
import { timelineService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: TimelineAddFormInterface) => {
    console.log(data)
  }

  return (
    <Card title="New timeline">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: TimelineAddForm */}
        <TimelineAddForm onSubmit={handleSubmit} />
        {/* End: TimelineAddForm */}
      </div>
    </Card>
  )
}

export default Add