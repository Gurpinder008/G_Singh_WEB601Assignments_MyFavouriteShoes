import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shoeSize',
  standalone: true
})
export class ShoeSizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
