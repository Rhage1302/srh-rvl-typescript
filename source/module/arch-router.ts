const fragment: { [prop: string]: any } = {};
const internal: { [prop: string]: any } = {};

internal.resolveRedirect = () => {
  const parameters = fragment.getParameters();

  if ('redirect' in parameters) {
    const redirect = unescape(parameters.redirect);
    delete parameters.redirect;

    const searchParams = Object.keys(parameters).map((prop) => prop + '=' + parameters[prop]);
    const search = searchParams.length > 0 ? `?${searchParams.join('&')}` : '';

    const href = `${location.pathname}${redirect}${search}${location.hash}`.replace(/\/\//g, '/');
    window.history.pushState({}, '', href);
  }
};

internal.resolveHash = () => {
  if (location.hash.startsWith('#!')) return (location.hash = location.hash.replace('#!', '#'));

  const hash = location.hash;
  const node = hash != '' ? document.querySelector(hash)! : null;

  if (node != null) {
    // native focus
    // (node as HTMLElement).focus();
  } else {
    let found: boolean = false;

    const findById = (node: HTMLElement | ShadowRoot, hash: string) => {
      [...node.children].map((child) => {
        if (!found && child.shadowRoot) {
          const target = child.shadowRoot.querySelector('#content')!;

          if (target != null) {
            found = true;
            (target as HTMLElement).focus();
          }

          findById(child.shadowRoot, hash);
        }
      });
    };

    findById(document.body, hash);
  }
};

internal.resolveInteraction = (evt: MouseEvent, locationUpdatedCallback: (location: Location, event: Event | null) => void) => {
  if (evt.defaultPrevented || evt.button !== 0 || evt.metaKey || evt.ctrlKey || evt.shiftKey) return;

  const anchor = evt.composedPath().filter((n) => (n as HTMLElement).tagName === 'A')[0] as HTMLAnchorElement | undefined;
  if (!anchor || anchor.target || anchor.hasAttribute('download') || anchor.getAttribute('rel') === 'external') return;

  const href = anchor.href;
  if (!href || href.indexOf('mailto:') !== -1) return;

  const location = window.location;
  const origin = location.origin || location.protocol + '//' + location.host;
  if (href.indexOf(origin) !== 0) return;

  evt.preventDefault();
  if (href !== location.href) {
    window.history.pushState({}, '', href);
    locationUpdatedCallback(location, evt);
  }
};

fragment.getParameters = () => {
  const search = location.search.substring(1);
  return search == '' ? {} : JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
};

fragment.installRouter = (locationUpdatedCallback: (location: Location, event: Event | null) => void) => {
  document.body.addEventListener('click', (evt) => {
    internal.resolveInteraction(evt, () => {
      internal.resolveHash();
      locationUpdatedCallback(window.location, evt);
    });
  });

  window.addEventListener('popstate', (evt) => {
    internal.resolveHash();
    locationUpdatedCallback(window.location, evt);
  });

  internal.resolveRedirect();

  locationUpdatedCallback(window.location, null /* event */);
};

export default fragment;
