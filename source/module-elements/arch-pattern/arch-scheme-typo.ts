import { css } from 'lit';
import { default as archPattern } from './arch-pattern';

archPattern.reference('arch-scheme:typo').create(
  () => css`
    /** */
    :host {
      font-size: var(--font-size);
      font-family: var(--font-family);
      color: var(--typo-scheme);
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    /** */
    a {
      text-decoration: none;
      color: var(--typo-scheme-link);
    }
    a:hover {
      text-decoration: underline;
    }

    /** */
    .arch-node.divider,
    hr.arch-typo {
      border-bottom: 0.08em solid #dfdfdf;
      margin: 0 1.76em;
      height: 0;
    }

    /** */
    .arch-typo.body {
      line-height: 1.7em;
      font-size: 1em;
      font-weight: 500;

      margin-block-start: 1.5em;
      margin-block-end: 1.5em;
    }
    .arch-typo.body-sm {
      line-height: 0.9375em;
      font-size: 1em;
      font-weight: 500;

      margin-block-start: 1.5em;
      margin-block-end: 1.5em;
    }

    .arch-typo.heading-lg {
      font-size: 1.8em;
      font-weight: 500;

      margin: 0 0 1.328em 0;
      padding: 1.5em 0 0.5em 0;
      border-bottom: 1px solid var(--docs-rule-color);

      color: var(--docs-h2-color);
      font-weight: 600;
    }

    .arch-typo.heading {
      font-size: 1.2em;
      font-weight: 500;

      margin-top: 2.2em;
      padding-top: 1em;

      color: var(--docs-h3-color);
      font-weight: 600;
    }

    .arch-typo.heading-sm {
      font-size: 0.88889rem;
      font-weight: 500;

      color: var(--docs-h4-color);
      margin-top: 1.3em;
    }
  `
);
