const gulp = require('gulp');
const fs = require('fs');
const del = require('del');
const data = require('../../app/assets/data/catalog.json');
const productPage = require('../templates/productPage.js');

gulp.task('beginClean', () => del(['./app/productadvies/**/*']));

gulp.task('generateProductPages', ['beginClean'], () => {
  data.forEach((product) => {
    const template = productPage.buildHTML(product);

    fs.writeFile(`./app/productadvies/${product.productType}.html`, template, (err) => {
      if (err) throw err;
      console.log(`${product.productType}.html generated!`);
    });
  });
});
