import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd'
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

type TableRowActionType = {
    id: number | string;
    onReview: (id: number | string) => void;
    onDelete: (id: number | string) => void;
    editLink: string;
}

const TableRowAction: React.FC<TableRowActionType> = ({ id, onReview, onDelete, editLink }) => {
    return (
        <Space size="small">
            <Button shape="circle" icon={<EyeOutlined />} onClick={() => onReview(id)} />
            <Link to={editLink}>
                <Button shape="circle" icon={<EditOutlined />} />
            </Link>
            <Button shape="circle" danger icon={<DeleteOutlined />} onClick={() => onDelete(id)} />
        </Space>
    )
}

export default TableRowAction