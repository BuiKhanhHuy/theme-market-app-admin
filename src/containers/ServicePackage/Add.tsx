import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { AddFormInterface as ServicePackageAddFormInterface } from '../../components/ServicePackage/interfaces';
import { ServicePackageAddForm  } from '../../components/ServicePackage';
import { servicePackageService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const nav = useNavigate()

  const handleSubmit = (data: ServicePackageAddFormInterface, callback: (serverErrors: FieldData[]) => void) => {
    const addServicePackage = async (servicePackageData: ServicePackageAddFormInterface) => {
      try {
        await servicePackageService.addServicePackage(servicePackageData)
        message.success("Add service package success.")

        nav(-1)
      } catch (error) {
        errorHandler(error, callback)
      }
    }

    addServicePackage(data)
  }

  return (
    <Card title="New service package">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: ServicePackageAddForm */}
        <ServicePackageAddForm onSubmit={handleSubmit} />
        {/* End: ServicePackageAddForm */}
      </div>
    </Card>
  )
}

export default Add