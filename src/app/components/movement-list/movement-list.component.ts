import { Component, OnInit } from '@angular/core';
import { MovementService } from 'src/app/services/movement.service';
import { AccountHolderService } from 'src/app/services/account-holder.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {
  movements: any;
  accountHolders: any;
  accountHolderSelect: any;

  constructor(
    private movementService: MovementService,
    private accountHolderService: AccountHolderService
  ) { }

  ngOnInit(): void {
    this.showAccountHolders();
    this.listMovements
  }

  listMovements(): void {
    this.movementService.findByIdAccount(this.accountHolderSelect.id)
      .subscribe(
        data => {
          this.movements = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  showAccountHolders(): void {
    this.accountHolderService.list()
      .subscribe(
        data => {
          this.accountHolders = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
