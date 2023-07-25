import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as CategoryEditFormInterface } from '../../components/Category/interfaces';
import { CategoryEditForm } from '../../components/Category';
import { categoryService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<CategoryEditFormInterface | null>(null)

    const fetchData = async (categoryId: string | number) => {
        setLoading(true);
        try {
            const res = await categoryService.getCategoryById(categoryId)
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


    const handleSubmit = (data: CategoryEditFormInterface) => {
        console.log(data);
    }

    return (
        <Card title="Edit category">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: CategoryEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <CategoryEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: CategoryEditForm */}
            </div>
        </Card>
    )
}

export default Edit