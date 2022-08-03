import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  mainForm!: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.mainForm = fb.group({
      name: new FormControl('', [Validators.pattern(new RegExp('^[a-zA-z ]{3,15}$'))]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.maxLength(20)])
    })
  }

  ngOnInit(): void {
  }

  sumbitMainForm() {
    console.log(this.mainForm);
  }

}
