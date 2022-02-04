import styled from 'styled-components';

export default styled.div`
  .custom-control {
    display: unset;
  }
  .custom-switch {
    .custom-control-input:checked ~ .custom-control-label::before {
      border-color: var(--success);
      background-color: var(--success);
    }

    .custom-control-input:checked + .custom-control-label {
      color: var(--success) !important;
    }

    .custom-control-label {
      padding-top: 2px;
      padding-left: 5px;
    }

    .custom-control-input::after.custom-control-input:focus {
      outline: 0px !important;
      -webkit-appearance: none;
      box-shadow: none !important;
    }

    .custom-control-label::before {
      height: 1rem;
      width: calc(1.5rem + 0.75rem);
      border-radius: calc(1rem * 2);
    }

    .custom-control-label::after {
      width: calc(1rem - 4px);
      height: calc(1rem - 4px);
      border-radius: calc(1.5rem - (1rem / 1));
    }

    .custom-control-input:checked ~ .custom-control-label::after {
      transform: translateX(calc(2rem - 0.75rem));
    }
  }
`;
