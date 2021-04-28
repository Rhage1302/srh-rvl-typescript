import './module-elements/arch-github-page.ts';
import { default as archPWA } from './module/arch-pwa';
import { default as archRouter } from './module/arch-router';

const node: { [prop: string]: any } = document.querySelector('arch-github-page')!;

/** Observer page navigation */
archPWA.installPWA((pwa: { standalone: boolean }) => {
  Promise.resolve().then(() => {
    node.pwa = pwa;
    node.requestUpdate();
  });
});

/** Observer page navigation */
archRouter.installRouter((location: Location, event: Event | null) => {
  Promise.resolve().then(() => {
    node.pathname = location.pathname;
    node.requestUpdate();
  });
});

const updateProfile = (account: string) => {
  return new Promise<void>(async (resolve, reject) => {
    const accountDetails: { [porp: string]: any } = await fetch(`https://api.github.com/users/${account}`)
      .then((response) => response.json())
      .catch((err) => console.log(err));

    // const accountRrepos: { [porp: string]: any } = await fetch(`https://api.github.com/users/${account}/repos`)
    //   .then((response) => response.json())
    //   .catch((err) => console.log(err));

    if (accountDetails.message) reject(accountDetails);

    node.profile = {
      loaded: true,
      urn: accountDetails.html_url || '',
      name: accountDetails.name || '',
      login: accountDetails.login || '',
      bio: accountDetails.bio || '',
      avatar: accountDetails.avatar_url || '',
    };

    node.requestUpdate();
    resolve();
  });
};

let account: string = location.hostname.split('.')[0];
if (['localhost', 'github', '192'].includes(account)) account = 'MiloTheirself';

updateProfile(account).catch((err) => {
  console.log(err);
  updateProfile('MiloTheirself').catch((err) => console.log(err));
});
