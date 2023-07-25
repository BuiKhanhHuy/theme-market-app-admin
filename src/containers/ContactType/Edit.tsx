import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as ContactTypeEditFormInterface } from '../../components/ContactType/interfaces';
import { ContactTypeEditForm } from '../../components/ContactType';
import { contactTypeService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<ContactTypeEditFormInterface | null>(null)

    const fetchData = async (contactTypeId: string | number) => {
        setLoading(true);
        try {
            const res = await contactTypeService.getContactTypeById(contactTypeId)
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


    const handleSubmit = (data: ContactTypeEditFormInterface) => {
        console.log(data);
    }

    return (
        <Card title="Edit contact type">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: ContactTypeEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <ContactTypeEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: ContactTypeEditForm */}
            </div>
        </Card>
    )
}

export default Edit