import { Component, OnInit, ViewChild } from '@angular/core';
import { UnicornsService } from '../services/unicorns.service';
import { Unicorns } from '../interfaces/unicorns';
import { UnicornsViewComponent } from './unicorns-view.component';
import { MatDialog } from '@angular/material/dialog';
import { UnicornsUpdateComponent } from './unicorns-update.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styles: [],
})
export class UnicornsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'age', 'colour', 'actions'];
  // dataSource: Unicorns[] = [];
  dataSource = new MatTableDataSource<Unicorns>();

  constructor(
    private unicornsService: UnicornsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.unicornsService.getUnicorns().subscribe((data) => {
      this.dataSource = data.body;
    });
  }

  openDialogViewUnicorn(unicorns: Unicorns) {
    const dialogRef = this.dialog.open(UnicornsViewComponent, {
      width: '500px',
      data: unicorns,
    });
  }

  openDialogEditUnicorn(unicorns: Unicorns) {
    const dialogRef = this.dialog.open(UnicornsUpdateComponent, {
      data: unicorns,
    });
  }

  openDialogCreateUnicorn() {
    // cuando se crea un unicornio y finaliza el proceso, se recarga la tabla
    const dialogRef = this.dialog.open(UnicornsUpdateComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteUnicorn(_id: string) {
    //console.log(_id);
    this.unicornsService.deleteUnicorn(_id).subscribe((res) => {
      //console.log(res);
      this.ngOnInit();
    });
  }
}
