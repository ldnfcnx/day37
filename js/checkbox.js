function makeCheckBox(div,arr){
    let checkAll=document.createElement('input');
        label=document.createElement('label');
        checkAll.type="checkbox";
        checkAll.value="checkall";
    label.append(checkAll,"全选");
    div.append(label);
    for(let i=0;i<arr.length;i++){
        let input=document.createElement('input');
            label=document.createElement('label');
            input.type="checkbox";
            input.value=arr[i];
        label.append(input,arr[i]);
        div.append(label);
    }  
    div.addEventListener("click",function(ev){
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == "input"){
           let val=target.value;
               checknode=div.getElementsByTagName("input");
            if(val=="checkall"){
                if(checknode[0].checked){
                    for(let i=1;i<checknode.length;i++){
                    checknode[i].checked=true;
                  }
                }else{
                    for(let i=1;i<checknode.length;i++){
                    checknode[i].checked=false;
                    }
                }
            }else{
               if(checknode[0].checked){
                  checknode[0].checked=false;
                 }
            }
        //制作图表函数
        tableWrap.innerHTML="";
        svg.innerHTML="";
        drawSvgBg();
        drawCtxBg();
        let data=makeDate();
        if(data){
            table= makeTable(data);
            tableWrap.append(table);
            drawBar(data,heigthMax(data));
            for(let i=0;i<data.length;i++){
                drawLine(data[i],heigthMax(data));
            }
        }
    }
  })
}