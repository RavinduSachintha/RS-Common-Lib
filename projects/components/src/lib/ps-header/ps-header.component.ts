import { Component, Input, OnInit } from '@angular/core';
import { SocialIcon } from './social-icons.type';

@Component({
  selector: 'rs-components-ps-header',
  templateUrl: './ps-header.component.html',
  styleUrls: ['./ps-header.component.scss'],
})
export class PsHeaderComponent implements OnInit {
  @Input('img-src') imgSrc?: string;
  @Input('name') name?: string;
  @Input('description') description?: string;
  @Input('social-icons') socialIcons?: SocialIcon[];

  constructor() {}

  ngOnInit(): void {}
}
