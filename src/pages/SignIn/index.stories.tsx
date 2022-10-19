import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';
import { SignIn } from ".";

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'sucesso: Login realizado!'
          }));
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj<any> = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'teste@email.com.br');
    userEvent.type(canvas.getByPlaceholderText('Digite sua senha'), 'senhateste123');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      expect(canvas.getByText('Login realizado com sucesso!')).toBeInTheDocument();
    })
  }
}
