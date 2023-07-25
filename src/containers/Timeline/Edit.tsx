import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as TimelineEditFormInterface } from '../../components/Timeline/interfaces';
import { TimelineEditForm  } from '../../components/Timeline';
import { timelineService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<TimelineEditFormInterface | null>(null)

    const fetchData = async (approachId: string | number) => {
        setLoading(true);
        try {
            const res = await timelineService.getTimelineById(approachId)
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


    const handleSubmit = (data: TimelineEditFormInterface) => {
        console.log(data);
    }

    return (
        <Card title="Edit timeline">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: TimelineEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <TimelineEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: TimelineEditForm */}
            </div>
        </Card>
    )
}

export default Edit