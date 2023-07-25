import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as ProfessionEditFormInterface } from '../../components/Profession/interfaces';
import { ProfessionEditForm } from '../../components/Profession';
import { professionService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<ProfessionEditFormInterface | null>(null)

    const fetchData = async (professionId: string | number) => {
        setLoading(true);
        try {
            const res = await professionService.getProfessionById(professionId)
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


    const handleSubmit = (data: ProfessionEditFormInterface) => {
        console.log(data);
    }

    return (
        <Card title="Edit confession">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: ProfessionEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <ProfessionEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: ProfessionEditForm */}
            </div>
        </Card>
    )
}

export default Edit