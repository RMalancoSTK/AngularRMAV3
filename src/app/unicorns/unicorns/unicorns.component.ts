import { Component, OnInit } from '@angular/core';
import { UnicornsService } from '../services/unicorns.service';
import { Unicorns } from '../interfaces/unicorns';
import { UnicornsViewComponent } from './unicorns-view.component';
import { MatDialog } from '@angular/material/dialog';
import { UnicornsUpdateComponent } from './unicorns-update.component';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styles: [],
})
export class UnicornsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'colour', 'actions'];
  dataSource: Unicorns[] = [];

  constructor(
    private unicornsService: UnicornsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.unicornsService.getUnicorns().subscribe((data) => {
      this.dataSource = data.body;
    });
  }

  openDialogViewUnicorn(unicorns: Unicorns) {
    const dialogRef = this.dialog.open(UnicornsViewComponent, {
      data: unicorns,
    });
  }

  openDialogEditUnicorn(unicorns: Unicorns) {
    const dialogRef = this.dialog.open(UnicornsUpdateComponent, {
      data: unicorns,
    });
  }
}
