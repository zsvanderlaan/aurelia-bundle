import 'jquery-legacy';

export class foo {

  fooStatus:string = 'Testing...';

  constructor() {
    console.log('debug foo');

    let success = (
      typeof $ !== 'undefined'
      && typeof $.fn !== 'undefined'
      && typeof $.fn.modal === 'undefined'
    );

    this.fooStatus = success.toString();
  }
}