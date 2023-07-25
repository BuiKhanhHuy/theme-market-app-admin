import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as ApproachEditFormInterface } from '../../components/Approach/interfaces';
import { ApproachEditForm  } from '../../components/Approach';
import { approachService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<ApproachEditFormInterface | null>(null)

    const fetchData = async (approachId: string | number) => {
        setLoading(true);
        try {
            const res = await approachService.getApproachById(approachId)
            const data = res.data

            setEditData(data)
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchData(id as number | string)
    }, [id])


    const handleSubmit = (data: ApproachEditFormInterface) => {
        console.log(data);
    }

    return (
        <Card title="Edit approach">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: ApproachEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <ApproachEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: ApproachEditForm */}
            </div>
        </Card>
    )
}

export default Edit