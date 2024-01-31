import type { Meta, StoryObj } from '@storybook/angular';
import { NewsReaderComponent } from "./news-reader.component";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<NewsReaderComponent> = {
  title: 'M-Widgets/NewsReaderComponent',
  component: NewsReaderComponent,
  tags: ['autodocs'],
  render: (args: NewsReaderComponent) => ({
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
type Story = StoryObj<NewsReaderComponent>;

export const Demo: Story = {
  args: {
    //primary: true,
    //label: 'Button',
  },
};