import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as PaymentStatusEditFormInterface } from '../../components/PaymentStatus/interfaces';
import { PaymentStatusEditForm } from '../../components/PaymentStatus';
import { paymentStatusService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<PaymentStatusEditFormInterface | null>(null)

    const fetchData = async (paymentStatusId: string | number) => {
        setLoading(true);
        try {
            const res = await paymentStatusService.getPaymentStatusById(paymentStatusId)
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


    const handleSubmit = (data: PaymentStatusEditFormInterface) => {
        console.log(data);
    }

    return (
        <Card title="Edit payment status">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: PaymentStatusEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <PaymentStatusEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: PaymentStatusEditForm */}
            </div>
        </Card>
    )
}

export default Edit