import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { PsHeaderComponent } from '@ravindusachintha/rs-ng-components';
import {
  faGithubAlt,
  faGitlab,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { APP_INITIALIZER } from '@angular/core';

export default {
  title: 'Components / Ps-Header',
  component: PsHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => {
            // Add any icons needed here:
            iconLibrary.addIcons(faGithubAlt);
            iconLibrary.addIcons(faGitlab);
            iconLibrary.addIcons(faLinkedinIn);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

const Template: Story<PsHeaderComponent> = (args: PsHeaderComponent) => ({
  component: PsHeaderComponent,
  template: `
  <rs-components-ps-header
    [imgSrc]="imgSrc"
    [name]="name"
    [description]="description"
    [socialIcons]="socialIcons">
  </rs-components-ps-header>
  `,
  props: args,
});

export const psHeader = Template.bind({});

psHeader.args = {
  imgSrc: 'assets/profile_1.jpg',
  name: 'Ravindu Sachintha',
  description: 'Software Engineer',
  socialIcons: [
    {
      url: '',
      icon: faLinkedinIn,
    },
    {
      url: '',
      icon: faGithubAlt,
    },
    {
      url: '',
      icon: faGitlab,
    },
  ],
};
