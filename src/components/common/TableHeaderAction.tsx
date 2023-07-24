import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Space } from 'antd'
import {
    PlusOutlined,
    DeleteOutlined,
    FileExcelOutlined,
} from '@ant-design/icons';

type TableHeaderActionProps = {
    addLink: string;
    idList: React.Key[];
    onDeleteMany: (idList: React.Key[]) => void;
    onExport: (idList: React.Key[]) => void;
}

const TableHeaderAction: React.FC<TableHeaderActionProps> = ({ addLink, idList, onDeleteMany, onExport }) => {
    const hasSelected = idList.length > 0;

    return (
        <Space wrap>
            <Link to={addLink}>
                <Button type="primary" icon={<PlusOutlined />}>
                    Create
                </Button>
            </Link>
            <Button danger type="primary" icon={<DeleteOutlined />} disabled={!hasSelected} onClick={() => onDeleteMany(idList)} >
                Delete  {hasSelected ? `${idList.length} items` : ''}
            </Button>
            <Button icon={<FileExcelOutlined />} onClick={() => onExport(idList)}>Export to Excel</Button>
        </Space>
    )
}

export default TableHeaderAction