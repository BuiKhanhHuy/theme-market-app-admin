import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Spin, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { EditFormInterface as ProfessionEditFormInterface } from '../../components/Profession/interfaces';
import { ProfessionEditForm } from '../../components/Profession';
import { professionService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const nav = useNavigate()
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


    const handleSubmit = (data: ProfessionEditFormInterface, callback: (serverErrors: FieldData[]) => void) => {
        const editProfession = async (id: string | number, professionData: ProfessionEditFormInterface) => {
            try {
                await professionService.updateProfessionById(id, professionData)
                message.success("Update profession success.")

                nav(-1)
            } catch (error) {
                errorHandler(error, callback)
            }
        }

        if (id) {
            editProfession(id, data)
        }
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