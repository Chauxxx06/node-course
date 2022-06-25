function asincrona(callback) {
    //
    setTimeout(()=>{
        try{
            let a=3+z;
            callback(null, a)
        }catch(e){
            callback(e);
        }
    },1000);
}

    asincrona((err, data)=>{
        if(err){
            console.error('tenemos un error');
            console.error(err);
            return false;
            /* throw err */
            
        };
        console.log('todo oks')
    })

