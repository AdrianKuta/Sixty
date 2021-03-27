import styled from 'styled-components';

export const MetaInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  border-top: 0.06rem solid gray;
  color: gray;
`;

export const MetaInfoLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: stretch;

  > * {
    margin-right: 2rem;
  }

  > *:last-child {
    margin-right: 0;
  }
`;

export const Value = styled.div``;
