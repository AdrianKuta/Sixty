import styled from 'styled-components';

export const CatalogContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CatalogWrapper = styled.div`
  padding: 3rem;
`;
