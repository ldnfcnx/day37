var regionDiv=document.getElementById("region-radio-wrapper");
    productDiv=document.getElementById("product-radio-wrapper");
    tableWrap=document.getElementById("table-wrapper");
    color=["#60acfc","#32d3eb","#5bc49f","#feb64d","#ff7c7c","#9287e7","#d4ec59","#d660a8","#6370de"];
    
var sourceData;    //Ajax请求数据
var Util={
  ajax:function(url){
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.send();
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        sourceData=JSON.parse(xhr.responseText)["sourceData"];
      }
    }
  }
}
Util.ajax("js/111.json");


//localStorage.removeItem("data");
window.onload=function(){
  makeCheckBox(regionDiv,["华东","华北","华南"]);
  makeCheckBox(productDiv,["手机","笔记本","智能音箱"]);
  drawCtxBg();
  drawSvgBg();
  let data=JSON.parse(localStorage.getItem("data"));
  if(data){
    table= makeTable(data);
    tableWrap.append(table);
    drawBar(data,heigthMax(data));
    for(let i=0;i<data.length;i++){
        drawLine(data[i],heigthMax(data));
    }
  }
}

document.getElementById("save-data").addEventListener("click",function(){
    let data=makeTableData();
    localStorage.setItem("data",JSON.stringify(data));   //localStorage储存字符串
})
document.addEventListener("click",function(){
  if(document.querySelector(".table_cel")){    //点击表格外猝发取消编辑
    document.querySelector(".table_cel").click();
  }
})

