import type { Meta, StoryObj } from '@storybook/angular';
import { VideoPlayerComponent } from './video-player.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<VideoPlayerComponent> = {
  title: 'M-Widgets/VideoPlayerComponent',
  component: VideoPlayerComponent,
  tags: ['autodocs'],
  render: (args: VideoPlayerComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<VideoPlayerComponent>;

export const Demo: Story = {
  args: {
    //primary: true,
    //label: 'Button',
  },
};