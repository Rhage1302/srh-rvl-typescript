const fragment: { [prop: string]: any } = {};
const internal: { [prop: string]: any } = {};

internal.state = { standalone: null };

fragment.getDevice = () => {
  return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)
    ? 'tablet'
    : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)
    ? 'tablet'
    : 'desktop';
};

fragment.installPWA = (pwaUpdatedCallback: (state: object) => void) => {
  const update = () => {
    const device: string = fragment.getDevice();
    const standalone: boolean = window.matchMedia('(display-mode: standalone)').matches;

    if (internal.state.standalone === standalone) {
      return;
    }

    internal.state = { standalone, device };

    pwaUpdatedCallback(internal.state);
  };

  update();
  window.addEventListener('appinstalled', update);
  window.addEventListener('resize', update);
};

export default fragment;
