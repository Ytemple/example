import React, { Component } from 'react';
import { Dialog, Button, Form, Input, Field,DatePicker, } from '@alifd/next';
import FTable from '../../FTable/FTable'
const FormItem = Form.Item;

export default class GetRate extends Component {
  static displayName = 'GetRate';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      dataIndex: null,
      record:'',
    };
    this.field = new Field(this);
  }
/**点击提交之后的方法 */
  handleSubmit = () => {
    const {record}=this.state
    const {failRate} =this.props
    let recordData =""
    for(let i=0;i<record.length;i++){
      recordData=recordData+'  '+record[i].failRate
    }

    this.props.getData(recordData)
    this.setState({
      visible: false,
    });
  };

  onOpen = (index, record) => {
    this.field.setValues({ ...record }); //将field中的数据设成为record
    this.setState({
      visible: true,
      dataIndex: index,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  /**子组件Ftable中的方法 */
  chooseRow=(selectedRowKeys,records)=>{
    console.log('chooserow')
    console.log(records)
    console.log(records[0])
    this.setState({
      record:records,
    });
  }

  render() {
    const init = this.field.init;
    const { index, record } = this.props;  //父组件传过来的index和record
    const formItemLayout = {
      labelCol: {    //控制第一级 Item 的 labelCol
        fixedSpan: 6,
      },
      wrapperCol: {   //控制第一级 Item 的 wrapperCol	
        span: 14,
      },
    };

    return (
      <div style={styles.editDialog}>
        <Button
          size="small"
          type="primary"
          onClick={() => this.onOpen(index, record)}
        >
          选择
        </Button>
        <Dialog
          style={{ width: 880 }}
          visible={this.state.visible}  //通过在这儿的设置，实现了是否使得视图可见
         onOk={this.handleSubmit}
          closeable="esc,mask,close"
          onCancel={this.onClose}
          onClose={this.onClose}
          title=""
        >
          <FTable chooseRow={this.chooseRow}></FTable>
        </Dialog>
      </div>
    );
  }
}

const styles = {
  editDialog: {
    display: 'inline-block',
    marginRight: '5px',
  },
};
