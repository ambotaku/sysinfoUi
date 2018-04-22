import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType } from "@ngrx/effects";
import {Action} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

import {InterfaceStatus, Memory, NetInterface} from "./models";

import {
  ErrorNetInterfaces,
  FETCH_MEMORY,
  FETCH_NETINTERFACES,
  fetchMemory,
  FetchMemory,
  GOT_MEMORY,
  GotMemory,
  GotNetInterfaces
} from "./actions";

import {switchMap, map, tap, catchError, delay} from "rxjs/operators";
import {timer} from "rxjs/observable/timer";


@Injectable()
export class SysInfoEffects {
  constructor(private actions$: Actions<Action>, private http: HttpClient) {
    console.log("SysInfo effects init");
  }

  @Effect()
  interfaces$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_NETINTERFACES),
    switchMap(() =>
      this.http.get<NetInterface[]>('/api/network-interfaces')
        .pipe(
          tap(data => data.map(itf => {
            this.http.get<InterfaceStatus>(`/api/network-status/${itf.iface}`)
              .subscribe((status) => itf.status = status);
          })),
          map(interfaces => new GotNetInterfaces(interfaces)),
          catchError(error => of(new ErrorNetInterfaces(error)))
        )
    )
  );

  @Effect()
  memory$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_MEMORY),
    switchMap(() =>
      this.http.get<Memory>('/api/mem')
        .pipe(
          map((memory: Memory) => new GotMemory(memory)),
          catchError(error => of(new ErrorNetInterfaces(error)))
        )
    )
  );

  @Effect()
  memory_repeat$: Observable<Action> = this.actions$.pipe(
    ofType(GOT_MEMORY),
    delay(2000),
    switchMap(() => of(fetchMemory()))
  );

}
