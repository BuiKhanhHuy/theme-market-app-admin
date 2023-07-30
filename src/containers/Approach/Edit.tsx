import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Spin, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { EditFormInterface as ApproachEditFormInterface } from '../../components/Approach/interfaces';
import { ApproachEditForm  } from '../../components/Approach';
import { approachService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const nav = useNavigate()
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


    const handleSubmit = (data: ApproachEditFormInterface, callback: (serverErrors: FieldData[]) => void) => {
        const editApproach = async (id: string | number, approachData: ApproachEditFormInterface) => {
            try {
                await approachService.updateApproachById(id, approachData)
                message.success("Update approach success.")

                nav(-1)
            } catch (error) {
                errorHandler(error, callback)
            }
        }

        if (id) {
            editApproach(id, data)
        }
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