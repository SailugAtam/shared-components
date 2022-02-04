import styled, { css } from 'styled-components';

export default styled.div`
  input[type='radio'] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  label {
    width: 100%;
    padding: 0.5rem 0px;
    font-size: 0.8rem;
    min-width: ${(props) => (props.productVariantStyle ? null : '165px')};
    border-radius: ${(props) =>
      props.productVariantStyle ? '30px' : '0.3rem'};
    line-height: 1.5em;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.5px;
    background-color: var(--white);
    color: var(--brandOptionBlue);
    border: 1px solid var(--brandOptionBlue);
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-bottom: ${(props) => (props.productVariantStyle ? '0px' : '0.5rem')};
    ${(props) =>
      props.productVariantStyle
        ? css`
            &.metaDark {
              background-color: transparent;
              color: var(--dark);
              border: 1px solid var(--mediumLight);
              &:hover {
                color: var(--brandOptionBlue);
                border: 1px solid var(--brandOptionBlue);
              }
            }
          `
        : css`
            &.metaDark {
              background-color: transparent;
              color: var(--dark);
              border: 1px solid var(--mediumLight);
              &:hover {
                background-color: var(--brandOptionBlue);
                color: var(--white);
                border: 1px solid var(--brandOptionBlue);
              }
            }
          `}
  }

  ${(props) =>
    props.productVariantStyle
      ? css`
          input[type='radio']:checked + label {
            /* background-color: var(--brandOptionBlue); */
            color: var(--brandOptionBlue);
            border: 1px solid var(--brandOptionBlue);
          }
          input[type='radio']:focus + label {
            color: var(--brandOptionBlue);
            border: 1px solid var(--brandOptionBlue);
          }

          .disabled {
            label {
              border: 1px solid var(--mediumLightGrey) !important;
              color: var(--mediumLightGrey);
              opacity: 0.4;
              font-style: italic;
              &:hover {
                border: 1px solid var(--mediumLightGrey) !important;
                color: var(--mediumLightGrey);
                cursor: default;
              }
            }
          }
        `
      : css`
          input[type='radio']:checked + label {
            background-color: var(--brandOptionBlue);
            color: var(--white);
            border: 1px solid var(--brandOptionBlue);
          }
          input[type='radio']:focus + label {
            background-color: var(--brandOptionBlue);
            color: var(--white);
            border: 1px solid var(--brandOptionBlue);
          }

          .disabled {
            label {
              background-color: var(--mediumLightGrey) !important;
              border: 1px solid var(--mediumLightGrey) !important;
              color: var(--white);
              opacity: 0.4;
              font-style: italic;
              &:hover {
                color: var(--white);
                border: 1px solid var(--mediumLightGrey) !important;
                cursor: default;
              }
            }
          }
        `}
`;
