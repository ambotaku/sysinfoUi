import {Pipe, PipeTransform} from '@angular/core';
import {InterfaceStatus} from './models';

@Pipe({name: 'itfStatus'})
export class InterfaceStatusPipe implements PipeTransform {
  transform(value: InterfaceStatus): string {
    if (!value) {
      return '';
    }
    const kb = 1024;
    return `status: ${value.operstate}\nreceived KB: ${Math.round(value.rx / kb)}}\nsent KB: ${Math.round(value.tx / kb)}`;
  }
}

@Pipe({name: 'kilobytes'})
export class KilobyteDisplay implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '0';
    }
    const kb = 1024;
    return `${Math.round(value / kb)} KB`;
  }
}


