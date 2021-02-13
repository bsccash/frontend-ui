import React from 'react';
import styled from 'styled-components';

import Card2 from '../Card2';
import CardContent from '../CardContent';
import Container from '../Container';

export interface ModalProps {
  onDismiss?: () => void;
}

const Modal: React.FC = ({ children }) => {
  return (
    <Container size="sm">
      <StyledModal>
        <Card2>
          <CardContent>{children}</CardContent>
        </Card2>
      </StyledModal>
    </Container>
  );
};

const StyledModal = styled.div`
  border-radius: 12px;
//  box-shadow: 24px 24px 48px -24px ${(props) => props.theme.color.grey[900]};
  position: relative;
`;

export default Modal;
