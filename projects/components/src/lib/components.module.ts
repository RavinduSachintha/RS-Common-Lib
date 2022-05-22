import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PsHeaderComponent } from './ps-header/ps-header.component';
import { PsFooterComponent } from './ps-footer/ps-footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PsHeaderComponent, PsFooterComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [PsHeaderComponent, PsFooterComponent],
})
export class ComponentsModule {}
