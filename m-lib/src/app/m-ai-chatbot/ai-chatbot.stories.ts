import type { Meta, StoryObj } from '@storybook/angular';
import { AiChatbotComponent } from "./ai-chatbot.component";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<AiChatbotComponent> = {
  title: 'M-Widgets/AiChatbotComponent',
  component: AiChatbotComponent,
  tags: ['autodocs'],
  render: (args: AiChatbotComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  /*argTypes: {
    backgroundColor: {
      control: 'color',
      xyz: '123',
    },
  },*/
};

export default meta;
type Story = StoryObj<AiChatbotComponent>;

export const Demo: Story = {
  args: {
    //primary: true,
    //label: 'Button',
  }, 
};