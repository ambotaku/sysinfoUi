import {Pipe, PipeTransform} from "@angular/core";
import {InterfaceStatus} from "./models";

@Pipe({name: 'itfStatus'})
export class InterfaceStatusPipe implements PipeTransform {
  transform(value: InterfaceStatus): string {
    if (!value) {
      return '';
    }
    const mb = 2 << 9;
    return `status: ${value.operstate}\nreceived KB: ${Math.round(value.rx / mb)}}\nsent KB: ${Math.round(value.tx / mb)}`;
  }
}

@Pipe({name: 'kilobytes'})
export class KilobyteDisplay implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '0';
    }
    const mb = 2 << 9;
    return `${Math.round(value / mb)} KB`;
  }
}


