import { Search, Tree } from '@alifd/next';
import React, { Component } from 'react';


const data = [{
    label: 'Component',
    key: 10,
    children: [{
        label: 'Form',
        key: '2',
        children: [{
            label: 'Input',
            key: '4'
        }, {
            label: 'Select',
            key: '5'
        }]
    }, {
        label: 'Display',
        key: '3',
        children: [{
            label: 'Table',
            key: '6'
        }]
    }]
}];


export default class treeSearch extends Component{

    constructor(props) {
        super(props);

        this.state = {
            expandedKeys: ['2','3'],
            autoExpandParent: true//是否自动展开父节点
        };
        this.matchedKeys = [];
        this.handleSearch = this.handleSearch.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
    }

    handleSearch(value) {
        value = value.trim();
        if (!value) {
            this.matchedKeys = null;
            return;
        }

        const matchedKeys = [];
        const loop = data => data.forEach(item => {
            if (item.label.indexOf(value) > -1) {
                matchedKeys.push(item.key);
            }
            if (item.children && item.children.length) {
                loop(item.children);
            }
        });
        loop(data);

        this.setState({
            expandedKeys: [...matchedKeys],
            autoExpandParent: true
        });
        this.matchedKeys = matchedKeys;
    }

    handleExpand(keys) {
        this.setState({
            expandedKeys: keys,
            autoExpandParent: false
        });
    }

    render() {
        const { expandedKeys, autoExpandParent } = this.state;
        const filterTreeNode = node => {
            return this.matchedKeys && this.matchedKeys.indexOf(node.props.eventKey) > -1;
        };

        return (
            <div>
                <Search shape="simple" size="medium" style={{ width: '200px', marginBottom: '10px' }} onChange={this.handleSearch} />
                <Tree 
                expandedKeys={expandedKeys} 
                autoExpandParent={autoExpandParent} 
                filterTreeNode={filterTreeNode} 
                onExpand={this.handleExpand} 
                dataSource={data} />
            </div>
        );
    }
}

