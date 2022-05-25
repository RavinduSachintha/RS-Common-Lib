import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PsHeaderComponent } from './ps-header/ps-header.component';
import { PsFooterComponent } from './ps-footer/ps-footer.component';
import { CommonModule } from '@angular/common';
import { PsContentTextComponent } from './ps-content-text/ps-content-text.component';
import { PsContentTextListComponent } from './ps-content-text-list/ps-content-text-list.component';
import { PsContentCarouselComponent } from './ps-content-carousel/ps-content-carousel.component';
import { PsContentFeatureProjectsComponent } from './ps-content-feature-projects/ps-content-feature-projects.component';
import { PsContentOtherProjectsComponent } from './ps-content-other-projects/ps-content-other-projects.component';
import { PsContentSkillsComponent } from './ps-content-skills/ps-content-skills.component';

@NgModule({
  declarations: [
    PsHeaderComponent,
    PsFooterComponent,
    PsContentTextComponent,
    PsContentTextListComponent,
    PsContentCarouselComponent,
    PsContentFeatureProjectsComponent,
    PsContentOtherProjectsComponent,
    PsContentSkillsComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    PsHeaderComponent,
    PsFooterComponent,
    PsContentTextComponent,
    PsContentTextListComponent,
    PsContentCarouselComponent,
    PsContentFeatureProjectsComponent,
    PsContentOtherProjectsComponent,
    PsContentSkillsComponent,
  ],
})
export class ComponentsModule {}
