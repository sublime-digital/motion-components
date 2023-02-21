import { Story, Meta } from '@storybook/angular/types-6-0';
import MIconsComponent from './m-icons.component';

export default {
  title: 'M-Lib/Motion Icons',
  component: MIconsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<MIconsComponent> = (args: MIconsComponent) => ({
  props: args,
});

export const Free = Template.bind({});
Free.args = {
  primary: true,
  label: 'MIconsComponent',
};

export const Premium = Template.bind({});
Premium.args = {
  label: 'MIconsComponent',
};