# How to install gulp for new project

- Install dependencies:

```
npm i -g gulp       //install GULP package
npm init            //creating package.json
npm i gulp-sass     //install gulp-sass package
npm i -D sass       //install sass package
npm ls --depth=0    //to see what installed
```

- Creating gulpfile.js:

```
// plug Gulp
var gulp = require('gulp'),
    //plug Sass package         
	sass = require('gulp-sass')(require('sass')); 

gulp.task('sass', function(){
    // take .sass files from parent folder /sass and child folders, if they are there
	return gulp.src('*.scss')       
        .pipe(sass().on('error', sass.logError))
        // folder where put .css file
		.pipe(gulp.dest('css'))     
});

gulp.task('watch', function() {
	gulp.watch('*.scss', gulp.parallel('sass'));
});
```

- For once compilation use:

```
gulp sass
```

- For continuous parsing use:

```
gulp watch
```

- For termination -gulp watch use:

```
ctrl+c
```

---

# How to install npm dependencies in a new folder:

- put in parent folder: 
```
gulpfile.js
package.json
```
- install all dependencies from package.json:
```
-npm up
```
---

_Sourse:_

* [https://abcinblog.blogspot.com](https://abcinblog.blogspot.com/2018/04/npm-gulp-sass.html)

* [https://webdesign-master.ru](https://webdesign-master.ru/blog/tools/2016-06-04-sass.html)
