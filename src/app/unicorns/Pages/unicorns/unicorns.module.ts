import { NgModule } from '@angular/core';
import { UnicornsRouteModule } from './unicorns.route';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { UnicornsComponent } from './unicorns.component';
import { UnicornsViewComponent } from './unicorns-view.component';
import { UnicornsUpdateComponent } from './unicorns-update.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    UnicornsRouteModule,
    FormsModule,
    SharedModule,
    MaterialModule,
  ],
  declarations: [
    UnicornsComponent,
    UnicornsViewComponent,
    UnicornsUpdateComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [UnicornsViewComponent, UnicornsUpdateComponent],
})
export class UnicornsModule {}
