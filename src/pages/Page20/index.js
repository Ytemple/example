import React, { Component } from 'react';
import BoardList from './components/BoardList';

export default class Page20 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page20-page">
        {/* TODO 任务管理面板，可拖拽排序 */}
        <BoardList />
      </div>
    );
  }
}
