import { Animal } from './animal';

export class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super('Largo', 'sprinting');
  }

  speak(): void {
    console.log('woof woof');
  }
}
