import React from 'react';
import { Card, Collapse, Table, message, theme } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import errorHandler from '../../utils/errorHandler';
import type { SorterResult } from 'antd/es/table/interface';
import { PAGE_SIZE } from '../../configs/settings';
import TableRowAction from '../../components/common/TableRowAction';
import { CategoryFilterForm } from '../../components/Category';
import TableHeaderAction from '../../components/common/TableHeaderAction';
import { categoryService } from '../../services';

interface DataType {
  id: number | string;
  name: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
}

const getColumns = (onReview: (id: number | string) => void, onDelete: (id: number | string) => void): ColumnsType<DataType> => {
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      fixed: 'right',
      width: 100,
      render: (_, record) => (
        <TableRowAction id={record.id} onReview={onReview} onDelete={onDelete} editLink={`/category/${record.id}/edit`} />
      ),
    },
  ];
}

const List: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
  const [tableParams, setTableParams] = React.useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: PAGE_SIZE,
    }
  });
  const [loadingData, setLoadingData] = React.useState<boolean>(false);
  const [data, setData] = React.useState<DataType[]>([]);

  /**
   * Load data list
   */
  const fetchData = async () => {
    setLoadingData(true)
    try {
      const res = await categoryService.getCategoryList({})
      const data = res.data

      setData(data?.results)
      // setTableParams({
      //   ...tableParams,
      //   pagination: {
      //     ...tableParams.pagination,
      //     total: data.totalCount,
      //   },
      // });
    } catch (error) {
    } finally {
      setLoadingData(false)
    }
  };


  React.useEffect(() => {
    fetchData();
  }, [tableParams])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleTableChange = (
    pagination: TablePaginationConfig,
    sorter: SorterResult<DataType>,
  ) => {
    setTableParams({
      pagination: pagination,
      sortField: sorter.field?.toString(),
      sortOrder: sorter.order?.toString()
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  /**
   * Delete from id list
   * @param idList 
   */
  const handleDeleteMany = (idList: React.Key[]) => {
    console.log("DELETE: ", idList)
  }

  /**
   * Delete from id
   * @param id 
   */
  const handleDeleteById = (id: number | string) => {
    // const deleteProfession = async (professionId: number | string) => {
    //   try {
    //     await professionService.deleteProfessionById(professionId)
    //     message.success("Delete sucess")
    //   } catch (error) {
    //     errorHandler(error);
    //   }
    // }

    // deleteProfession(id)
  }

  /**
   * Review from id
   * @param id
   */
  const handleReview = (id: number | string) => {
    alert("Review: " + id)
  }

  /**
   * Export data 
   * @param idList 
   */
  const handleExport = (idList: React.Key[]) => {
    console.log("EXPORT: ", idList)
  }



  return (
    <Card title="Categories">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        <div>
          {/* Start: TableHeaderAction */}
          <TableHeaderAction addLink='/category/add' idList={selectedRowKeys} onDeleteMany={handleDeleteMany} onExport={handleExport} />
          {/* End: TableHeaderAction */}

          <div style={{ marginTop: 20, marginBottom: 15 }}>
            <Collapse
              items={[{
                key: 'FILTER', label: 'Filter', children: <CategoryFilterForm onSubmit={(data) => { console.log(data) }} />
              }]}
            />
          </div>

          {/* Start: Table */}
          <Table
            loading={loadingData}
            rowKey={(record) => record.id}
            rowSelection={rowSelection}
            columns={getColumns(handleReview, handleDeleteById)}
            dataSource={data}
            pagination={tableParams.pagination}
            onChange={(pagination, _, sorterResult) => handleTableChange(pagination, sorterResult as SorterResult<DataType>)}
          />
          {/* End: Table */}
        </div>
      </div>
    </Card>
  );
};

export default List