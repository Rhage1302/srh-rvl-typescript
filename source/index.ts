import { default as formUtils } from './modules/form-watcher';

const form = document.querySelector('form')!;

formUtils.installWatcher(form, (result: { [prop: string]: any }) => {
  console.log(`a: ${result.numA}`);
  console.log(`b: ${result.numB}`);
  console.log(`\na + b = ${parseInt(result.numA) + parseInt(result.numB)}`);
});
