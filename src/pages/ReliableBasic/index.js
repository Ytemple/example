import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@alifd/next';
import  AddColoum from './AddColoum';
import NumberTable from './FMEATable/Number/index'
import QualityTable from './FMEATable/Quality/index'
import  OperateEditDialog from './Operate/OperateEditDialog'

const TabPane = Tab.Item;



export default class DonationForm extends Component {
  static displayName = 'DonationForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    const tabs = [
      { tab: 'FMEA定性数据', key: '1', content: <QualityTable /> },
      { tab: '可靠性设计数据库', key: '2', content: <AddColoum /> },
      { tab: 'FMEA定量数据', key: '3', content: <NumberTable /> },
    ];

    return (
      <IceContainer style={styles.container}>
        <div style={styles.title}>数据库</div>
        <Tab>
          {tabs.map((item) => {
            return (
              <TabPane key={item.key} title={item.tab}>
                {item.content}
              </TabPane>
            );
          })}
        </Tab>
      </IceContainer>
    );
  }
}

const styles = {
  title: {
    marginBottom: '15px',
    fontSize: '18px',
    fontWeight: '500',
    color: 'rgba(0, 0, 0,.85)',
  },
};
