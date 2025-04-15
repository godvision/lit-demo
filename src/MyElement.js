import { LitElement, html, css } from 'lit';

import { myElementStyles } from './element-style.js';
export class MyElement extends LitElement {
  static styles = [
    myElementStyles,
    css`
    `
  ];

  static properties = {
    name: { type: String },
    count: { type: Number },
  };

  constructor() {
    super();
    this.name = 'Lit Demo';
    this.count = 0;
  }

  _onNameInput(e) {
    this.name = e.target.value;
  }

  _incrementCount() {
    this.count++;
  }

  _computeBackground() {
 
    return this.count % 2 === 0 ? '#FFFDE7' : '#FFECB3';
  }

  render() {
    return html`
      <div
        class="background-container"
        style="background: ${this._computeBackground()}"
      >
        <h1>Welcome to the Lit Demo!</h1>
        <div class="content">
          <p>${this.name} is displayed!</p>
          <p>
            The button has been clicked: ${this.count}
            ${this.count === 1 ? 'time' : 'times'}.
          </p>
          ${this.count % 2 === 0
            ? html`<p>Even number of clicks!</p>`
            : html`<p>Odd clicks... </p>`}
        </div>

        <div class="controls">
          <input
            type="text"
            placeholder="Enter display name"
            .value=${this.name}
            @input=${this._onNameInput}
          />
          <button @click=${this._incrementCount}>Increment Count</button>
        </div>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);