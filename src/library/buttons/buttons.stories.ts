import { Story, Meta } from '@storybook/angular/types-6-0';
import ButtonsComponent from './buttons.component';

export default {
  title: 'M-Lib/Buttons',
  component: ButtonsComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonsComponent> = (args: ButtonsComponent) => ({
  props: args,
});

export const Alpha = Template.bind({});
Alpha.args = {
  width: '50px',
};

export const Beta = Template.bind({});
Beta.args = {
  width: '60px',
};

export const Gamma = Template.bind({});
Gamma.args = {
  width: '70px',
};

export const Delta = Template.bind({});
Delta.args = {
  width: '80px',
};
