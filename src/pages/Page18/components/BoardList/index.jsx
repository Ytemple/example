import React, { Component } from 'react';
import Board from 'react-trello';
import styles from './index.module.scss';
import { Button } from '@alifd/next';

export default class BoardList extends Component {
  static displayName = 'BoardList';

  handleDragStart = (cardId, laneId) => {
    console.log('handleDragStart:', cardId, laneId);
  };

  handleDragEnd = (cardId, sourceLaneId, targetLaneId, position) => {
    console.log('handleDragEnd:', cardId, sourceLaneId, targetLaneId, position);
  };

  shouldReceiveNewData = (nextData) => {
    console.log('shouldReceiveNewData');
    console.log(nextData);
  };

  handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`);
  };

  render() {
    const data = {
      lanes: [
        {
          id: '1',
         // label: '3/3',
          title: '选择列表',
          /** 
          "style": {
            "width": 500,
            "color":"red",
            backgroundColor: 'green'
          },
          */
          canAddLanes:true,
          cards: [
            {
              id: 'Card1',
              title: '数据预处理',
              description: '数据预处理',
            //  label: '30 mins',
            },
            {
              id: 'Card2',
              title: '特征提取',
              description: '特征提取',
            //  label: '5 mins',
              metadata: { sha: 'be312a1' },
            },
            {
              id: 'Card3',
              title: '特征筛选',
              description: '特征筛选',
              //label: '5 mins',
              metadata: { sha: 'be312a1' },
            },
            {
              id: 'Card4',
              title: '打标签',
              description: '打标签',
              //label: '5 mins',
              metadata: { sha: 'be312a1' },
            },
            {
              id: 'Card5',
              title: '数据集构建',
              description: '数据集构建',
              //label: '5 mins',
              metadata: { sha: 'be312a1' },
            },
            {
              id: 'Card6',
              title: '模型训练',
              description: '模型训练',
              //label: '5 mins',
              metadata: { sha: 'be312a1' },
            },
            {
              id: 'Card7',
              title: '模型校验',
              description: '模型校验',
              //label: '5 mins',
              metadata: { sha: 'be312a1' },
            },
          ],
        },
        {
          id: '2',
         // label: '3/3',
          title: '执行顺序',
          cards: [
            
          ],
        },
        {
          id: '3',
        //  label: '3/3',
          title: '删除框',
          cards: [
            
          ],
        },

      ],
    };
    return (
      <div className={styles.boardList}>
        <Board
          style={{ background: '#fff', padding: '12px',}}
          laneStyle={{backgroundColor: 'blue'}}
          cardStyle={{backgroundColor: 'yellow'}}
          data={data}
          draggable
          collapsibleLanes
          handleDragStart={this.handleDragStart}
          handleDragEnd={this.handleDragEnd}
          onDataChange={this.shouldReceiveNewData}
          onCardAdd={this.handleCardAdd}

          
          editable
          
        />

      </div>
    );
  }
}