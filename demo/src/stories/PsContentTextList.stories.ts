import { Meta, moduleMetadata, Story } from '@storybook/angular';

import {
  PsContentTextListComponent,
  PsContentTextListTypes,
} from '@ravindusachintha/rs-ng-components';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { APP_INITIALIZER } from '@angular/core';
import {
  faBirthdayCake,
  faEnvelope,
  faHeart,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components / Ps-Content-Text-List',
  component: PsContentTextListComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => {
            iconLibrary.addIcons(faMapMarkerAlt);
            iconLibrary.addIcons(faBirthdayCake);
            iconLibrary.addIcons(faHeart);
            iconLibrary.addIcons(faEnvelope);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

const Template: Story<PsContentTextListComponent> = (
  args: PsContentTextListComponent
) => ({
  component: PsContentTextListComponent,
  template: `
  <rs-components-ps-content-text-list
    [sectionTitle]="sectionTitle"
    [sectionType]="sectionType"
    [listItems]="listItems">
  </rs-components-ps-content-text-list>
  `,
  props: args,
});

export const psContentTextList = Template.bind({});

psContentTextList.args = {
  sectionTitle: 'Basic Information',
  sectionType: PsContentTextListTypes.INFO,
  listItems: [
    {
      text: 'Negombo, Sri Lanka',
      icon: faMapMarkerAlt,
    },
    {
      text: 'September, 1996',
      icon: faBirthdayCake,
    },
    {
      text: 'Single',
      icon: faHeart,
    },
    {
      url: 'mailto:ravindusachintha53@gmail.com',
      text: 'ravindusachintha53@gmail.com',
      icon: faEnvelope,
    },
  ],
};
