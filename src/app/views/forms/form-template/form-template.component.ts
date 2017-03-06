import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { User } from './signup.interface';
@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  user: FormGroup;
  ngOnInit() {
    this.user = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    account: this.fb.group({
      email: ['', Validators.required],
      confirm: ['', Validators.required]
    })
  });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}
