import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Spin, message, theme } from 'antd'
import { FieldData } from 'rc-field-form/es/interface';
import { EditFormInterface as ProductTypeEditFormInterface } from '../../components/ProductType/interfaces';
import { ProductTypeEditForm } from '../../components/ProductType';
import { productTypeService } from '../../services';
import errorHandler from '../../utils/errorHandler';

const Edit: React.FC = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const { id } = useParams();
    const nav = useNavigate()
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


    const handleSubmit = (data: ProductTypeEditFormInterface, callback: (serverErrors: FieldData[]) => void) => {
        const editProductType = async (id: string | number, productTypeData: ProductTypeEditFormInterface) => {
            try {
                await productTypeService.updateProductTypeById(id, productTypeData)
                message.success("Update product type success.")

                nav(-1)
            } catch (error) {
                errorHandler(error, callback)
            }
        }

        if (id) {
            editProductType(id, data)
        }
    }

    return (
        <Card title="Edit product type">
            <div style={{ minHeight: 360, background: colorBgContainer }}>
                {/* Start: ProductTypeEditForm */}
                <Spin tip="Loading..." spinning={loading}>
                    <ProductTypeEditForm
                        editData={editData}
                        onSubmit={handleSubmit}
                    />
                </Spin>
                {/* End: ProductTypeEditForm */}
            </div>
        </Card>
    )
}

export default Edit