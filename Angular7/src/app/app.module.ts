import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { CheckComponent } from './check/check.component';
import { LichKhamBenhComponent } from './lich-kham-benh/lich-kham-benh.component';
import { DateComponent } from './date/date.component';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { ValidationComponent } from './validation/validation.component';
import { FilterTestComponent } from './filter-test/filter-test.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    CheckComponent,
    LichKhamBenhComponent,
    DateComponent,
    AnimationDemoComponent,
    ValidationComponent,
    FilterTestComponent
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
