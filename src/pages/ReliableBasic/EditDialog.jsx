import React, { Component } from 'react';
import { Dialog, Button, Form, Input, Field,DatePicker, } from '@alifd/next';

const FormItem = Form.Item;

export default class EditDialog extends Component {
  static displayName = 'EditDialog';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      dataIndex: null,
    };
    this.field = new Field(this);
  }

  handleSubmit = () => {
    this.field.validate((errors, values) => {
      console.log(values);   //这儿会输出打印的是表单里的数据
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      const { dataIndex } = this.state;
      this.props.getFormValues( values);  //父组件中定义的方法，在子组件中用，直接获取数据。
      this.setState({
        visible: false,
      });
    });
  };

  onOpen = (columnRecord) => {
    console.log('gogogo')
    console.log(columnRecord)
    this.field.setValues({ ...columnRecord });
    this.setState({
      visible: true,
      
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const init = this.field.init;
    const { columnRecord } = this.props;
    const formItemLayout = {
      labelCol: {
        fixedSpan: 6,
      },
      wrapperCol: {
        span: 14,
      },
    };

    return (
      <div style={styles.editDialog}>
        <Button
          size="small"
          type="primary"
          onClick={() => this.onOpen(columnRecord)}
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
          <Form field={this.field}>
            <FormItem label="预留1" {...formItemLayout}>
              <Input
                {...init('prepare1', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="预留2" {...formItemLayout}>
              <Input
                {...init('prepare2', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="预留3" {...formItemLayout}>
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
