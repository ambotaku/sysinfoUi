import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InterfaceStatus, Memory, NetInterface} from './models';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SysInfoService {
  constructor(private http: HttpClient) {
  }

  getNetInterfaces(): Observable<NetInterface[]> {
    const data$ = new Subject<NetInterface[]>();
    this.http.get<NetInterface[]>('/api/network-interfaces')
      .subscribe(data => {
        data$.next(data);
      });

    return data$;
  }

  getMemory(): Observable<Memory> {
    const data$ = new Subject<Memory>();
    this.http.get<Memory>('/api/mem')
      .subscribe(data => {
        data$.next(data);
      });

    return data$;
  }

  getNetStatus(itfName: string): Observable<InterfaceStatus> {
    const data$ = new Subject<InterfaceStatus>();
    this.http.get<InterfaceStatus>(`/api/network-status/${itfName}`)
      .subscribe(data => {
        data$.next(data);
      });

    return data$;
  }
}
