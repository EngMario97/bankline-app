import { Component, OnInit } from '@angular/core';
import { AccountHolderService } from 'src/app/services/account-holder.service';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-movement-new',
  templateUrl: './movement-new.component.html',
  styleUrls: ['./movement-new.component.css']
})
export class MovementNewComponent implements OnInit {
  accountHolders: any;
  accountHolderSelect: any;
  value: any;
  description: any;
  type: any;
  idAccount: any;
  datetime: any;

  constructor(
    private movementService: MovementService,
    private accountHolderService: AccountHolderService,
  ) { }

  ngOnInit(): void {
    this.showAccountHolders();
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

  // criando o método para ser chamado na tela e assim incluir a movimentação

  save(): void {
    console.log(this.accountHolderSelect)
    const movement = {
      value: this.value,
      description: this.description,
      type: this.type,
      idAccount: this.accountHolderSelect.id,
      datetime: this.datetime

    };
    console.log(movement);
    this.movementService.create(movement)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}

