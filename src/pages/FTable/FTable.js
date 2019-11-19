import { Table, Pagination, Button } from '@alifd/next';
import React, { Component } from 'react';
//import TableFilter from '../LibManagement/components/LibTable/TableFilter'
import EditDialog from '../ReliableBasic/EditDialog'
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
  
    const result1 =[
        {
            pageNum:1,
            pageSize:1,
            pagelist:[
                {
                     id:'1',
                     type:'12',
                     subType:1,
                     failRate:1,
                    environment:1,
                     dataSource:1,
                    quality:1,
                     createTime:1,
                     updateTime:1,
                    isDeleted:1,
                },
                {
                    id:'2',
                    type:'2',
                    subType:2,
                    failRate:2,
                   environment:2,
                    dataSource:2,
                   quality:2,
                    createTime:2,
                    updateTime:2,
                   isDeleted:2,
               },
            ]
        },
        {
            pageNum:2,
            pagelist:[
                {
                    id:4,
                    title:1,
                    time:1
                },
                {
                    id:5,
                    title:2,
                    time:2
                },
                {
                    id:6,
                    title:3,
                    time:3
                },
            ]
        },
        {
            pageNum:3,
            pagelist:[
                {
                    id:7,
                    title:1,
                    time:1
                },
                {
                    id:8,
                    title:2,
                    time:2
                },
                {
                    id:9,
                    title:3,
                    time:3
                },
            ]
        },
    ]

    
{/** 
    render = (value, index, record) => {
        return <a href="javascript:;">Remove({record.id})</a>;
    };
*/}
    export default class FTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //dataSource: dataSource(0,3)
            dataSource:result1[0].pagelist,
            total:result1.length,
            checked: false,
            rowkey: '',
        };
    }

    choose=()=>{
      alert("hh")
    }

    onChange = (currentPage) => {
        this.setState({
            loading: true
        });
        console.log('hhhh')
        console.log(this.state.loading)
        setTimeout(() => {
            this.setState({
                dataSource:result1[currentPage-1].pagelist,
               // dataSource: dataSource((currentPage-1)*3,currentPage *3),
                loading: false,
                total:result1.length
            });
        }, 200);

        console.log(this.state.dataSource)
        console.log(this.state.loading)
    }

    handleFilter = (value) => {
        console.log('ffffff')
        //console.log(dataSource.type)
        let newDatasouce=result1[0].pagelist.filter(
          //array => array.type===value.bookName
          (array)=>{
            console.log(array.type) 
            console.log(value.bookName) 
       //  return (value.bookName).match(array.type)
        let a=(value.bookName).indexOf(array.type)
        if(a!=-1){
          return true
        }
      });
        this.setState({
          dataSource:newDatasouce,
        });
        console.log(this.state.dataSource)
    };

    rowSelection=(selectedRowKeys,records)=>{
        console.log('information')
        console.log(selectedRowKeys)
        console.log(records)
        this.setState({
          rowkey:selectedRowKeys,
        });
        this.props.chooseRow(selectedRowKeys,records)
    }
   
     
    render() {
        return (
            <div >
            <div>
           
            </div >
            <div style={styles.table}>
                <Table 
                dataSource={this.state.dataSource}
                loading={this.state.loading}
                rowSelection={{
                   mode:'multiple',
                   onChange: this.rowSelection 
                }}
                    >
                    <Table.Column title="Id1" dataIndex="id" width={150} />
                    <Table.Column title="型号" dataIndex="type" width={150} />
                    <Table.Column title="子类型" dataIndex="subType" width={150} />
                    <Table.Column title="故障率" dataIndex="failRate" width={150} />
                    <Table.Column title="环境" dataIndex="environment" width={150} />
                    <Table.Column title="数据" dataIndex="dataSource" width={150} />
                    <Table.Column title="品质" dataIndex="quality" width={550} />
                    <Table.Column title="Id1" dataIndex="id" width={150} />
                    <Table.Column title="型号" dataIndex="type" width={150} />
                    <Table.Column title="子类型" dataIndex="subType" width={150} />
                    <Table.Column title="故障率" dataIndex="failRate" width={150} />
                    <Table.Column title="环境" dataIndex="environment" width={150} />
                    <Table.Column title="数据" dataIndex="dataSource" width={150} />
                    <Table.Column title="品质" dataIndex="quality" width={550} />
                    <Table.Column title="子类型" dataIndex="subType" width={150} />
                    <Table.Column title="故障率" dataIndex="failRate" width={150} />
                    <Table.Column title="环境" dataIndex="environment" width={150} />
                    <Table.Column title="数据" dataIndex="dataSource" width={150} />
                    <Table.Column title="品质" dataIndex="quality" width={550} />
                    <Table.Column title="子类型" dataIndex="subType" width={150} />
                    <Table.Column title="故障率" dataIndex="failRate" width={150} />
                    <Table.Column title="环境" dataIndex="environment" width={150} />
                    <Table.Column title="数据" dataIndex="dataSource" width={150} />
                    <Table.Column title="品质" dataIndex="quality" width={550} />
                </Table>
                <Pagination 
                onChange={this.onChange}
                pageSize={100/3}
                className="page-demo" /> 
              </div>
            </div>
            );
    }
}
const styles={
  table:{
   // width:'100%',
    overflow :'scroll',
  },
  
}