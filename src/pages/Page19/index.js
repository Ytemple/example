import React, { Component } from 'react';
import GridLayout from './components/GridLayout';

export default class Page19 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page19-page">
        {/* 可拖拽和调整大小的网格布局 */}
        <GridLayout />
      </div>
    );
  }
}
