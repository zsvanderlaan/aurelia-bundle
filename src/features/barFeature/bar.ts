import 'bootstrap.js';

export class bar {
  
  barStatus: string = 'Testing...';

  constructor() {
    console.log('debug bar');

    let success = (
      typeof $ !== 'undefined'
      && typeof $.fn !== 'undefined'
      && typeof $.fn.modal !== 'undefined'
    );

    this.barStatus = success.toString();
  }
}