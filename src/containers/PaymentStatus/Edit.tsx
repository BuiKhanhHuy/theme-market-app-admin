import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Spin, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { EditFormInterface as PaymentStatusEditFormInterface } from '../../components/PaymentStatus/interfaces';
import { PaymentStatusEditForm } from '../../components/PaymentStatus';
import { paymentStatusService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const nav = useNavigate()
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


    const handleSubmit = (data: PaymentStatusEditFormInterface, callback: (serverErrors: FieldData[]) => void) => {
        const editPaymentStatus = async (id: string | number, paymentStatusData: PaymentStatusEditFormInterface) => {
            try {
                await paymentStatusService.updatePaymentStatusById(id, paymentStatusData)
                message.success("Update payment status success.")

                nav(-1)
            } catch (error) {
                errorHandler(error, callback)
            }
        }

        if (id) {
            editPaymentStatus(id, data)
        }
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