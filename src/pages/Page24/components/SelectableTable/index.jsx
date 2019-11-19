import React, { Component } from 'react';
import { Table, Button, Icon, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const getMockData = () => {
  const result = [
    {
      title: {
        title: {
          name: '1',
        },
      },
    },
    {
      title: {
        title: {
          name: '2',
        },
      },
    },
  ];
  for (let i = 0; i < 10; i++) {
    result.push({
      id: 100306660940 + i,
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
      },
      type: 'demo示例',
      template: '参数字典列表',
      status: '已发布',
      publisher: '小马',
      rate: '5',
      time: 2000 + i,
    });
  }
  return result;
};

// 注意：下载数据的功能，强烈推荐通过接口实现数据输出，并下载
// 因为这样可以有下载鉴权和日志记录，包括当前能不能下载，以及谁下载了什么

export default class SelectableTable extends Component {
  static displayName = 'SelectableTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    // 表格可以勾选配置项
    this.rowSelection = {
      // 表格发生勾选状态变化时触发
      onChange: (ids) => {
        console.log('ids', ids);
        this.setState({
          selectedRowKeys: ids,
        });
      },
      // 全选表格时触发的回调
      onSelectAll: (selected, records) => {
        console.log('onSelectAll', selected, records);
      },
      // 支持针对特殊行进行定制
      getProps: (record) => {
        return {
          disabled: record.id === 100306660941,
        };
      },
    };

    this.state = {
      selectedRowKeys: [],
      dataSource: getMockData(),
    };
  }

  clearSelectedKeys = () => {
    this.setState({
      selectedRowKeys: [],
    });
  };

  deleteSelectedKeys = () => {
    const { selectedRowKeys } = this.state;
    console.log('delete keys', selectedRowKeys);
  };

  deleteItem = (record) => {
    const { id } = record;
    console.log('delete item', id);
  };

  renderOperator = (value, index, record) => {
    return (
      <div>
        <a>编辑</a>
        <a
          className={styles.removeBtn}
          onClick={this.deleteItem.bind(this, record)}
        >
          删除
        </a>
      </div>
    );
  };

  render() {
    return (
      <div className={`${styles.selectableTable} selectable-table`} >
       
        <IceContainer>
          <Table
            dataSource={this.state.dataSource}
            loading={this.state.isLoading}
            rowSelection={{
              ...this.rowSelection,
              selectedRowKeys: this.state.selectedRowKeys,
            }}
          >
            <Table.Column title="编码" dataIndex="id" width={120} />
            <Table.Column title="名称" dataIndex="title.name" width={350} />
           
          </Table>
        </IceContainer>
      </div>
    );
  }
}


