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
  argTypes: {
    'img-src': String,
    name: String,
    description: String,
    'social-icons': [
      {
        url: String,
        icon: faLinkedinIn
      }
    ]
  }
} as Meta;

const Template: Story<PsHeaderComponent> = (args: PsHeaderComponent) => ({
  component: PsHeaderComponent,
  template: `
  <rs-components-ps-header
    [imgSrc]="imgSrc"
    [name]="name"
    [description]="description"
    [socialIcons]="socialIconList">
  </rs-components-ps-header>
  `,
  props: args
});

export const psHeader = Template.bind({});

psHeader.args = {
  imgSrc: 'assets/profile_1.jpg',
  name: 'Ravindu Sachintha',
  description: 'Software Engineer @ CodeGen International',
  socialIcons: [
    {
      url: 'https://www.linkedin.com/in/ravindu-sachintha/',
      icon: faLinkedinIn,
    },
    {
      url: 'https://github.com/RavinduSachintha',
      icon: faGithubAlt,
    },
    {
      url: 'https://gitlab.com/Sachintha96',
      icon: faGitlab,
    },
  ],
};

// export const psHeader = () => ({
//   template: `
//   <rs-components-ps-header
//     [img-src]="imgSrc"
//     [name]="name"
//     [description]="description"
//     [social-icons]="socialIconList">
//   </rs-components-ps-header>
//   `,
//   // Provide the icons as props:
//   props: {
//     imgSrc: 'assets/profile_1.jpg',
//     name: 'Ravindu Sachintha',
//     description: 'Software Engineer @ CodeGen International',
//     'social-icons': [
//       {
//         url: '',
//         icon: faLinkedinIn
//       }
//     ]
//   },
// });
