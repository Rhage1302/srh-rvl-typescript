import { css, unsafeCSS } from 'lit';

const fragment: { [prop: string]: any } = {};
const internal: { [prop: string]: any } = {};

// declare module globalThis {
//   let archPattern: { [prop: string]: any };
// }

// internal.state = globalThis.archPattern = globalThis.archPattern || {};
internal.state = {};

fragment.reference = (prop: string) => {
  if (!internal.state[prop]) {
    internal.state[prop] = {
      template: () => css`
        /* err:${unsafeCSS(prop)} null */
      `,
      render: (...args: any) => internal.state[prop].template(...args),
      create: (template: (...args: any) => any) => {
        internal.state[prop].template = template;
      },
    };
  }

  return internal.state[prop];
};

export default fragment;
