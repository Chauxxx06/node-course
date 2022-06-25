
let i=0;
const interval = setInterval(()=>{
                    console.log('holis')
                    i++;
                    if (i === 3){
                        clearInterval(interval);
                    }
                }, 1000);

setImmediate(()=>{
    console.log('que hubis')
})

console.log(__filename);