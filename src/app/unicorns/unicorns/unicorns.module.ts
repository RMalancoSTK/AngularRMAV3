import { NgModule } from '@angular/core';
import { UnicornsRouteModule } from './unicorns.route';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { UnicornsComponent } from './unicorns.component';

@NgModule({
  imports: [CommonModule, UnicornsRouteModule, MatTableModule],
  declarations: [UnicornsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UnicornsModule {}

// El error:
// Can't bind to 'ngForOf' since it isn't a known property of 'tr' (used in the 'UnicornsComponent' component template).
