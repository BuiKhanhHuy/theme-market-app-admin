import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as CategoryAddFormInterface } from '../../components/Category/interfaces';
import { CategoryAddForm  } from '../../components/Category';
import { categoryService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: CategoryAddFormInterface) => {
    console.log(data)
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