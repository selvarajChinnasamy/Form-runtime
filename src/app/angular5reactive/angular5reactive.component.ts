import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular5reactive',
  templateUrl: './angular5reactive.component.html',
  styleUrls: ['./angular5reactive.component.css']
})
export class Angular5reactiveComponent implements OnInit {

  constructor() { }
  nameForm: FormGroup;
  ngOnInit() {
    this.nameForm = new FormGroup ({
      firstname: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      lastname: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      })
    });
  }

}
