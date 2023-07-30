import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Spin, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import { EditFormInterface as TagEditFormInterface } from '../../components/Tag/interfaces';
import errorHandler from '../../utils/errorHandler';
import { TagEditForm } from '../../components/Tag';
import { tagService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const nav = useNavigate()
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<TagEditFormInterface | null>(null)

    const fetchData = async (tagId: string | number) => {
        setLoading(true);
        try {
            const res = await tagService.getTagById(tagId)
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


    const handleSubmit = (data: TagEditFormInterface, callback: (serverErrors: FieldData[]) => void) => {
        const editTag = async (id: string | number, tagData: TagEditFormInterface) => {
            try {
                await tagService.updateTagById(id, tagData)
                message.success("Update profession success.")

                nav(-1)
            } catch (error) {
                errorHandler(error, callback)
            }
        }

        if (id) {
            editTag(id, data)
        }
    }

    return (
        <Card title="Edit tag">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: TagEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <TagEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: TagEditForm */}
            </div>
        </Card>
    )
}

export default Edit