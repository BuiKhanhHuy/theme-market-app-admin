import React from 'react'
import { Card, theme } from 'antd'
import { AddFormInterface as TagAddFormInterface } from '../../components/Tag/interfaces';
import { TagAddForm  } from '../../components/Tag';
import { tagService } from '../../services';

const Add: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleSubmit = (data: TagAddFormInterface) => {
    console.log(data)
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