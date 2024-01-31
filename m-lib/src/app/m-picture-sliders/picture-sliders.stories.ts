import type { Meta, StoryObj } from '@storybook/angular';
//import PictureSlidersComponent from './picture-sliders.component';
import { PictureSlidersComponent } from "./picture-sliders.component";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<PictureSlidersComponent> = {
  title: 'M-Widgets/PictureSlidersComponent',
  component: PictureSlidersComponent,
  tags: ['autodocs'],
  render: (args: PictureSlidersComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<PictureSlidersComponent>;

export const Demo: Story = {
  args: {
    //primary: true,
    //label: 'Button',
  },
};