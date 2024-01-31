import type { Meta, StoryObj } from '@storybook/angular';
import { MusicPlayerComponent } from "./music-player.component"

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<MusicPlayerComponent> = {
  title: 'M-Widgets/MusicPlayerComponent',
  component: MusicPlayerComponent,
  tags: ['autodocs'],
  render: (args: MusicPlayerComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  /*argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },*/
};

export default meta;
type Story = StoryObj<MusicPlayerComponent>;

export const Demo: Story = {
  args: {
    //primary: true,
    //label: 'Button',
  },
};