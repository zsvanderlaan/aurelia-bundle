import {Router, RouterConfiguration} from 'aurelia-router'

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'foo',         name: 'foo',        moduleId: 'features/fooFeature/foo',        nav: true, title: 'Foo Feature' },
      { route: 'bar',  name: 'bar', moduleId: 'features/barFeature/bar', nav: true, title: 'Bar Feature' }
    ]);

    this.router = router;
  }
}
