import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { AddFormInterface as ProductTypeAddFormInterface } from '../../components/ProductType/interfaces';
import { ProductTypeAddForm } from '../../components/ProductType';
import { productTypeService } from '../../services';

const Add: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: ProductTypeAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addProductType = async (productTypeData: ProductTypeAddFormInterface) => {
      try {
        await productTypeService.addProductType(productTypeData)
        message.success("Add profession success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addProductType(data)
  }

  return (
    <Card title="New product type">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: ProductTypeAddForm */}
        <ProductTypeAddForm
          onSubmit={handleSubmit}
        />
        {/* End: ProductTypeAddForm */}
      </div>
    </Card>
  )
}

export default Add