import { Meta, StoryObj } from '@storybook/react';

import FormComponent from "./Form";

const meta: Meta<typeof FormComponent> = {
    title: 'Components/Form',
    component: FormComponent,
}

type Story = StoryObj<typeof FormComponent>;

export const Form: Story = {};

export default meta;