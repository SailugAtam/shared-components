import styled from 'styled-components';
import MetaAnchorProxy from './MetaAnchorProxy';

export default styled(MetaAnchorProxy)`
  .metaAnchor {
    color: var(--mediumLightGrey);
    text-decoration: none;
    font-size: 1rem;
    display: grid;
    padding: 1px 0;
    width: fit-content;
    &.hide {
      display: none;
    }
  }

  .metaAnchor:hover {
    font-weight: bolder;
    color: var(--white);
  }

  .metaAnchorMediaIcon {
    color: var(--mediumLightGrey);
    text-decoration: none;
    font-size: 1rem;
    padding: 1px 0;

    &:hover {
      font-weight: bolder;
      color: var(--white);
    }
    &.hide {
      display: none;
    }
  }
`;
