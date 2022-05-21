import { Meta, Story } from '@storybook/angular';

import { PsHeaderComponent } from '@ravindusachintha/rs-ng-components';

export default {
  title: 'Ps-Header',
  component: PsHeaderComponent,
} as Meta;

export const Primary: Story = () => ({
  props: {
    label: 'Header',
    primary: true,
  },
});
