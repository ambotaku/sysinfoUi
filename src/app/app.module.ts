import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NetworkInterfacesComponent } from './network-interfaces.component';
import {HttpClientModule} from "@angular/common/http";
import {SysInfoService} from "./sysinfoService";
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {MemoryComponent} from "./memory.component";
import {StoreModule} from "@ngrx/store";
import {SysInfoReducer} from "./reducer";
import {EffectsModule} from "@ngrx/effects";
import {SysInfoEffects} from "./effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {InterfaceStatusPipe, KilobyteDisplay} from "./interfacestatus.pipe";

const routes: Routes = [
  { path: 'network-interfaces', component: NetworkInterfacesComponent },
  { path: 'memory', component: MemoryComponent},
  { path: '', component: NetworkInterfacesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NetworkInterfacesComponent,
    MemoryComponent,
    InterfaceStatusPipe,
    KilobyteDisplay
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ sysInfo: SysInfoReducer}),
    EffectsModule.forRoot([SysInfoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [SysInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
