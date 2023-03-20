import { Component, OnInit } from '@angular/core';
import { ProfessionalsService } from './professionals.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogBodyComponent} from '../dialog-body/dialog-body.component'

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})
export class ProfessionalsComponent implements OnInit {

  user_data:any;
  constructor(private professional:ProfessionalsService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.professional.getUserData().subscribe((res:any) => {
      this.user_data = res.data;
      console.log(this.user_data);
      
    })
  }

  openEditModal(){
    this.dialog.open(DialogBodyComponent,{
      width:'550px'

    })
  }

  

}
