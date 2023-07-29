import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Popconfirm, Space } from 'antd'
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    QuestionCircleOutlined
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
            <Popconfirm
                placement='bottomRight'
                title="Delete the record"
                description="Are you sure to delete this record?"
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={() => onDelete(id)}
            >
                <Button
                    shape="circle"
                    danger
                    icon={<DeleteOutlined />}
                />
            </Popconfirm>
        </Space>
    )
}

export default TableRowAction