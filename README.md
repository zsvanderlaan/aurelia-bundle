# aurelia-bundle
An Aurelia skeleton (typescript / jspm) which implements bundle per feature


/*
"Error tracing features/barFeature/bar.js at file:///E:/dist/features/barFeature/bar.js"
"Error: Unable to calculate canonical name to bundle https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js. Ensure that this module sits within the baseURL or a wildcard path config"
*/

/* possible solution
 activate(params, routeConfig, navigationInstruction) {
 // Loads the stripe script
if (!document.querySelector('script#stripe-source')) {
  let sc = document.createElement('script');
  sc.setAttribute('id', 'stripe-source');
  sc.async = true;
  sc.setAttribute('src', 'https://js.stripe.com/v2/');
  document.body.appendChild(sc);
}
}

canDeactivate() {
  let spriteScript = document.querySelector('script#stripe-source');
  if (spriteScript) {
    spriteScript.remove();
  }
}
*/