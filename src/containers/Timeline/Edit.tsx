import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Spin, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { EditFormInterface as TimelineEditFormInterface } from '../../components/Timeline/interfaces';
import { TimelineEditForm } from '../../components/Timeline';
import { timelineService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const nav = useNavigate()
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<TimelineEditFormInterface | null>(null)

    const fetchData = async (timelineId: string | number) => {
        setLoading(true);
        try {
            const res = await timelineService.getTimelineById(timelineId)
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


    const handleSubmit = (data: TimelineEditFormInterface, callback: (serverErrors: FieldData[]) => void) => {
        const editTimeline = async (id: string | number, timelineData: TimelineEditFormInterface) => {
            try {
                await timelineService.updateTimelineById(id, timelineData)
                message.success("Update timeline success.")

                nav(-1)
            } catch (error) {
                errorHandler(error, callback)
            }
        }

        if (id) {
            editTimeline(id, data)
        }
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