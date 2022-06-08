import React from 'react';

export const PrimaryLink = ({children, selected}) => (
  <h1 className={`font-semibold italic hover:line-through hover:cursor-pointer ${selected ? 'line-through' : 'no-underline'}`}>
    {children}
  </h1>
)

export const SecondaryLink = ({children, selected}) => (
  <h2 className={`text-xs hover:text-highlight hover:cursor-pointer ${selected ? 'text-highlight' : 'text-black'}`}>
    {children}
  </h2>
)

export const Subtitle = ({children, customStyle}) => (
  <h2 className={`text-xs md:text-base font-serif italic uppercase ${customStyle}`}>
    {children}
  </h2>
)

export const Paragraph = ({children, customStyle}) => (
  <p className={`text-xs ${customStyle}`}>
    {children}
  </p>
)

export const SmallSubtitle = ({children, customStyle}) => (
  <h3 className={`text-xs ${customStyle}`}>
    {children}
  </h3>
)