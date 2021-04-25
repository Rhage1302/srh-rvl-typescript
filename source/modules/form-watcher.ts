const fragment: { [prop: string]: any } = {};
const internal: { [prop: string]: any } = {};

internal.readAsObject = (target: HTMLFormElement) => {
  let inputs = target.querySelectorAll('input');
  let values: { [prop: string]: string } = {};

  inputs.forEach((input) => {
    if (input.id && input.id != '') {
      values[input.id] = input.value;
    }
  });

  return values;
};

fragment.installWatcher = (target: HTMLFormElement, changedCallback: (result: { [prop: string]: any }) => void) => {
  target.addEventListener('submit', (evt) => {
    evt.preventDefault();
    changedCallback(internal.readAsObject(target));
  });
};

export default fragment;
