import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PsContentTextListTypes } from './ps-content-text-list-types.enum';
import { PsTextListItem } from './ps-text-list-item.type';

@Component({
  selector: 'rs-components-ps-content-text-list',
  templateUrl: './ps-content-text-list.component.html',
  styleUrls: ['./ps-content-text-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PsContentTextListComponent implements OnInit {
  @Input() sectionTitle?: string;
  @Input() sectionType?: PsContentTextListTypes;
  @Input() listItems?: PsTextListItem[];

  constructor() {}

  ngOnInit(): void {}
}
