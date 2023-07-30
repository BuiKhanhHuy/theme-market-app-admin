import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Spin, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { EditFormInterface as PaymentTypeEditFormInterface } from '../../components/PaymentType/interfaces';
import { PaymentTypeEditForm } from '../../components/PaymentType';
import { paymentTypeService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const nav = useNavigate()
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


    const handleSubmit = (data: PaymentTypeEditFormInterface, callback: (serverErrors: FieldData[]) => void) => {
        const editPaymentType = async (id: string | number, paymentTypeData: PaymentTypeEditFormInterface) => {
            try {
                await paymentTypeService.updatePaymentTypeById(id, paymentTypeData)
                message.success("Update payment type success.")

                nav(-1)
            } catch (error) {
                errorHandler(error, callback)
            }
        }

        if (id) {
            editPaymentType(id, data)
        }
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