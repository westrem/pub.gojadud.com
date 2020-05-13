import gulp from 'gulp';
import PATHS from './../paths';

function assets() {
  console.log('running: Assets');
  return gulp.src(PATHS.APP.ROOT.src, { dot: true })
    .pipe(gulp.dest(PATHS.APP.ROOT.dest));
}

export default assets;
