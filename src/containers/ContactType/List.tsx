import React from 'react';
import { Card, Collapse, Modal, Table, message, theme } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import type { SorterResult } from 'antd/es/table/interface';
import { PAGE_SIZE } from '../../configs/settings';
import TableRowAction from '../../components/common/TableRowAction';
import { ContactTypeFilterForm } from '../../components/ContactType';
import TableHeaderAction from '../../components/common/TableHeaderAction';
import { contactTypeService } from '../../services';
import errorHandler from '../../utils/errorHandler';

interface DataType {
  id: number | string;
  name: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  order: { sortField?: string, sortOrder?: string }
  search: { q?: string }
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
        <TableRowAction id={record.id} onReview={onReview} onDelete={onDelete} editLink={`/contact-type/${record.id}/edit`} />
      ),
    },
  ];
}

const List: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();
  const [modal, contextHolder] = Modal.useModal();
  const [selectedRowKeys, setSelectedRowKeys] = React.useState<React.Key[]>([]);
  const [tableParams, setTableParams] = React.useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: PAGE_SIZE,
      total: 0
    },
    order: {
      sortField: "",
      sortOrder: "",
    },
    search: {
      q: ""
    }
  });
  const [isReload, setIsReload] = React.useState<boolean>(false);
  const [loadingData, setLoadingData] = React.useState<boolean>(false);
  const [data, setData] = React.useState<DataType[]>([]);

  /**
   * Load data list
   */
  const fetchData = async () => {
    setLoadingData(true)
    try {
      const res = await contactTypeService.getContactTypeList({
        page: tableParams.pagination?.current || "",
        pageSize: tableParams.pagination?.pageSize || "",
        ...tableParams.order,
        ...tableParams.search
      })

      const data = res.data
      setData(data?.results)
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: data.totalCount,
        },
      });
    } catch (error) {
    } finally {
      setLoadingData(false)
    }
  };


  React.useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    tableParams.pagination?.pageSize,
    tableParams.pagination?.current,
    tableParams.order,
    tableParams.search,
    isReload
  ])

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
      ...tableParams,
      pagination: pagination,
      order: {
        sortField: sorter.field?.toString(),
        sortOrder: sorter.order?.toString()
      }
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const handleFilter = (data: any) => {
    setTableParams({
      ...tableParams,
      search: {
        ...tableParams.search,
        ...data
      }
    });
  }

  /**
   * Delete from id list
   * @param idList 
   */
  const handleDeleteMany = (idList: React.Key[]) => {
    const deleteContactTypeWithIdList = async (contactTypeIdList: number[]) => {
      try {
        await contactTypeService.deleteContactTypeWithIdList({
          idList: contactTypeIdList
        })

        setSelectedRowKeys([])
        setIsReload(!isReload)
        message.success("Delete success")
      } catch (error) {
        errorHandler(error);
      }
    }

    modal.confirm({
      title: `Are you sure delete ${selectedRowKeys.length} records?`,
      content: 'Do you really want to delete these records. This process cannot be undone.',
      okText: 'Delete',
      onOk: () => deleteContactTypeWithIdList(idList as number[])
    })
  }

  /**
   * Delete from id
   * @param id 
   */
  const handleDeleteById = (id: number | string) => {
    const deleteContactType = async (contactTypeId: number | string) => {
      try {
        await contactTypeService.deleteContactTypeById(contactTypeId)

        setIsReload(!isReload)
        message.success(`Delete ${selectedRowKeys.length} records success`)
      } catch (error) {
        errorHandler(error);
      }
    }

    deleteContactType(id)
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
    <>
      <Card title="Contact types">
        <div style={{ minHeight: 360, background: colorBgContainer }}>
          <div>
            {/* Start: TableHeaderAction */}
            <TableHeaderAction addLink='/contact-type/add' idList={selectedRowKeys} onDeleteMany={handleDeleteMany} onExport={handleExport} />
            {/* End: TableHeaderAction */}

            <div style={{ marginTop: 20, marginBottom: 15 }}>
              <Collapse
                items={[{
                  key: 'FILTER',
                  label: 'Filter',
                  children: <ContactTypeFilterForm
                    onSubmit={handleFilter}
                  />
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
      {contextHolder}
    </>
  );
};

export default List