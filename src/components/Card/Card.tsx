import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => (
  <StyledCard>
    {children}
  </StyledCard>
)

const StyledCard = styled.div`
  background-color: ${props => props.theme.color.grey[800]};
//  border: 1px solid ${props => props.theme.color.grey[900]};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0,0.11) 0px 0px 2px, rgba(95, 99, 104, 0.15) 0px 2px 17px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
