import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as EstimateBudgetEditFormInterface } from '../../components/EstimateBudget/interfaces';
import { EstimateBudgetEditForm  } from '../../components/EstimateBudget';
import { estimateBudgetService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
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


    const handleSubmit = (data: EstimateBudgetEditFormInterface) => {
        console.log(data);
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