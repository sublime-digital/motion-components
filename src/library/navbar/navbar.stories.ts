// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Navbar from './navbar.component';

export default {
  title: 'M-Lib/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Navbar> = (args: Navbar) => ({
  props: args,
});

export const M_Nav_Standard = Template.bind({});
M_Nav_Standard.args = {
  label: 'Card',
};

export const M_Nav_Left = Template.bind({});
M_Nav_Left.args = {
  label: 'Card',
};

export const M_Nav_Right = Template.bind({});
M_Nav_Right.args = {
  label: 'Card',
};
