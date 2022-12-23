import { Component, OnInit } from '@angular/core';
import { UnicornsService } from '../services/unicorns.service';
import { Unicorns } from '../interfaces/unicorns';

@Component({
  selector: 'app-unicorns',
  templateUrl: './unicorns.component.html',
  styles: [],
})
export class UnicornsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'colour', 'actions'];
  dataSource: Unicorns[] = [];

  constructor(private unicornsService: UnicornsService) {}

  ngOnInit(): void {
    this.unicornsService.getUnicorns().subscribe((data) => {
      this.dataSource = data.body;
    });
  }
}
