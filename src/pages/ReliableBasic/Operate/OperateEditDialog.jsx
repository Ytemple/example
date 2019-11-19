import React, { Component } from 'react';
import { Dialog, Button, Form, Input, Field,DatePicker, } from '@alifd/next';
import GetRate from './GetRate'

const FormItem = Form.Item;


export default class OperateEditDialog extends Component {
  static displayName = 'OperateEditDialog';

  static defaultProps = {};

  constructor(props) {
    
    super(props); 
    let field = new Field(this);
    this.state = {
      visible: false,
      dataIndex: null,
      field:field,
    };
    
  }

  handleSubmit = () => {
    this.state.field.validate((errors, values) => {   //validate  校验并获取一组输入域的值与 Error
      console.log(values);   //这儿会输出打印的是提交表单里的数据
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      const { dataIndex } = this.state;
      this.props.edit( values,dataIndex);  //父组件中定义的方法，在子组件中用，直接获取数据。
      this.setState({
        visible: false,
      });
    });
  };

  onOpen = (index, record) => {
    record.capacity=12345
    this.state.field.setValues({ ...record }); //将field中的数据设成为record
    console.log('wokao')
    console.log(record)
    console.log('wokao')
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

  getData=(data)=>{
    const { index, record } = this.props;
    record.failRate=data
    this.state.field.setValues({ ...record });
  }


  render() {
    const init = this.state.field.init;  //定义init 里面相当于填了value 和 onchange
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
          编辑
        </Button>
        <Dialog
          style={{ width: 640 }}
          visible={this.state.visible}  //通过在这儿的设置，实现了是否使得视图可见
          onOk={this.handleSubmit}
          closeable="esc,mask,close"
          onCancel={this.onClose}
          onClose={this.onClose}
          title="编辑"
        >
          <Form field={this.field}   >
         
            <FormItem label="元器件编码" {...formItemLayout}>
              <Input
                {...init('componentNo', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="名称" {...formItemLayout}>
              <Input
                {...init('itemName', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="总计" {...formItemLayout}>
              <Input
                {...init('total', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="故障率" {...formItemLayout}>
              <Input
              style={{ width:200 }}
                {...init('failRate', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
               <GetRate  getData={this.getData} failRate={'failRate'}/>
            </FormItem>
            <FormItem label="故障模式" {...formItemLayout}>
              <Input
                {...init('failMode', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="故障模式百分比" {...formItemLayout}>
              <Input
              style={{ width:200 }}
                {...init('failPercent', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="材料" {...formItemLayout}>
              <Input
                {...init('materials', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="屈服应力" {...formItemLayout}>
              <Input
                {...init('yieldStrength', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="拉伸" {...formItemLayout}>
              <Input
                {...init('extension', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="标记" {...formItemLayout}>
              <Input
                {...init('remark', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="容量" {...formItemLayout}>
              <Input
                {...init('capacity', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="预留1" {...formItemLayout}>
              <Input
                {...init('prepare1', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="预留2"   {...formItemLayout}>
              <Input 
               
                {...init('prepare2', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="预留3"  {...formItemLayout}>
              <Input
                {...init('prepare3', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
          
          </Form>
          
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
