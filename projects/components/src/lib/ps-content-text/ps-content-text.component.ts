import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rs-components-ps-content-text',
  templateUrl: './ps-content-text.component.html',
  styleUrls: ['./ps-content-text.component.scss']
})
export class PsContentTextComponent implements OnInit {

  @Input() sectionTitle?: string;
  @Input() contentText?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
