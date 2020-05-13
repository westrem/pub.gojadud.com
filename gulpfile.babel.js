import gulp from 'gulp';
import PATHS from './paths';

// tasks
import clean from './gulp_tasks/clean';
import sass from './gulp_tasks/sass';
import templates from './gulp_tasks/templates';
import assets from './gulp_tasks/assets';
import deploy from './gulp_tasks/deploy';

gulp.task('clean', clean);
gulp.task('deploy', deploy);

export const build = gulp.series(sass, templates, assets);

export function watch() {
  gulp.watch(PATHS.APP.SASS.src, sass);
  gulp.watch(PATHS.APP.PAGES.src, templates);
  gulp.watch(PATHS.APP.ROOT.src, assets);
}

function emptyDefault() {}

export default emptyDefault;
