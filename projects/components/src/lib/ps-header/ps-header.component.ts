import { Component, Input, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from './social-icons.type';

@Component({
  selector: 'rs-components-ps-header',
  templateUrl: './ps-header.component.html',
  styleUrls: ['./ps-header.component.scss'],
})
export class PsHeaderComponent implements OnInit {
  @Input() imgSrc?: string;
  @Input() name?: string;
  @Input() description?: string;
  @Input() socialIcons?: SocialIcon[];

  faPaperPlane = faPaperPlane;

  constructor() {}

  ngOnInit(): void {}
}
