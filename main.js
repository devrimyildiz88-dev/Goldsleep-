// Örnek veri
const leaksRaw=[10,12,55,200,18,22,5,40];

// filtre + median
const validLeaks=leaksRaw.map(cleanLeak).filter(v=>v!==null);
const leakValue=median(validLeaks);

console.log("Düzeltilmiş Leak:", leakValue);

createChart("chart",
  ["1","2","3","4","5","6","7","8"],
  validLeaks
);
