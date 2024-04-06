import React from 'react'

const Sections = ({children, Section="div",...props}) => {
  return (
    <Section {...props}>
    {children}
    </Section>
    

  )
}

export default Sections