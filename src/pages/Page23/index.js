import React, { Component } from 'react';
import ModelCards from './components/ModelCards';

export default class Page23 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page23-page">
        {/* 适用于多数据卡片展示的场景 */}
        <ModelCards />
      </div>
    );
  }
}
