import { NgModule } from '@angular/core';
import { UnicornsRouteModule } from './unicorns.route';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Components
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { UnicornsComponent } from './unicorns.component';
import { UnicornsViewComponent } from './unicorns-view.component';
import { UnicornsUpdateComponent } from './unicorns-update.component';

@NgModule({
  imports: [
    CommonModule,
    UnicornsRouteModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
  ],
  declarations: [
    UnicornsComponent,
    UnicornsViewComponent,
    UnicornsUpdateComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UnicornsModule {}
