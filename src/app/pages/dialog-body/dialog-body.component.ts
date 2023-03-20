import { Component, OnInit } from '@angular/core';
import { DialogBodyService } from './dialog-body.service';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {

  user_data: any;
  editform: FormGroup | any;
  genderList:any;
  
  constructor(private dialogService: DialogBodyService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formValidation();
    this.getUserDetails();
    this.genderList = [
      {id:1,value: 'male'},
      {id:2,value: 'female'}
    ]
  }

  formValidation(){
    this.editform = this.fb.group({
      name: new FormControl('', [
        Validators.required
      ]),
      domain: new FormControl('', [
        Validators.required
      ]),
      gender: new FormControl('', [
        Validators.required
      ]),
      dateofbirth: new FormControl('', [
        Validators.required
      ]),
      phone_no: new FormControl('', [
        Validators.required
      ]),
      location: new FormControl('', [
        Validators.required
      ]),
    })
  }
  selectedStatus:  any  ;  
  getUserDetails() {
    this.dialogService.getUserData().subscribe((res: any) => {
      this.user_data = res.data[0];
      console.log(this.user_data);
      this.editform.patchValue({
        name: this.user_data.name,
        domain:this.user_data.domain,
        dateofbirth: this.user_data.dateofbirth,
        phone_no:this.user_data.phone_no,
        location:this.user_data.location,
        gender:this.user_data.gender
      });
      this.selectedStatus = this.user_data.gender;

      console.log(this.selectedStatus);
      
      
      console.log(this.editform);
      

    })
  }

}
