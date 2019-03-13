import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;   // FormGroup imported above
  submitted = false;        // relates to onSubmit()
  success = false;          // relates to onSubmit()

  constructor(private formBuilder: FormBuilder) {  // FormBuilder imported above
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required], //makes field mandatory, sets space as standard input 
      massage: ['', Validators.required]  

    })
  }   

  ngOnInit() {
    // this.messageForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   message: ['', Validators.required]
    // });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) { 
        return;
    }

    this.success = true;
  }

}
