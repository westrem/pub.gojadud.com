import gulp from 'gulp';
import PATHS from './../paths';

function deploy() {
  console.log('running: Deploy');
  return gulp.src(PATHS.APP.DEPLOY.src, { dot: true })
    .pipe(gulp.dest(PATHS.APP.DEPLOY.dest));
}

export default deploy;
