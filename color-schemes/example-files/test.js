"use strict";

class Car extends Vehicle {
  constructor(speed, cost) {
    super(speed);

    const c = Symbol('cost');
    this[c] = cost;

    this.intro = `This is a car runs at
      ${speed}.`;
  }
}
