import { Component, ElementRef, ViewChild } from '@angular/core';
import { AngularEditorComponent, AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  template: `<ejs-toast #element (created)="onCreate($event)">
    <ng-template #content>
      <div>Successfully post created</div>
    </ng-template>
    </ejs-toast>`
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
  selectedImage: any;
  content:any;
  PostService: any;
  imageURL: string | undefined;


  constructor(private formBuilder: FormBuilder, private postService: PostService,private element: ElementRef, private router: Router) {
    this.postForm = this.formBuilder.group({
      visibility: new FormControl('public'),
      'background-color': '#ffffff',
      textContent: '',
      image: '',
    });
  }
  changeBackgroundColor(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const backgroundColor = inputElement.value;
    this.postForm.patchValue({
      'background-color': backgroundColor,
    });
  }



  onImageChange(event: Event): void {
    this.imageURL = (event.target as HTMLInputElement).value;
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.selectedImage = file;
      const reader = new FileReader();
      reader.onloadend = () => {
        this.postForm.patchValue({
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }


  onSubmit(): void {
  
    console.log(this.postForm.value)
    const visibility = this.postForm.value.visibility;
    const backgroundColor = this.postForm.value['background-color'];
    const textContent = this.postForm.value.textContent;
    const image = this.imageURL;

    const post = {
      visibility,
      backgroundColor,
      textContent,
      image,
    };
    this.postService.createPost(post).subscribe(
      
      (response: any) => {
      
        //redirect
        this.router.navigate(['/profile']);

      },
      (error: any) => {
        // Handle any errors that may occur during the API call
        console.error('Error creating post:', error);
      }
    );
    console.log("hshsh")

    
  }
}