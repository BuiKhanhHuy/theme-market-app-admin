import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Spin, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import errorHandler from '../../utils/errorHandler';
import { EditFormInterface as ContactTypeEditFormInterface } from '../../components/ContactType/interfaces';
import { ContactTypeEditForm } from '../../components/ContactType';
import { contactTypeService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const nav = useNavigate()
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


    const handleSubmit = (data: ContactTypeEditFormInterface, callback: (serverErrors: FieldData[]) => void) => {
        const editContactType = async (id: string | number, contactTypeData: ContactTypeEditFormInterface) => {
            try {
                await contactTypeService.updateContactTypeById(id, contactTypeData)
                message.success("Update contact type success.")

                nav(-1)
            } catch (error) {
                errorHandler(error, callback)
            }
        }

        if (id) {
            editContactType(id, data)
        }
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