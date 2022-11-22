import { Animal } from './animal';

export class Cat extends Animal {
  constructor(name: string, public color: string) {
    super('Tom', 'climbing');
  }

  speak(): void {
    console.log('meow meowww');
  }
}
