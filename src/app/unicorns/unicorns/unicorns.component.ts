import { Component, OnInit } from '@angular/core';
import { UnicornsService } from '../services/unicorns.service';
import { Unicorns } from '../interfaces/unicorns';
import { UnicornsViewComponent } from './unicorns-view.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styles: [],
})
export class UnicornsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'colour', 'actions'];
  dataSource: Unicorns[] = [];
  name: any;
  age: any;
  colour: any;

  constructor(
    private unicornsService: UnicornsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.unicornsService.getUnicorns().subscribe((data) => {
      this.dataSource = data.body;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UnicornsViewComponent, {
      width: '400px',
      height: '400px',
      data: { name: this.name, age: this.age, colour: this.colour },
    });
  }
}
