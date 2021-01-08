{/* <script type="text/javascript"> */}
// 页面加载时，隐藏myaddress新增地址弹出框、选择地址
$(function(){
    //选择地址
    $('#chooseaddress').hide();
    //新增收货地址
    $('#myaddress').hide();
    //选择发票
    $('#chooseinvoice').hide();
    //新增发票_专用
    $('#zhuaninvoice').hide();
    //新增发票_普通
    $('#puinvoice').hide();
    //增票开具确认书
    $('#addinvoice').hide();

    var body=document.body;
    var backgroundDiv=document.createElement("div");
    //点击新增地址，弹出新增收货地址对话框
    $('#newaddress').click(function(){
      $('#myaddress').show();
      backgroundDiv.style.cssText="left:0;top:0;position:fixed;background:#000000;opacity:0.5;width:100%;height:100%;z-Index:3";
      body.appendChild(backgroundDiv);
    })
    //点击新增发票，弹出新增发票对话框_普通
    $('#newinvoice').click(function(){
        $('#puinvoice').show();
        backgroundDiv.style.cssText="left:0;top:0;position:fixed;background:#000000;opacity:0.5;width:100%;height:100%;z-Index:3";
        body.appendChild(backgroundDiv);
    })
    //点击专用发票按钮，弹出专用发票详情对话框
    $('#zhuanradio').click(function(){
        $('#zhuaninvoice').show();
        backgroundDiv.style.cssText="left:0;top:0;position:fixed;background:#000000;opacity:0.5;width:100%;height:100%;z-Index:3";
        body.appendChild(backgroundDiv);
    })
    //点击《增票开具说明书》，弹出增票开具说明书对话框
    $('#addinvoicehh').click(function(){
        $('#addinvoice').show();
        backgroundDiv.style.cssText="left:0;top:0;position:fixed;background:#000000;opacity:0.5;width:100%;height:100%;z-Index:3";
        body.appendChild(backgroundDiv);
    })
    $('#addinvoicehhh').click(function(){
        $('#addinvoice').show();
        backgroundDiv.style.cssText="left:0;top:0;position:fixed;background:#000000;opacity:0.5;width:100%;height:100%;z-Index:3";
        body.appendChild(backgroundDiv);
    })
 
    // 点击设置按钮时，将选择地址显示
    $('#upateadderess').click(function(){
      $('#chooseaddress').show();
      backgroundDiv.style.cssText="left:0;top:0;position:fixed;background:#000000;opacity:0.5;width:100%;height:100%;z-Index:3";
      body.appendChild(backgroundDiv);
    })
    // 点击设置按钮时，将选择发票显示
    $('#updateinvoice').click(function(){
      $('#chooseinvoice').show();
      backgroundDiv.style.cssText="left:0;top:0;position:fixed;background:#000000;opacity:0.5;width:100%;height:100%;z-Index:3";
      body.appendChild(backgroundDiv);
    })

    //点击 ‘×’ 时，弹出框隐藏
    //选择地址
    $('#wrong1').click(function(){
       $('#chooseaddress').hide();
       backgroundDiv.style.cssText = "overflow:hidden";
       body.removeChile(backgroundDiv);
    })
    $('#wrong2').click(function(){
       $('#myaddress').hide();
    })

    //选择发票
    $('#wrong3').click(function(){
       $('#chooseinvoice').hide();
       backgroundDiv.style.cssText = "overflow:hidden";
       body.removeChile(backgroundDiv);
    })
    $('#wrong4').click(function(){
        $('#zhuaninvoice').hide();
    })
    $('#wrong5').click(function(){
        $('#puinvoice').hide();
    })
    $('#wrong6').click(function(){
        $('#addinvoice').hide();
    })
    
   //点击 ‘取消’ 按钮时，将弹出框隐藏
   $('#btn_no1').click(function(){
       $('#chooseaddress').hide();
       backgroundDiv.style.cssText = "overflow:hidden";
       body.removeChile(backgroundDiv)
   })
   $('#btn_no2').click(function(){
       $('#myaddress').hide();
   })
   $('#btn_no3').click(function(){
       $('#chooseinvoice').hide();
       backgroundDiv.style.cssText = "overflow:hidden";
       body.removeChile(backgroundDiv)
   })
   $('#btn_no4').click(function(){
       $('#zhuaninvoice').hide();
   })
  $('#btn_no5').click(function(){
       $('#puinvoice').hide();
   })
   
})