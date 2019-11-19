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
//import TableFilter from '../../../../../LibManagement/components/LibTable/TableFilter';

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
        title: '严酷度',
        dataIndex: 'severe',
        key: 'severe',
      },
      {
        title: '故障率',
        dataIndex: 'failureRate',
        key: 'failureRate',
      },
      {
        title: '侦测度',
        dataIndex: 'detectDegree',
        key: 'detectDegree',
      },
      {
        title: ' 风险优先数',
        dataIndex: ' riskPriority',
        key: ' riskPriority',
      },
      {
        title: '设计改进措施',
        dataIndex: 'designImprovementMeasures',
        key: 'designImprovementMeasures',
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
