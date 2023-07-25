import { Component, ViewChild } from '@angular/core';
import { AngularEditorComponent, AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  postForm!: FormGroup;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '150px',
    placeholder: 'Enter text here...',
    translate: 'no',
  };
  content:any;


  constructor(private formBuilder: FormBuilder) {
    
    
  }

  // Function to handle form submission
  onSubmit() {
    if (this.postForm.valid) {
      // Replace this console.log with your form submission logic
      console.log(this.postForm.value);
      // For example, you can send the form data to your server here
      // using a service or API call
    } else {
      // Form is not valid, do something (e.g., show an error message)
    }
  }

  // Function to handle background color change
  changeBackgroundColor(event: any) {
    const selectedColor = event.target.value;
    this.postForm.patchValue({
      backgroundColor: selectedColor,
    });
  }
}
