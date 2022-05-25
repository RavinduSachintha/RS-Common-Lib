import { Meta, Story } from '@storybook/angular';

import { PsContentTextComponent } from '@ravindusachintha/rs-ng-components';

export default {
  title: 'Components / Ps-Content-Text',
  component: PsContentTextComponent,
} as Meta;

const Template: Story<PsContentTextComponent> = (
  args: PsContentTextComponent
) => ({
  component: PsContentTextComponent,
  template: `
  <rs-components-ps-content-text
    [sectionTitle]="sectionTitle"
    [contentText]="contentText">
  </rs-components-ps-content-text>
  `,
  props: args,
});

export const psContentText = Template.bind({});

psContentText.args = {
  sectionTitle: 'About Me',
  contentText: "I am a fast learner, a flexible team worker and a friendly character who" 
    + "seeks knowledge and experience in the field of Computer Science. Also an"
    + "outgoing personality with good communication and project management"
    + "skills. I’m interested in web / software application development and"
    + "research areas such as Distributed Computing, Blockchain, Machine"
    + "Learning, and Natural Language Processing.",
};
