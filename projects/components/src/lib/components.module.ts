import { NgModule } from '@angular/core';
import { PsHeaderComponent } from './ps-header/ps-header.component';
import { PsFooterComponent } from './ps-footer/ps-footer.component';

@NgModule({
  declarations: [PsHeaderComponent, PsFooterComponent],
  imports: [],
  exports: [PsHeaderComponent, PsFooterComponent],
})
export class ComponentsModule {}
