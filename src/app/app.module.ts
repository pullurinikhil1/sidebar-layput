import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarModule } from 'ng-sidebar';
import { TestLayoutComponent } from './test-layout/test-layout.component';

@NgModule({
  declarations: [AppComponent, TestLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CogSidebarModule,
    SidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
