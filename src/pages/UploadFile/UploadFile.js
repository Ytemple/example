import { Upload, Button } from '@alifd/next';
import React, { Component } from 'react';
let i=100
const defaultValue = [{
    uid: '0',
    name: 'IMG.png',
    state: 'done',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    downloadURL: 'http://localhost:9001/file/source/download/6753386fddc52e880a70378e82ef7bad',
    imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    size: 2000
}, 
];

export default class UploadFile extends Component{
    constructor (props) {
        super(props);
        this.state = {
            valueList:defaultValue,
        };
    }

    beforeUpload=()=>{

    }
    onChange=()=>{
        
    }
    onRemove=(value)=>{
        console.log('value')
        console.log(value)
    }
    onSuccess=(file,value)=>{

       i++;
       console.log('filetest')
       console.log(file)
       console.log(value)
        const {valueList} =this.state;
        let newList={
                uid: i,
                name: file.name,
                state: 'done',
                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                downloadURL: 'http://localhost:9001/file/source/download/6753386fddc52e880a70378e82ef7bad',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
        };
        valueList.push(newList)
        this.setState({
            valueList:valueList,
        })

    }
    
    render() {
        return (
            <div>
           <Upload
                action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                beforeUpload={this.beforeUpload}
                onChange={this.onChange}
                onRemove={this.onRemove}
                onSuccess={this.onSuccess}
                listType="image"
                defaultValue={defaultValue}>
                <Button type="primary" style={{margin: '0 0 10px'}}>Upload File</Button>
            </Upload>
            </div>);
    }

}


