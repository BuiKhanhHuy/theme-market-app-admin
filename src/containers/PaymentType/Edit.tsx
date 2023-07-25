import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as PaymentTypeEditFormInterface } from '../../components/PaymentType/interfaces';
import { PaymentTypeEditForm } from '../../components/PaymentType';
import { paymentTypeService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<PaymentTypeEditFormInterface | null>(null)

    const fetchData = async (paymentTypeId: string | number) => {
        setLoading(true);
        try {
            const res = await paymentTypeService.getPaymentTypeById(paymentTypeId)
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


    const handleSubmit = (data: PaymentTypeEditFormInterface) => {
        console.log(data);
    }

    return (
        <Card title="Edit payment type">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: PaymentTypeEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <PaymentTypeEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: PaymentTypeEditForm */}
            </div>
        </Card>
    )
}

export default Edit