import React from 'react'
import styled from 'styled-components'

const Card2: React.FC = ({ children }) => (
  <StyledCard2>
    {children}
  </StyledCard2>
)

const StyledCard2 = styled.div`
  background-color: ${props => props.theme.color.grey[802]};
//  border: 1px solid ${props => props.theme.color.grey[900]};
  border-radius: 12px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card2
