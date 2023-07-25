import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, Spin, theme } from 'antd'
import { EditFormInterface as ProductTypeEditFormInterface } from '../../components/ProductType/interfaces';
import { ProductTypeEditForm } from '../../components/ProductType';
import { productTypeService } from '../../services';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [editData, setEditData] = React.useState<ProductTypeEditFormInterface | null>(null)

    const fetchData = async (productTypeId: string | number) => {
        setLoading(true);
        try {
            const res = await productTypeService.getProductTypeById(productTypeId);
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


    const handleSubmit = (data: ProductTypeEditFormInterface) => {
        console.log(data);
    }

    return (
        <Card title="Edit product type">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: ProductTypeEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <ProductTypeEditForm editData={editData} onSubmit={handleSubmit} />
                </Spin>
                {/* End: ProductTypeEditForm */}
            </div>
        </Card>
    )
}

export default Edit