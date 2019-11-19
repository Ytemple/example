import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IceContainer from '@icedesign/container';
import { Button } from '@alifd/next';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './index.scss';

import axios from 'axios';
import $ from  'jquery';

export default class BasicGridLayout extends Component {
  static displayName = 'BasicGridLayout';
  constructor(props){
    super(props)
    this.state={
      page:1,
    }
  }


  click=()=>{
    /** 
  axios.get('https://www.easy-mock.com/mock/5db14836d9f3aa5b4d9034ce/examplerr/getTable')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
*/
  $.ajax({
    type: "GET",
    url: 'https://www.easy-mock.com/mock/5db14836d9f3aa5b4d9034ce/examplerr/getTable',
    dataType: 'JSON', 
    async: false,
    success: function(shuju){
      console.log(shuju )
    },
    error: function() { 
       //alert("异常！");  
    }  
  });

    this.setState({
      page:22
    })

  }

  render() {
  let {page} =this.state
    function content() {
      if(page===1){
        return (
          <div>234</div>
        )
      }else if(page===22){
        return(
          <div>555</div>
        )
      }
  }
    return (
    <div>
    <Button onClick={this.click}>change</Button>
     <div>{content()}</div>
     </div>
    );
  }
}

const styles = {
  groupButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};
