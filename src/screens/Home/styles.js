import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const collapsedStyles = () => css`
  transform: translateX(-80%);
`;

export const BaseLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  transition: transform 1s;
  ${({ collapsed }) => collapsed && collapsedStyles()}
`;

BaseLayout.propTypes = {
  collapsed: PropTypes.bool,
};
