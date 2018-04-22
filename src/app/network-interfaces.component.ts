import {Component, OnInit} from '@angular/core';
import {AppState, NetInterface} from "./models";
import {Store} from "@ngrx/store";
import {fetchNetInterfaces} from "./actions";
import {Observable} from "rxjs/Observable";
import {getError, getInterfaces} from "./selectors";


@Component({
  selector: 'network-interfaces',
  template: `
    <div class="container">
      <table class="table table-striped">
        <thead class="thead-dark">
        <tr>
          <th>Interface</th>
          <th>IPv4 Address</th>
          <th>IPv6 Address</th>
          <th>MAC Address</th>
          <th>Internal</th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let itf of netInterfaces$ | async">

          <td>{{itf.iface}} <a href="#" data-toggle="tooltip" title="{{itf.status|itfStatus}}">[status]</a></td>
          <td>{{itf.ip4}}</td>
          <td>{{itf.ip6}}</td>
          <td>{{itf.mac}}</td>
          <td>{{itf.internal}}</td>
        </tr>
        </tbody>
      </table>
      <div *ngIf="error$ | async">
        <h6>{{error$ |async}}</h6>
      </div>
    </div>
  `,
})
export class NetworkInterfacesComponent implements OnInit {
  netInterfaces$: Observable<NetInterface[]>;
  error$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.netInterfaces$ = store.select(getInterfaces);
    this.error$ = this.store.select(getError);
  }

  ngOnInit() {
    this.store.dispatch(fetchNetInterfaces());
  }
}
