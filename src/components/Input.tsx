import { InputHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({className, ...rest }, ref) => {
  return (
    <input 
      {...rest}
      ref={ref}
      className={cn(
        'w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white',
        className,
      )}
    />
  )
})

// import React, { forwardRef, ForwardRefRenderFunction } from 'react';

// // Define props types
// interface MyComponentProps {
//   // Define your component's props here
//   text: string;
//   onClick?: () => void;
// }

// // Define the component
// const MyComponent: ForwardRefRenderFunction<HTMLDivElement, MyComponentProps> = ({ text, onClick }, ref) => {
//   return (
//     <div ref={ref} onClick={onClick}>
//       {text}
//     </div>
//   );
// };

// // Forward the ref to the component
// export const ForwardedMyComponent = forwardRef(MyComponent);