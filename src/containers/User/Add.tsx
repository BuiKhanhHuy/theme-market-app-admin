import React from 'react'
import { Card, theme } from 'antd'
import { UserAddForm } from '../../components/user';
import { AddFormInterface as UserAddFormInterface } from '../../components/user/interfaces';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: UserAddFormInterface) => {
    console.log(data)
  }

  return (
    <Card title="New user">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        {/* Start: UserAddForm */}
        <UserAddForm onSubmit={handleSubmit} />
        {/* End: UserAddForm */}
      </div>
    </Card>
  )
}

export default Add