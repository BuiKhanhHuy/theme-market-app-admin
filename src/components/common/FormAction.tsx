import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Space } from 'antd'
import {
    SaveOutlined,
    RightCircleOutlined,
    UndoOutlined,
    CloseOutlined,
} from '@ant-design/icons';

type FormActionProps = {
    onReset: () => void;
}

const FormAction: React.FC<FormActionProps> = ({ onReset }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = (): void => {
        navigate(-1);
    };

    const handleAddContinue = () => {
        const updatedURL = `${location.pathname}`;
        navigate(updatedURL)
    }

    return (
        <Space size="small">
            <Button type="primary" icon={<SaveOutlined />} htmlType='submit' >
                Save
            </Button>
            <Button type="primary" icon={<RightCircleOutlined />} htmlType='submit' onClick={handleAddContinue}>
                Save and continue
            </Button>
            <Button icon={<UndoOutlined />} onClick={onReset}>Reset</Button>
            <Button icon={<CloseOutlined />} onClick={handleGoBack}>Cancel</Button>
        </Space>
    )
}

export default FormAction