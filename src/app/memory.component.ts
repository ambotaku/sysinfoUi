import { Component } from '@angular/core';
import {AppState, Memory} from "./models";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {getMemory} from "./selectors";
import {fetchMemory} from "./actions";

@Component({
  selector: 'memory',
  template: `
    <div class="container">
      <table class="table table-striped">
        <tr>
          <td>Total</td>
          <td>{{memory.total}}</td>
        </tr> 
        <tr>
          <td>Free</td>
          <td>{{memory?.free}}</td>
        </tr>
        <tr>
          <td>Used</td>
          <td>{{memory?.used}}</td>
        </tr>
        <tr>
          <td>Active</td>
          <td>{{memory?.active}}</td>
        </tr>
        <tr>
          <td>Available</td>
          <td>{{memory?.available}}</td>
        </tr>
        <tr>
          <td>Buffer Cache</td>
          <td>{{memory?.buffcache}}</td>
        </tr>
        <tr>
          <td>Total Swap</td>
          <td>{{memory?.swaptotal}}</td>
        </tr>
        <tr>
          <td>Used Swap</td>
          <td>{{memory?.swapused}}</td>
        </tr>
        <tr>
          <td>Free Swap</td>
          <td>{{memory?.swapfree}}</td>
        </tr>
      </table>
    </div>
  `,
})
export class MemoryComponent {
  memory$: Observable<Memory|{}>;
  memory: Memory;

  constructor(private store: Store<AppState>) {
    this.memory$ = store.select(getMemory);
  }

  ngOnInit() {
    this.store.dispatch(fetchMemory());

    this.memory$.subscribe(mem => this.memory = <Memory>mem);
  }
}
