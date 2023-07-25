import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as ServicePackageAddFormInterface } from '../../components/ServicePackage/interfaces';
import { ServicePackageAddForm  } from '../../components/ServicePackage';
import { servicePackageService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: ServicePackageAddFormInterface) => {
    console.log(data)
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