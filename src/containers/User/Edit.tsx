import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface } from '../../components/User/interfaces';
import { UserEditForm } from '../../components/User';
import { userService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<EditFormInterface | null>(null)

    const fetchData = async (userId: string | number) => {
        setLoading(true);
        try {
            const res = await userService.getUserById(userId)
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


    const handleSubmit = (data: EditFormInterface) => {
        console.log(data);
    }

    return (
        <Card title="Edit user">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: UserEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <UserEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: UserEditForm */}
            </div>
        </Card>
    )
}

export default Edit