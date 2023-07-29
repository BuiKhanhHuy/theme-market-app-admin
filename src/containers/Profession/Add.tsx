import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { AddFormInterface as ConfessionAddFormInterface } from '../../components/Profession/interfaces';
import { ProfessionAddForm } from '../../components/Profession';
import { professionService } from '../../services';

const Add: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: ConfessionAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addProfession = async (professionData: ConfessionAddFormInterface) => {
      try {
        await professionService.addProfession(professionData)
        message.success("Add profession success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addProfession(data)
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