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
  ],
  declarations: [
    UnicornsComponent,
    UnicornsViewComponent,
    UnicornsUpdateComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UnicornsModule {}

// Para instalar FlexLayoutModule se debe ejecutar el siguiente comando:
// npm install @angular/flex-layout --save
// Error: (node:24096) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
// Solucion: se debe ejecutar el siguiente comando:
// npm config set strict-ssl false
// Despues de ejecutar el comando anterior se debe ejecutar el siguiente comando:
