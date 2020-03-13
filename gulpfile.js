const {
	src,
	dest,
	parallel,
} = require('gulp');
const typescript = require('gulp-typescript');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const tsProject = typescript.createProject('./tsconfig.json')();
const merge = require('merge-stream');

exports.ts = () => {
	const ts = src('./src/**/*.ts').pipe(
		sourcemaps.init()
	).pipe(
		eslint({
			configFile: './.eslint.js',
		})
	).pipe(
		eslint.format()
	).pipe(
		eslint.failAfterError()
	).pipe(
		tsProject
	);

	return merge(
		ts.js.pipe(
			uglify()
		),
		ts.dts
	).pipe(
		sourcemaps.write('./')
	).pipe(dest('./src/'));
};

exports.default = parallel(...[
	exports.ts,
]);
