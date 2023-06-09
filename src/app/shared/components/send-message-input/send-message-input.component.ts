import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-message-input',
  templateUrl: './send-message-input.component.html',
  styleUrls: ['./send-message-input.component.scss']
})
export class SendMessageInputComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    message: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('onsubmit');
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
