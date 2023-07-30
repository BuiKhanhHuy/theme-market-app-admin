import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Spin, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { EditFormInterface as EstimateBudgetEditFormInterface } from '../../components/EstimateBudget/interfaces';
import { EstimateBudgetEditForm  } from '../../components/EstimateBudget';
import { estimateBudgetService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const nav = useNavigate()
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<EstimateBudgetEditFormInterface | null>(null)

    const fetchData = async (approachId: string | number) => {
        setLoading(true);
        try {
            const res = await estimateBudgetService.getEstimateBudgetById(approachId)
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


    const handleSubmit = (data: EstimateBudgetEditFormInterface, callback: (serverErrors: FieldData[]) => void) => {
        const editEstimateBudget = async (id: string | number, estimateBudgetData: EstimateBudgetEditFormInterface) => {
            try {
                await estimateBudgetService.updateEstimateBudgetById(id, estimateBudgetData)
                message.success("Update estimate budget success.")

                nav(-1)
            } catch (error) {
                errorHandler(error, callback)
            }
        }

        if (id) {
            editEstimateBudget(id, data)
        }
    }

    return (
        <Card title="Edit estimate budget">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: EstimateBudgetEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <EstimateBudgetEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: EstimateBudgetEditForm */}
            </div>
        </Card>
    )
}

export default Edit