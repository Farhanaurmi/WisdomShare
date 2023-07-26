import { Component, ViewChild } from '@angular/core';
import { AngularEditorComponent, AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

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
  selectedImage: any;
  content:any;
  PostService: any;
  imageURL: string | undefined;


  constructor(private formBuilder: FormBuilder, private postService: PostService) {
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
    console.log("hshsh")
    this.postService.createPost(post).subscribe(
      
      (response: any) => {
        // Handle the response as needed
        console.log('Post creation response:', response);
      },
      (error: any) => {
        // Handle any errors that may occur during the API call
        console.error('Error creating post:', error);
      }
    );
    console.log("hshsh")

    
  }
}