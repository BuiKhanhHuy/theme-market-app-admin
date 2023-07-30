import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { AddFormInterface as CategoryAddFormInterface } from '../../components/Category/interfaces';
import { CategoryAddForm } from '../../components/Category';
import { categoryService } from '../../services';

const Add: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: CategoryAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addCategory = async (categoryData: CategoryAddFormInterface) => {
      try {
        await categoryService.addCategory(categoryData)
        message.success("Add category success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addCategory(data)
  }

  return (
    <Card title="New category">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: CategoryAddForm */}
        <CategoryAddForm onSubmit={handleSubmit} />
        {/* End: CategoryAddForm */}
      </div>
    </Card>
  )
}

export default Add