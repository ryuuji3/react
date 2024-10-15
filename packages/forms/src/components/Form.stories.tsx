import { Meta, StoryObj } from '@storybook/react';

import FormComponent from "./Form";

const meta: Meta<typeof FormComponent> = {
    title: 'Components/Form',
    component: FormComponent,
    render: ({ ...args }) => (
        <FormComponent {...args}>
            <button type="submit">Submit</button>
        </FormComponent>
    ),
    argTypes: {
        onSubmit: { template: 'submit' }
    }
}

type Story = StoryObj<typeof FormComponent>;

export const Form: Story = {};

export default meta;