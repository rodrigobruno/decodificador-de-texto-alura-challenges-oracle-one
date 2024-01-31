import "./css/reset.css";
import "./css/style.css";
import "./css/colors.css";
import "./css/responsive.css";
import { copyToClipboard } from "./copyToClipboard.ts";
import { convertingMessageHandle } from "./convertingMessageHandle.ts";
import { cleanInputMessage } from "./cleanInputMessage.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <div id="app-container">
    <header>
      <img src="/logo.svg" alt="Logo alura">
    </header>
    <main>
      <div class="input-message-container">
        <span id="input-message" role="textbox" contenteditable="plaintext-only"></span>
        <button id="btn-message-backspace" class="btn-ghost hide" title="Apagar texto">
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#000000" viewBox="0 0 256 256"><path d="M216,40H68.53a16.12,16.12,0,0,0-13.72,7.77L9.14,123.88a8,8,0,0,0,0,8.24l45.67,76.11h0A16.11,16.11,0,0,0,68.53,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM165.66,146.34a8,8,0,0,1-11.32,11.32L136,139.31l-18.35,18.35a8,8,0,0,1-11.31-11.32L124.69,128l-18.35-18.34a8,8,0,1,1,11.31-11.32L136,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L147.31,128Z"></path></svg>
        </button>
      </div>
      <span class="message-warning">
        <img src="/warning.svg" alt={}>
        Apenas letras minúsculas e sem acento.
      </span>
      <div class="message-actions">
        <button class="btn-converting" data-method="encript" disabled>Criptografar</button>
        <button class="btn-converting btn-secondary" data-method="dencript" disabled>Descriptografar</button>
      </div>
    </main>
    <aside>
      <div class="no-messages-found">
        <img src="/no-messages-found.svg" alt={}>
        <div class="no-messages-found-infos">
          <h2>Nenhuma mensagem encontrada</h2>
          <p>Digite um texto que você deseja criptografar ou descriptografar.</p>
        </div>
      </div>
      <div class="show-message-result hide">
        <p id="message-result"></p>
        <button id="copy-to-clipboard" class="btn-secondary">Copiar</button>
      </div>
    </aside>
    <footer>
      Desenvolvido por <a href="http://rodrigobruno.com" target="_blank" rel="noopener noreferrer">Rodrigo Bruno</a>
    </footer>
  </div>
`;

convertingMessageHandle();
copyToClipboard("#copy-to-clipboard");
cleanInputMessage();