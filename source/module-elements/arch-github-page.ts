import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { default as archPattern } from './arch-pattern/arch-pattern';

import './arch-pattern/arch-scheme';
import './arch-pattern/arch-scheme-typo';

@customElement('arch-github-page')
export class ArchGithubPage extends LitElement {
  /** */
  @property({ type: { standalone: Boolean, device: String } }) pwa = { standalone: false, device: 'desktop' };
  @property({ type: String }) pathname = '';
  @property({ type: String }) name = 'Somebody';
  @property({ type: { loaded: Boolean, urn: String, name: String, login: String, bio: String, avatar: String } }) profile = {
    loaded: false,
    urn: '',
    name: '',
    login: '',
    bio: '',
    avatar: '',
  };

  /** */
  static styles = [
    archPattern.reference('arch-scheme').render(),
    archPattern.reference('arch-scheme:typo').render(),
    css`
      :host,
      :host * {
        box-sizing: border-box;
      }

      :host {
        display: flex;
        flex-direction: column;
        flex: none;
        /* justify-content: center; */
        /* align-items: center; */

        min-width: 0vw;
        max-width: 100vw;
      }

      @media (max-width: 679px) {
        :host {
          padding-left: 20px;
          padding-right: 20px;
        }
      }
      @media (max-width: 960em) and (min-width: 680em) {
        :host {
          padding-left: 5vw;
          padding-right: 5vw;
        }
      }
      @media (min-width: 961px) {
        :host {
          padding-left: 12.5vw;
          padding-right: 12.5vw;
        }
      }
    `,
    css`
      /** */
      .arch-node.page-content {
        display: flex;
        flex-direction: column;
        flex: none;
        justify-content: center;
        align-items: center;

        width: 100%;
        min-height: 100vh;
      }

      :host([standalone][device='desktop']) .arch-node.page-content {
        padding-bottom: 35px;
      }

      .arch-node.page-card {
        display: flex;
        flex-direction: row;
        flex: none;
        align-items: center;

        margin: 0em 2.5em 0em 0em;
      }
      .arch-node.page-card > div {
        display: flex;
        flex-direction: column;
        flex: none;
      }
      .arch-node.page-card > div > *:first-child {
        font-size: 1.2em;
        font-weight: 500;

        color: var(--typo-scheme-h2);

        margin-block-start: 0em;
        margin-block-end: 0em;
      }
      .arch-node.page-card > div > *:last-child {
        line-height: 0.9375em;
        font-size: 0.9em;
        font-weight: 500;

        color: var(--typo-scheme-h2);

        margin-block-start: 0.3em;
        margin-block-end: 0.3em;
      }

      .arch-node.page-card-figure {
        height: 5em;
        width: 5em;
        margin: 0em 1em 0em 0em;

        border-radius: 2.5em;
        background-color: var(--arch-scheme-backdrop-dim);
        background-position: center;
        background-size: cover;

        overflow: hidden;
      }
    `,
  ];

  /** */
  render() {
    return html`
      <div class="arch-node page-content" id="content" tabindex="-1">
        ${this.profile.loaded
          ? html`
              <div class="arch-node page-card">
                <figure aria-label="Profile image" class="arch-node page-card-figure" style="background-image:url('${this.profile.avatar}')"></figure>
                <div>
                  <h2 class="arch-typo">${this.profile.name}</h2>
                  <p class="arch-typo"><a aria-label="Navigate to ${this.profile.name}'s profile on GitHub" href="${this.profile.urn}">@${this.profile.login}</a></p>
                </div>
              </div>
            `
          : html``}
      </div>
    `;
  }

  updated() {
    this.pwa.standalone ? this.setAttribute('standalone', '') : this.removeAttribute('standalone');
    this.setAttribute('device', this.pwa.device);
  }
}
