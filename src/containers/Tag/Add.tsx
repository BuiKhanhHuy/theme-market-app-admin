import React from 'react'
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import { AddFormInterface as TagAddFormInterface } from '../../components/Tag/interfaces';
import errorHandler from '../../utils/errorHandler';
import { TagAddForm } from '../../components/Tag';
import { tagService } from '../../services';
import { useNavigate } from 'react-router-dom';

const Add: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: TagAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addTag = async (tagData: TagAddFormInterface) => {
      try {
        await tagService.addTag(tagData)
        message.success("Add profession success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addTag(data)
  }

  return (
    <Card title="New tag">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: TagAddForm */}
        <TagAddForm onSubmit={handleSubmit} />
        {/* End: TagAddForm */}
      </div>
    </Card>
  )
}

export default Add