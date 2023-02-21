import { Story, Meta } from '@storybook/angular/types-6-0';
import SpinnersComponent from './spinners.component';

export default {
  title: 'M-Lib/Spinner',
  component: SpinnersComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SpinnersComponent> = (args: SpinnersComponent) => ({
  props: args,
});

export const Free = Template.bind({});
Free.args = {
  label: 'Free',
};

export const Premium = Template.bind({});
Premium.args = {
  label: 'Premium',
};