import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { AddFormInterface as TimelineAddFormInterface } from '../../components/Timeline/interfaces';
import { TimelineAddForm  } from '../../components/Timeline';
import { timelineService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: TimelineAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addTimeline = async (timelineData: TimelineAddFormInterface) => {
      try {
        await timelineService.addTimeline(timelineData)
        message.success("Add timeline success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addTimeline(data)
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