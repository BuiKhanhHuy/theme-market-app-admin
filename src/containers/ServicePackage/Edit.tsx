import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Spin, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { EditFormInterface as ServicePackageEditFormInterface } from '../../components/ServicePackage/interfaces';
import { ServicePackageEditForm } from '../../components/ServicePackage';
import { servicePackageService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const nav = useNavigate()
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<ServicePackageEditFormInterface | null>(null)

    const fetchData = async (approachId: string | number) => {
        setLoading(true);
        try {
            const res = await servicePackageService.getServicePackageById(approachId)
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


    const handleSubmit = (data: ServicePackageEditFormInterface, callback: (serverErrors: FieldData[]) => void) => {
        const editServicePackage = async (id: string | number, servicePackageData: ServicePackageEditFormInterface) => {
            try {
                await servicePackageService.updateServicePackageById(id, servicePackageData)
                message.success("Update service package success.")

                nav(-1)
            } catch (error) {
                errorHandler(error, callback)
            }
        }

        if (id) {
            editServicePackage(id, data)
        }
    }

    return (
        <Card title="Edit service package">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: ServicePackageEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <ServicePackageEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: ServicePackageEditForm */}
            </div>
        </Card>
    )
}

export default Edit