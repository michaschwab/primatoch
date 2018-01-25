exports.buildHTML = function buildHTML(product) {
  return `
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${product.productType}</title>
  </head>
  <body>
    <h1>Wij raden deze <span style="color: #F00">${product.productType}</span> aan!</h1>
  </body>
  </html>
  `;
};


