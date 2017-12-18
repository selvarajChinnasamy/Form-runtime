import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-runtime',
  templateUrl: './form-runtime.component.html',
  styleUrls: ['./form-runtime.component.css']
})
export class FormRuntimeComponent implements OnInit {
  rForm: FormGroup;
  post:any;                     
  description:string = '';
  name:string = '';
  titleAlert:string = 'This field is required';
  
  constructor(private fb: FormBuilder) { 

    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : 'true'
    });
  }
  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(

      (validate) => {

          if (validate == '1') {
              this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
              this.titleAlert = 'You need to specify at least 3 characters';
          } else {
              this.rForm.get('name').setValidators(Validators.required);
              this.titleAlert = 'This field is required';
          }
          this.rForm.get('name').updateValueAndValidity();

      });
  }
  addPost(post) {
    this.description = post.description;
    this.name = post.name;
    console.log(post);
  }
}