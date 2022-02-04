import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: auto minmax(30px, 45px) auto;
  border: 1px solid var(--mediumLight);
  border-radius: 0.2rem;
  height: 38px;
  width: fit-content;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
  *:focus {
    outline: none;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
    text-align: center;
  }
  .quantityInput {
    height: 100%;
    border-top: none;
    border-bottom: none;
    border-left: 1px solid var(--mediumLight);
    border-right: 1px solid var(--mediumLight);
  }
  .quantitySelector {
    height: 100%;
    background-color: var(--light);
    border: none;
    color: var(--fontDarkGrey);
    font-weight: bolder;
    cursor: pointer;
    margin: 0px !important;
  }
  .disabled {
    color: var(--text-disable);
  }
`;
