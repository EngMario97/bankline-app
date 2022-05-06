import { Component, OnInit } from '@angular/core';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {
  movements: any;

  constructor(private movementService: MovementService) { }

  ngOnInit(): void {
    this.listMovements();
  }

  listMovements(): void {
    this.movementService.list()
      .subscribe(
        data => {
          this.movements = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
