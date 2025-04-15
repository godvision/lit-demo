import { css } from 'lit';

export const myElementStyles = css`
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