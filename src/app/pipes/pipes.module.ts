import { NgModule } from '@angular/core';
import { FilterCompletePipe } from './filter-complete.pipe';

@NgModule({
  declarations: [
    FilterCompletePipe,
  ],
  exports: [
    FilterCompletePipe,
  ]
})
export class PipesModule { }
