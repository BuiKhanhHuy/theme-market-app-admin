import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as ServicePackageEditFormInterface } from '../../components/ServicePackage/interfaces';
import { ServicePackageEditForm  } from '../../components/ServicePackage';
import { servicePackageService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
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


    const handleSubmit = (data: ServicePackageEditFormInterface) => {
        console.log(data);
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