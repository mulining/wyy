$(function(){  
  $('#upLoad').on('change',function(){  
      var filePath = $(this).val(),         //获取到input的value，里面是文件的路径  
          fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),  
          imgBase64 = '',      //存储图片的imgBase64  
          fileObj = document.getElementById('upLoad').files[0]; //上传文件的对象,要这样写才行，用jquery写法获取不到对象  
            
      // 检查是否是图片  
      if( !fileFormat.match(/.png|.jpg|.jpeg/) ) {  
          alert('上传错误,文件格式必须为：png/jpg/jpeg');  
          return;    
      }  

      // 调用函数，对图片进行压缩  
      compress(fileObj,function(imgBase64){  
          imgBase64 = imgBase64;    //存储转换的base64编码  
          $('#viewImg').attr('src',imgBase64); //显示预览图片  
      });  
  });  

   // 不对图片进行压缩，直接转成base64  
  function directTurnIntoBase64(fileObj,callback){  
      var r = new FileReader();  
      // 转成base64  
      r.onload = function(){  
         //变成字符串  
          imgBase64 = r.result;  
          console.log(imgBase64);  
          callback(imgBase64);  
      }  
      r.readAsDataURL(fileObj);    //转成Base64格式  
  }  

     // 对图片进行压缩  
  function compress(fileObj, callback) {   
      if ( typeof (FileReader) === 'undefined') {    
          console.log("当前浏览器内核不支持base64图标压缩");    
          //调用上传方式不压缩    
          directTurnIntoBase64(fileObj,callback);  
      } else {    
          try {      
              var reader = new FileReader();    
              reader.onload = function (e) {    
                  var image = $('<img/>');    
                  image.load(function(){    
                      square = 700,   //定义画布的大小，也就是图片压缩之后的像素  
                      canvas = document.createElement('canvas'),   
                      context = canvas.getContext('2d'),  
                      imageWidth = 0,    //压缩图片的大小  
                      imageHeight = 0,   
                      offsetX = 0,   
                      offsetY = 0,  
                      data = '';   

                      canvas.width = square;    
                      canvas.height = square;   
                      context.clearRect(0, 0, square, square);     

                      if (this.width > this.height) {    
                          imageWidth = Math.round(square * this.width / this.height);    
                          imageHeight = square;    
                          offsetX = - Math.round((imageWidth - square) / 2);    
                      } else {    
                          imageHeight = Math.round(square * this.height / this.width);    
                          imageWidth = square;    
                          offsetY = - Math.round((imageHeight - square) / 2);    
                      }    
                      context.drawImage(this, offsetX, offsetY, imageWidth, imageHeight);    
                      var data = canvas.toDataURL('image/jpeg');    
                      //压缩完成执行回调    
                       callback(data);    
                  });    
                  image.attr('src', e.target.result);    
              };    
              reader.readAsDataURL(fileObj);    
          }catch(e){    
              console.log("压缩失败!");    
              //调用直接上传方式  不压缩   
              directTurnIntoBase64(fileObj,callback);   
          }    
      }  
  }  
});  