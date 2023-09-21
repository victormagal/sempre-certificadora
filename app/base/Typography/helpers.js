import { css } from 'styled-components';

const displayStyle = (appearance) => {
  switch (appearance) {
    case 'd1':
      return css`
        font-size: 3.5rem;
        line-height: 4rem;
      `;
    default:
      return css`
        font-size: 4rem;
        line-height: 4.5rem;
      `;
  }
};

const overlineStyle = (appearance) => {
  switch (appearance) {
    case 'o1':
      return css`
        font-size: 0.75rem;
        line-height: 1rem;
      `;
    default:
      return css`
        font-size: 0.625rem;
        line-height: 0.875rem;
      `;
  }
};

const textStyle = (appearance) => {
  switch (appearance) {
    case 'p1':
      return css`
        font-size: 1.25rem;
        line-height: 1.75rem;
      `;
    case 'p2':
      return css`
        font-size: 1.125rem;
        line-height: 1.75rem;
      `;
    case 'p3':
      return css`
        font-size: 1rem;
        line-height: 1.5rem;
      `;
    case 'p4':
      return css`
        font-size: 0.875rem;
        line-height: 1.25rem;
      `;
    default:
      return css`
        font-size: 0.75rem;
        line-height: 1rem;
      `;
  }
};

const titleStyle = (appearance) => {
  switch (appearance) {
    case 'h1':
      return css`
        font-size: 3rem;
        line-height: 3.5rem;
      `;
    case 'h2':
      return css`
        font-size: 2.5rem;
        line-height: 3rem;
      `;
    case 'h3':
      return css`
        font-size: 2rem;
        line-height: 2.5rem;
      `;
    case 'h4':
      return css`
        font-size: 1.5rem;
        line-height: 2rem;
      `;
    case 'h5':
      return css`
        font-size: 1.25rem;
        line-height: 1.75rem;
      `;
    case 'h6':
      return css`
        font-size: 1rem;
        line-height: 1.5rem;
      `;
    case 'h7':
      return css`
        font-size: 0.875rem;
        line-height: 1.25rem;
      `;
    default:
      return css`
        font-size: 0.75rem;
        line-height: 1rem;
      `;
  }
};

export { displayStyle, overlineStyle, textStyle, titleStyle };
