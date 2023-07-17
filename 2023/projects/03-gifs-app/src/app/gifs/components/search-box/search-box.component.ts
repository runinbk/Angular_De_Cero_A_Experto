import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log(`Search for ${newTag}`);
  }
}
