const gulp = require('gulp');

gulp.task('build', (cb)=>{
    console.log('construyendo el sitio');
    setTimeout(cb, 1200);
    cb();
});