// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Modal from './modal.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'M-Lib/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Modal> = (args: Modal) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Card',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Card',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Card',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Card',
};
