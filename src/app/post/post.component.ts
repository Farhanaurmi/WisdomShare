import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  @Input() post: any;
  richTextContent: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.post && this.post.textContent) {
      this.richTextContent = this.getSafeHtml(this.post.textContent);
    }
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
