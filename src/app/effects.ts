import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType } from "@ngrx/effects";
import {Action} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

import {Memory, NetInterface} from "./models";

import {
  ErrorNetInterfaces, FETCH_MEMORY, FETCH_NETINTERFACES, GotMemory, GotNetInterfaces
} from "./actions";
import {switchMap, map, tap, catchError} from "rxjs/operators";


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
          map((interfaces: NetInterface[]) => new GotNetInterfaces(interfaces)),
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

}
