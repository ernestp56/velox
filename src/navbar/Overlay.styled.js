import styled from 'styled-components';

export const OverlayContainer = styled.div`

  .overlay-content {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;