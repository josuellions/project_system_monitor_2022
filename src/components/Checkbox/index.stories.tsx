import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from '.'

import { Text } from '../Text/index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size="sm">Text default da label do checkbox</Text>
        </div>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = { }
