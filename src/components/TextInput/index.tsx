import { InputHTMLAttributes, ReactNode  } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps{
  children: ReactNode;
}

function TextInputRoot(props : TextInputRootProps) {
  return(
    <div className='flex items-center gap-3 py-4 px-3 h-12 rounded bg-white  font-sans   w-full focus-within:ring-2 ring-cyan-300 '>
      {props.children}
    </div>

  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return(
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput(props: TextInputInputProps) {
  return(
      <input
      className="bg-transparent flex-1 placeholder:text-gray-400 text-gray-800 text-xs outline-none"
        {...props }
      />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input:  TextInputInput,
  Incon:  TextInputIcon,
}