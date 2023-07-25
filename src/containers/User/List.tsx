import React from 'react';
import { Avatar, Card, Collapse, Table, Tag, theme } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { SorterResult } from 'antd/es/table/interface';
import {
  UserOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import { PAGE_SIZE } from '../../configs/settings';
import TableRowAction from '../../components/common/TableRowAction';
import { UserFilterForm } from '../../components/User';
import TableHeaderAction from '../../components/common/TableHeaderAction';
import { userService } from '../../services';

interface DataType {
  id: number | string;
  avatarUrl: string | null;
  email: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  profession: { id: number | null, name: string | null };
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
      title: 'Avatar',
      dataIndex: 'avatarUrl',
      key: 'avatarUrl',
      render: (value) => {
        return <Avatar size="large" icon={<UserOutlined />} src={value} />
      }
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: true,
    },
    {
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: true,
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: true,
    },
    {
      title: 'Profession',
      dataIndex: 'profession',
      key: 'profession',
      render: (value) => {
        return value?.name || "---"
      }
    },
    {
      title: 'Active',
      dataIndex: 'isActive',
      key: 'isActive',
      sorter: true,
      render: (value) => {
        return <Tag icon={value ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
          color={value ? "success" : "error"}>
          {value ? "Active" : "Inactive"}
        </Tag>
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <TableRowAction id={record.id} onReview={onReview} onDelete={onDelete} editLink={`/user/${record.id}/edit`} />
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
      const res = await userService.getUserList({});
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
    alert("Delete: " + id)
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
    <Card title="Users">
      <div style={{ minHeight: 360, background: colorBgContainer }}>
        <div>
          {/* Start: TableHeaderAction */}
          <TableHeaderAction addLink='/user/add' idList={selectedRowKeys} onDeleteMany={handleDeleteMany} onExport={handleExport} />
          {/* End: TableHeaderAction */}

          <div style={{ marginTop: 20, marginBottom: 15 }}>
            <Collapse
              items={[{
                key: 'FILTER', label: 'Filter', children:  <UserFilterForm onSubmit={(data) => {console.log(data)}}/>
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