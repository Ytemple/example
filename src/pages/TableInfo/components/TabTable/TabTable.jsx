import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';
import data from './data';
import {Button} from '@alifd/next';
import { Link } from 'react-router-dom';
import NewDialog from './components/NewDialog';
//import TableFilter from '../../../LibManagement/components/LibTable/TableFilter'



const config = [
  {
    label: '图书名称',
    component: 'Input',
    componnetProps: {
      placeholder: '请输入',
    },
    formBinderProps: {
      name: 'bookName',
      triggerType: 'onBlur',
    },
  },
  {
    label: '作者名称',
    component: 'Input',
    componnetProps: {
      placeholder: '请输入',
    },
    formBinderProps: {
      name: 'authorName',
      triggerType: 'onBlur',
    },
  },
  {
    label: 'ISBN 号',
    component: 'Input',
    componnetProps: {
      placeholder: '请输入',
    },
    formBinderProps: {
      name: 'isbn',
      triggerType: 'onBlur',
    },
  },
  {
    label: '图书分类',
    component: 'Input',
    componnetProps: {
      placeholder: '请选择',
      options: [
        {
          lable: '技术领域',
          value: 'technology',
        },
        {
          lable: '专业领域',
          value: 'professional',
        },
        {
          lable: '管理沟通',
          value: 'management',
        },
        {
          lable: '其他',
          value: 'other',
        },
      ],
    },
    formBinderProps: {
      name: 'cate',
      triggerType: 'onBlur',
    },
  },
  {
    label: '出版社',
    component: 'Input',
    componnetProps: {
      placeholder: '请输入',
    },
    formBinderProps: {
      name: 'publisher',
      triggerType: 'onBlur',
    },
  },
];


let num=1


export default class TabTable extends Component {
  static displayName = 'TabTable';
   
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: data,
      numa:num,
    };
    this.columns = [
      {
        title: '产品名称hajhfajkshfjshafjkahsjkfhjkashfjkdashfjkahsfjahsjkfhajkgfhajkhgfiuahrgifahsjksvchaisuhca',
        dataIndex: 'engineerName',
        key: 'engineerName',
      },
      {
        title: '设计阶段',
        dataIndex: 'stage',
        key: 'stage',
      },
      {
        title: '工程类别',
        dataIndex: 'engineerClasses',
        key: 'engineerClasses',
      },
      {
        title: '产品型号',
        dataIndex: 'productModel',
        key: 'productModel',
      },
                                                                                   
      {
        title: '产品类别',
        dataIndex: 'productType',
        key: 'productType',
      },
      {
        title: '工程类别',
        dataIndex: 'engineerClasses',
        key: 'engineerClasses',
      },
      {
        title: '产品型号',
        dataIndex: 'productModel',
        key: 'productModel',
      },
                                                                                   
      {
        title: '产品类别',
        dataIndex: 'productType',
        key: 'productType',
      },
      {
        title: '工程类别',
        dataIndex: 'engineerClasses',
        key: 'engineerClasses',
      },
      {
        title: '产品型号',
        dataIndex: 'productModel',
        key: 'productModel',
      },
                                                                                   
      {
        title: '产品类别',
        dataIndex: 'productType',
        key: 'productType',
      },
      {
        title: '工程类别',
        dataIndex: 'engineerClasses',
        key: 'engineerClasses',
      },
      {
        title: '产品型号',
        dataIndex: 'productModel',
        key: 'productModel',
      },
                                                                                   
      {
        title: '产品类别',
        dataIndex: 'productType',
        key: 'productType',
      },
      {
        title: '工程类别',
        dataIndex: 'engineerClasses',
        key: 'engineerClasses',
      },
      {
        title: '产品型号',
        dataIndex: 'productModel',
        key: 'productModel',
      },
                                                                                   
      {
        title: '产品类别',
        dataIndex: 'productType',
        key: 'productType',
      },
      {
        title: '工程类别',
        dataIndex: 'engineerClasses',
        key: 'engineerClasses',
      },
      {
        title: '产品型号',
        dataIndex: 'productModel',
        key: 'productModel',
      },
                                                                                   
      {
        title: '产品类别',
        dataIndex: 'productType',
        key: 'productType',
      },
      
      {
        title: '产品类别',
        dataIndex: 'productType',
        key: 'productType',
      },
      {
        title: '新建日期',
        dataIndex: 'createDate',
        key: 'createDate',
      },
      {
        title: '新建人',
        dataIndex: 'createPerson',
        key: 'createPerson',
      },
      {
        title: '描述',
        dataIndex: 'describe',
        key: 'describe',
      },
      {
        title: '操作',
        key: 'action',
        render: (value, index, record) => {
          return (
            <span>
              <EditDialog
                index={index}
                record={record}
                getFormValues={this.getFormValues}
              />
              <DeleteBalloon
                handleRemove={() => this.handleRemove(value, index, record)}
              />
              <NewDialog
                index={index}
                record={record}
              />
            </span>
          );
        },
      },
    ];
  }

  getFormValues = (dataIndex, values) => {
    const { dataSource } = this.state;
    dataSource[dataIndex] = values;  //将修改后的表单数据响应的赋值进去。
    this.setState({
      dataSource,
    });
  };
 
  handleRemove = (value, index) => {
    const { dataSource } = this.state;
    dataSource.splice(index, 1);
    console.log(value); //这里打印输出的value值是true 或者是false
    console.log(dataSource[index].id); 
    console.log(index);
    this.setState({
      dataSource,
    });
     
  };

  newRow = (dataIndex, values) => {
    const { dataSource } = this.state;
    dataSource.splice(dataIndex+1, 0,values);
    this.setState({
      dataSource,
    });
  };

  handleFilter = (value) => {
    const { dataSource } = this.state;
    console.log('ffffff')
    console.log(this.state.dataSource)
    let newDatasouce=dataSource.filter(array => array.engineerName===value.bookName);
    this.setState({
      dataSource:newDatasouce
    });
  };

  handleSend = () => {
    const { dataSource,numa } = this.state;
    //dataSource.splice(1, 3);
    this.setState({
      dataSource,
      numa:3
    });
  };

  render() {
    return (
        <div>
        
        <Button onClick={this.handleSend}>搜索</Button>
        <IceContainer>          
                  <CustomTable
                    dataSource={this.state.dataSource}
                    columns={this.columns}
                    hasBorder={false}
                  />               
        </IceContainer>
        <div>
        {this.state.numa}
        </div>
        </div>
    );
  }
}
