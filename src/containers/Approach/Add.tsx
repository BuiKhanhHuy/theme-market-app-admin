import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { AddFormInterface as ApproachAddFormInterface } from '../../components/Approach/interfaces';
import { ApproachAddForm  } from '../../components/Approach';
import { approachService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: ApproachAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addApproach = async (approachData: ApproachAddFormInterface) => {
      try {
        await approachService.addApproach(approachData)
        message.success("Add approach success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addApproach(data)
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