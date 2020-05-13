/*
* src/
*   assets/
*     css/
*     favicons/
*     images/
*   styles/
*   template/
*     partials/
*
* dist/
*   ...template/
*   assets/
*     ...root/
*
*
*/
const appPath = './';
const appPathSrc = appPath + 'src/';
const appPathDist = appPath + 'dist/';
const appPathDistAssets = appPathDist + 'assets/';
const deployPath = appPath + 'deploy/';

const PATHS = {
  APP: {
    dist: appPathDist,
    assets: appPathDistAssets,
    SASS: {
      entry: appPathSrc + 'styles/main.scss',
      src: appPathSrc + '**/*.scss',
      dest: appPathDistAssets + 'css/'
    },
    TEMPLATES: {
      src: appPathSrc + 'template/**/*.hbs',
      dest: appPathDist
    },
    ROOT: {
      src: appPathSrc + 'assets/**/*.*',
      dest: appPathDistAssets
    },
    DEPLOY: {
      src: appPathDist + '**/*.*',
      dest: deployPath
    }
  }
};

export default PATHS;
