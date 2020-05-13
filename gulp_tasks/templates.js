import gulp from 'gulp';
import PATHS from './../paths';

function templates() {
  console.log('running: Pages');
  return gulp.src(PATHS.APP.TEMPLATES.src)
    .pipe(gulp.dest(PATHS.APP.TEMPLATES.dest));
}

export default templates;
