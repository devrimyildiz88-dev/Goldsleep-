function parseGSD(txt){
  const data={};
  txt.split('\n').forEach(l=>{
    const eq=l.indexOf('=');
    if(eq>-1){
      data[l.slice(0,eq).trim()]=l.slice(eq+1).trim();
    }
  });
  return data;
}

function cleanLeak(val){
  let v=parseFloat(val||0);
  if(v<0 || v>60) return null;
  return v;
}

function median(arr){
  if(!arr.length) return 0;
  arr.sort((a,b)=>a-b);
  const mid=Math.floor(arr.length/2);
  return arr.length%2 ? arr[mid] : (arr[mid-1]+arr[mid])/2;
}
