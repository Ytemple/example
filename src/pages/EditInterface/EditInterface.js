import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import {
  Input,
  Button,
  Select,
  Checkbox,
  Grid,
  DatePicker,
} from '@alifd/next'
import { Link } from 'react-router-dom'; 

const { Row, Col } = Grid;
const CheckboxGroup = Checkbox.Group;

export default class EditerInterdace extends Component {
  static displayName = 'GroupedForm';

  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {
      value: {
        stage:'',
        engineerName: '',
        engineerClasses: '',
        productModel: '',
        productType: '',
        createDate: '',
        createPerson: '',
        describe: '',
      },
     
    };
  }

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  reset = () => {
    this.setState({
      value: {
        stage:'',
        engineerName: '',
        engineerClasses: '',
        productModel: '',
        productType: '',
        createDate: '',
        createPerson: '',
        describe: '',
      },
    });
  }

  submit = () => {
    this.formRef.validateAll((error, value) => {
      console.log('error', error, 'value', value);
     
       const { dataSource } = this.state;
       dataSource.push(value);
     
       this.setState({
         dataSource,
       });

    });
  };

  render() {
    return (
      <div className="grouped-form">
        <IceContainer title="可靠性工程" style={styles.container}>
          <IceFormBinderWrapper
            ref={(formRef) => {
              this.formRef = formRef;
            }}
            value={this.state.value}
            onChange={this.onFormChange}
          >
            <div>

              <div style={styles.subForm}>
                <h3 style={styles.formTitle}>可靠性</h3>
                <div>
                  <Row style={styles.formItem}>
                    <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                      产品名称：
                    </Col>
                    <Col s="12" l="10">
                      <IceFormBinder name="engineerName">
                        <Input
                          size="large"
                          required
                          placeholder="请输入产品名称"
                          message="产品名称必须填写"
                          style={{ width: '100%' }}
                        />
                      </IceFormBinder>
                      <IceFormError name="engineerName" />    
                    </Col>
                  </Row>

                  <Row style={styles.formItem}>
                    <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                      阶段：
                    </Col>
                    <Col s="12" l="10">
                      <IceFormBinder name="stage">
                        <Select
                          className="next-form-text-align"
                          required
                          style={{ width: '30%' }}
                          message="阶段"
                          dataSource={[
                            { label: '阶段1', value: 'first' },
                            { label: '阶段2', value: 'secondhand' },
                            { label: '阶段3', value: 'third' },
                          ]}
                        />
                      </IceFormBinder>
                      <IceFormError name="stage" />
                    </Col>
                </Row>


                  <Row style={styles.formItem}>
                    <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                      工程类别：
                    </Col>
                    <Col s="12" l="10">
                      <IceFormBinder name="engineerClasses">
                        <Select
                          className="next-form-text-align"
                          required
                          style={{ width: '30%' }}
                          message="请选择工程类别"
                          dataSource={[
                            { label: '锚机', value: '锚机' },
                            { label: '舵机', value: '舵机' },
                            { label: '吊机', value: '吊机' },
                          ]}
                        />
                      </IceFormBinder>
                      <IceFormError name="engineerClasses" />
                    </Col>
                  </Row>
                  <Row style={styles.formItem}>
                    <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                      产品型号：
                    </Col>
                    <Col s="12" l="10">
                      <IceFormBinder name="productModel">
                        <Input
                          size="large"
                          required
                          placeholder="请输入产品型号"
                          message="产品型号必须填写"
                        />
                      </IceFormBinder>
                      <IceFormError name="productModel" />
                    </Col>
                  </Row>
{/**自己添加的部分 */}


                  <Row style={styles.formItem}>
                    <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                      产品类别：
                    </Col>
                    <Col s="12" l="10">
                      <IceFormBinder name="productType">
                        <Input
                          size="large"
                          required
                          placeholder="请输入产品类别"
                          message="产品类别必须填写"
                        />
                      </IceFormBinder>
                      <IceFormError name="productType" />
                    </Col>
                  </Row> 

   
                  <Row style={styles.formItem}>
                    <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                     日期：
                    </Col>
                    <Col s="12" l="10">
                    <IceFormBinder triggerType="onBlur" name="createDate">
                      <DatePicker placeholder="请输入" />
                    </IceFormBinder>
                      <IceFormError name="createDate" />
                    </Col>
                  </Row> 
                



                  <Row style={styles.formItem}>
                    <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                      新建人：
                    </Col>
                    <Col s="12" l="10">
                      <IceFormBinder name="createPerson">
                        <Input
                          size="large"
                          required
                          placeholder="请输入新建人"
                          message="新建人必须填写"
                        />
                      </IceFormBinder>
                      <IceFormError name="createPerson" />
                    </Col>
                  </Row>

                  <Row>
                    <Col xxs="8" s="3" l="3" style={styles.formLabel}>
                      描述：
                    </Col>
                    <Col s="12" l="10">
                      <IceFormBinder name="describe">
                        <Input multiple style={{ width: '100%' }} />
                      </IceFormBinder>
                    </Col>
                  </Row>
                </div>
              </div>

              <div style={styles.subForm}>

              </div>

              <Row style={styles.btns}>
                <Col xxs="6" s="3" l="3" style={styles.formLabel}>
                  {' '}
                </Col>
                <Col s="12" l="10">
                  <Link to="/TableInfo">
                  <Button type="primary" onClick={this.submit}>
                    立即创建
                  </Button>
                  </Link>
                  <Button style={styles.resetBtn} onClick={this.reset}>
                    重置
                  </Button>
                </Col>
              </Row>

            </div>
          </IceFormBinderWrapper>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 0,
  },
  subForm: {
    marginBottom: '20px',
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    fontSize: '14px',
    borderBottom: '1px solid #eee',
  },
  formItem: {
    height: '28px',
    lineHeight: '28px',
    marginBottom: '25px',
  },
  formLabel: {
    textAlign: 'right',
  },
  btns: {
    margin: '25px 0',
  },
  resetBtn: {
    marginLeft: '20px',
  },
};
