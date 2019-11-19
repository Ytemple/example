import React, { Component } from 'react';
import SelectableTable from './components/SelectableTable';

export default class Page24 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page24-page">
        {/* 可批量操作的表格 */}
        <SelectableTable />
      </div>
    );
  }
}
