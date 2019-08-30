import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DraggableComponent } from './draggable/draggable.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MinimalComponent } from './minimal/minimal.component';

@NgModule({
  declarations: [
    AppComponent,
    DraggableComponent,
    MinimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
