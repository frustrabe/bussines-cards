import { Move } from './move';

export class Animal implements Move {
  constructor(public name: string, public movemethod: string) {}

  presentation(): void {
    console.log('Hello my name is ' + this.name);
  }

  run() {
    console.log('My way of moving is ' + this.movemethod);
  }
}
