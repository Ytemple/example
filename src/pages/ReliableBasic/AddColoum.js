import { Table, Button, Dialog, Checkbox } from '@alifd/next';
import { Icon } from '@alifd/next';
import React, { Component } from 'react';
import EditDialog from './EditDialog'
import DeleteBalloon from './DeleteBalloon'
import  OperateEditDialog from './Operate/OperateEditDialog'
import $ from  'jquery';
const {Group} = Checkbox;

let dataSource = () => {
        let result =[{
            id: "1128174422742708226",
            componentNo: "1",
            itemName: "1",
            total: 1,
            failRate: 1,
            failMode: "1",
            failPercent: 1,
            materials: "1",
            yieldStrength: "1",
            extension: "1",
            remark: "1",
            capacity: "1",
            menuId: null,
            createTime: "2019-05-14T05:32:24.000+0000",
            updateTime: "2019-05-14T05:32:24.000+0000",
            prepare1:"",
            prepare2:1,
            prepare3:2,
        }]
        return result;
    }
    //在这里读取数据库中的数据
    const column = [{
        title: 'id',
        dataIndex: 'id'
      },   {
        title: '元器件编码',
        dataIndex: 'componentNo'
      }, {
        title: '名称',
        dataIndex: 'itemName'
      }, {
        title: '总计',
        dataIndex: 'total'
      }, {
        title: '故障率',
        dataIndex: 'failRate'
      }, {
        title: '故障模式',
        dataIndex: 'failMode'
      }, {
        title: '故障模式百分比',
        dataIndex: 'failPercent'
      }, {
        title: '材料',
        dataIndex: 'materials'
      }, {
        title: '屈服应力',
        dataIndex: 'yieldStrength'
      }, {
        title: '拉伸',
        dataIndex: 'extension'
      }, {
        title: '标记',
        dataIndex: 'remark'
      }, {
        title: '容量',
        dataIndex: 'capacity'
      },{
        title: '预留1',
        dataIndex: 'prepare1'
      },{
        title: '预留2',
        dataIndex: 'prepare2'
      },{
        title: '预留3',
        dataIndex: 'prepare3'
      },
      ];

    let num=12
    let timer


export default class AddColoum extends Component {
    static displayName = 'AddColoum';
   
    static propTypes = {};
  
    static defaultProps = {};

    constructor (props) {
        super(props);
       console.log('太可怕了')
       console.log(this.props)
        this.state = {
            dataSource: dataSource(),//表格中的值
            cols: column, //列名
            numa:num,
        };
     
    }
   
    componentDidMount () {
        const { cols } = this.state;
        let operate = {
          title: '操作',
          key: 'action',
          render: (value, index, record) => {
            return (
              <span>
                <OperateEditDialog
                  index={index}
                  record={record}
                  edit={this.edit}
                />
              </span>
            );
          },
        }
       if(cols.length<=15){
        cols.push(operate)
          this.setState ( {  //这儿重新渲染了，所以不存在不会渲染的问题。
            cols:cols,
          });
        }
    }
  
    
/**改表格数据 */
    edit=(values,dataIndex)=>{
       
            const { dataSource } = this.state;
            console.log(dataIndex)
            dataSource[dataIndex] = values;  //将修改后的表单数据响应的赋值进去。
            this.setState({
            dataSource,
            });
       
    }
    /**改字段名 */
    getFormValues = (values) => {
       
       console.log('hh')
       console.log(values)
       const { cols } = this.state;
       console.log(this.state)
       cols[12].title=values.prepare1
       cols[13].title=values.prepare2
       
       cols[14].title=values.prepare3
       this.setState({
        cols,
       })

    };
   
    renderCols() {
        const {cols} = this.state;
        return cols.map(col => {
            if (typeof col.render === 'function') {
                return (
                  <Table.Column
                    key={col.key}
                    title={col.title}
                    cell={col.render}
                    width={col.width || 150}
                  />
                );
              }
            return (
                <Table.Column title={col.title} dataIndex={col.dataIndex} key={col.dataIndex} />
            );
        });
    }
    render() {
      const {cols} = this.state ;
      let columnRecord={
        prepare1:cols[12].title ,
        prepare2:cols[13].title ,
        prepare3:cols[14].title,
      }
        return (
            <div>
            <EditDialog 
            getFormValues={this.getFormValues} 
            columnRecord={columnRecord}
            / >
                <Table dataSource={this.state.dataSource}>
                     {this.renderCols()} 
                </Table>
            </div>
        );
    }
    componentWillUnmount () {
        
    }
}









