import { LitElement, html, css } from 'lit';

export class MyElement extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--background-color, #ECEFF1);
      box-sizing: border-box;
      padding: 1rem;
      margin: 0;
    }

    .background-container {
      width: 80%;
      height: 80%;
      padding: 2rem;
      border: 2px solid var(--primary-color, #009688);
      border-radius: 8px;
      background-color: #FFFDE7;
      box-sizing: border-box;
    }

    h1 {
      font-family: 'Arial', sans-serif;
      color: var(--primary-color, #009688);
      margin-top: 0;
    }

    .content {
      margin: 1rem 0;
    }

    p {
      color: var(--text-color, #333);
      font-size: 1.2rem;
      transition: color 0.3s ease;
    }

    .controls {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    input {
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      width: 50%;
      margin-bottom: 1rem;
      box-sizing: border-box;
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 4px;
      background-color: var(--primary-color, #009688);
      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #00796B;
    }
  `;

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