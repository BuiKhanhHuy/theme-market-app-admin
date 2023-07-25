import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as TagEditFormInterface } from '../../components/Tag/interfaces';
import { TagEditForm } from '../../components/Tag';
import { tagService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
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


    const handleSubmit = (data: TagEditFormInterface) => {
        console.log(data);
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