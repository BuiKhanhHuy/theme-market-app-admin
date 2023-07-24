import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Space } from 'antd'
import {
    SaveOutlined,
    UndoOutlined,
    CloseOutlined,
} from '@ant-design/icons';

type FormActionProps = {
    onReset: () => void;
}

const FormAction: React.FC<FormActionProps> = ({ onReset }) => {
    const navigate = useNavigate();

    const handleGoBack = (): void => {
        navigate(-1);
    };

    return (
        <Space size="small">
            <Button type="primary" icon={<SaveOutlined />} htmlType='submit'>
                Save
            </Button>
            <Button icon={<UndoOutlined />} onClick={onReset}>Reset</Button>
            <Button icon={<CloseOutlined />} onClick={handleGoBack}>Cancel</Button>
        </Space>
    )
}

export default FormAction