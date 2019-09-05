import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CmContactData } from './mock';
import { CmCoreModule } from './core/core.module';
import { CmSharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

export const InMemoryModule = HttpClientInMemoryWebApiModule.forRoot(CmContactData, {
  // hijack the http.get, which gives problem for remote fetching of MarkDown documents
  passThruUnknownUrl: true
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryModule,
    CmSharedModule,
    CmCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
