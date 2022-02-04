import styled, { keyframes } from 'styled-components';

export const animationRotate = (scale) => keyframes`
  from {
    transform: rotate(0deg) ${scale};
  }
  to {
    transform: rotate(360deg) ${scale};
  }
`;

const loaded = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export default styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  position: fixed;
  background: var(--white);
  z-index: 1000;

  &.contained {
    width: 100%;
    height: 100%;
    min-height: 60vh;
    position: relative;
  }

  &.small {
    width: 100%;
    height: 100%;
    min-height: 50px;
    position: relative;
  }

  & + div {
    height: 100vh;
    overflow: hidden;
  }

  &.loaded {
    animation: ease ${loaded} 0.5s;
  }

  .load__icon {
    animation: linear ${animationRotate('scale(2)')} 2s infinite;
    margin: auto;
    width: 24px;
    height: 24px;
  }

  .load__icon-wrap {
    margin: auto;
  }

  &.as-icon {
    flex: 1;
    width: 100%;
    height: 100%;
    position: inherit;
    background-color: transparent;

    .load__icon {
      animation: linear ${animationRotate()} 2s infinite;
      height: 18px;
      width: 18px;
    }

    &.inverted {
      svg path {
        fill: var(--mediumLight);
      }
    }

    & + div {
      height: inherit;
    }
  }
`;
