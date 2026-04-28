function createChart(id,labels,data){
  const ctx=document.getElementById(id);
  ctx.width=1200;
  ctx.height=400;

  return new Chart(ctx,{
    type:'bar',
    data:{labels,datasets:[{
      data,
      borderWidth:2,
      backgroundColor:data.map(v=>v>30?'red':v>20?'orange':'green')
    },{
      type:'line',
      data:data.map(()=>5),
      borderColor:'red',
      borderDash:[6,4],
      borderWidth:2,
      pointRadius:0
    }]},
    options:{
      responsive:true,
      maintainAspectRatio:false,
      devicePixelRatio:3,
      plugins:{legend:{display:false}},
      scales:{
        x:{ticks:{font:{size:10}},grid:{color:'rgba(0,0,0,0.15)'}},
        y:{ticks:{font:{size:10}},grid:{color:'rgba(0,0,0,0.15)'}}
      }
    }
  });
}
