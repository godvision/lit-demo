import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'my-element': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        name?: string;
      };
    }
  }
}