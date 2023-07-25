import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as ProductTypeAddFormInterface } from '../../components/ProductType/interfaces';
import { ProductTypeAddForm  } from '../../components/ProductType';
import { productTypeService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: ProductTypeAddFormInterface) => {
    console.log(data)
  }

  return (
    <Card title="New product type">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: ProductTypeAddForm */}
        <ProductTypeAddForm onSubmit={handleSubmit} />
        {/* End: ProductTypeAddForm */}
      </div>
    </Card>
  )
}

export default Add