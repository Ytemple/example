 import $ from  'jquery';
let data =  [];
$.ajax({
  type: "GET",
  url: 'https://www.apiopen.top/weatherApi?city=武汉',
  dataType: 'JSON', 
  async: false,
  success: function(shuju){
    shuju.data.forecast.map((item, i) => {
      data.push  (
        {
          stage:item.date,
          engineerName: item.date,
          engineerClasses: item.high,
          productModel:item.fengli,
          productType: item.low,
          createDate: item.fengxiang,
          createPerson: item.type,
          describe: i+1,
          id:i
        },
      )
    });
    return false;
  },
  error: function() { 
     //alert("异常！");  
  }  
});
    
export default data;

/** 
import $ from 'jquery'

let data = [];

 $.ajax({
 type: "GET",
 url: 'http://localhost:9001/engineerInfo/base',
 contentType: "application/json;charset=UTF-8",
 headers:{'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyTmFtZSI6InJvb3QiLCJleHAiOjE1NTczODg3OTV9.fi-qQd_q4syhkV-0s9a2676zSj6U4uMTl9tn2k-NQqBhhF-L22iilfACbgb1M1urcxiAmucRhwhhF1JbMnm1hQ'},
 dataType: 'JSON', 
 async: false,
 success: function(shuju){

     shuju.data.forEach(item => {
         data.push (
             {
            id:item.id,
            engineerName: item.engineerName,
            engineerClasses: item.engineerClasses,
            productModel:item.productModel,
            productType: item.productType,
            createDate: item.createDate,
            createPerson: item.createPerson,
            description: item.description
             })
         console.log(item);
     });
 

    return false;
 },
 error: function() { 
 alert("异常！"); 
 } 
});

export default data;
*/
