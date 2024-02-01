import "./css/reset.css";
import "./css/style.css";
import "./css/colors.css";
import "./css/responsive.css";
import noMessagesFound from "./assets/no-messages-found.svg";
import { copyToClipboard } from "./copyToClipboard.ts";
import { convertingMessageHandle } from "./convertingMessageHandle.ts";
import { cleanInputMessage } from "./cleanInputMessage.ts";
import { themeSelect } from "./themeSelect.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <div id="app-container">
    <header>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" viewBox="0 0 32 48" fill="none" id="logo">
        <path id="logo-color" fill-rule="evenodd" clip-rule="evenodd" d="M24.084 23.6529C24.0393 23.9311 23.9304 24.1959 23.7654 24.4275C23.6004 24.659 23.3836 24.8512 23.1313 24.9898C22.6231 25.3086 22.1785 25.468 21.7286 25.6274C20.7705 25.9488 19.7621 26.2702 18.6956 26.643C17.5708 27.0157 16.5624 27.3885 15.6626 27.6585C14.5404 28.0313 13.4738 28.3526 12.4602 28.7254C11.6976 29.0425 10.9812 29.4556 10.3297 29.9544C9.72369 30.4877 9.19486 31.0983 8.75759 31.7695C8.30767 32.515 8.02448 33.4766 8.02448 34.5975C8.02448 36.842 8.58556 38.5491 9.71036 39.6161C10.8325 40.7396 12.9127 41.2718 15.996 41.2718C19.1402 41.2718 21.2733 40.6856 22.4008 39.5107C23.5203 38.3357 24.0814 36.6826 24.0814 34.5487V23.6529H24.084ZM15.9987 0C21.5036 0 25.545 1.01553 28.1254 3.09802C30.7085 5.12908 32 7.74119 32 10.8366V37.2148C32 38.2817 31.7777 39.4567 31.386 40.737C30.989 42.0225 30.2056 43.1949 28.9696 44.2592C27.7919 45.3313 26.1643 46.2389 24.0867 46.933C22.0091 47.6272 19.3149 48 16.0013 48C12.6931 48 9.99355 47.6272 7.91862 46.933C5.84369 46.2389 4.21338 45.3313 3.03565 44.2592C1.94004 43.3001 1.11006 42.089 0.62195 40.737C0.224961 39.4592 0 38.2843 0 37.2174V33.001C0 30.7565 0.616657 28.674 1.85262 26.8563C3.08858 24.9898 4.82739 23.7095 7.07435 22.9073C8.19651 22.5345 9.48805 22.1618 10.9463 21.681C12.4072 21.1976 13.7517 20.7169 15.1015 20.2927C16.4512 19.8633 17.629 19.434 18.6373 19.0586C19.2458 18.8221 19.8639 18.6094 20.49 18.421L21.5009 17.9402C21.8979 17.7268 22.287 17.4055 22.6813 16.9787C23.073 16.5545 23.4091 16.0737 23.6923 15.5389C23.9915 14.9599 24.1457 14.3203 24.1423 13.6724V11.9627C24.1464 11.3361 24.011 10.716 23.7453 10.145C23.523 9.5023 23.073 8.91612 22.4564 8.38393C21.8397 7.84917 20.9955 7.42239 19.9871 7.09845C18.9761 6.78222 17.6316 6.62025 16.1125 6.62025C12.9683 6.62025 10.8907 7.21157 9.76859 8.43535C8.81581 9.50488 8.25473 10.8392 8.14358 12.3329C8.14358 12.6543 7.86304 12.8677 7.52427 12.8677L0.677529 12.9757C0.51489 12.9764 0.358555 12.9146 0.242564 12.8039C0.126572 12.6931 0.0603177 12.5423 0.0582251 12.3844V10.8418C0.0582251 9.3429 0.341411 7.95458 0.958068 6.62025C1.57737 5.28334 2.53279 4.16497 3.82169 3.20086C5.11322 2.24189 6.79911 1.44231 8.81846 0.907552C10.7849 0.26481 13.1986 0 16.004 0H15.9987Z" fill="currentColor"/>
      </svg>
      <div id="theme-select">
        <div id="icon-select">
          <svg id="icon-palette" xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 256 256">
            <path id="icon-palette-path" d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89ZM84,168a12,12,0,1,1,12-12A12,12,0,0,1,84,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,84,112Zm44-24a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm44,24a12,12,0,1,1,12-12A12,12,0,0,1,172,112Z" fill="url(#icon-palette-gradient)"></path>
            <defs>
              <linearGradient id="icon-palette-gradient">
                <stop class="stop1" offset="0%" />
                <stop class="stop2" offset="16%" />
                <stop class="stop3" offset="33%" />
                <stop class="stop4" offset="49%" />
                <stop class="stop5" offset="66%" />
                <stop class="stop6" offset="83%" />
                <stop class="stop7" offset="100%" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <button id="btn-theme-light" class="btn-ghost btn-theme" data-theme="light" title="Selecionar tema claro">
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <rect width="16" height="16" x="1" y="0" rx="4" ry="4" fill="currentColor" /> 
          </svg>
        </button>
        <button id="btn-theme-dark" class="btn-ghost btn-theme" data-theme="dark" title="Selecionar tema escuro">
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
            <rect width="16" height="16" x="1" y="0" rx="4" ry="4" fill="currentColor" /> 
          </svg>
        </button>
      </div>
    </header>
    <main>
      <div class="input-message-container">
        <span id="input-message" role="textbox" contenteditable="plaintext-only"></span>
        <button id="btn-message-backspace" class="btn-ghost hide" title="Apagar texto">
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#000000" viewBox="0 0 256 256"><path d="M216,40H68.53a16.12,16.12,0,0,0-13.72,7.77L9.14,123.88a8,8,0,0,0,0,8.24l45.67,76.11h0A16.11,16.11,0,0,0,68.53,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM165.66,146.34a8,8,0,0,1-11.32,11.32L136,139.31l-18.35,18.35a8,8,0,0,1-11.31-11.32L124.69,128l-18.35-18.34a8,8,0,1,1,11.31-11.32L136,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L147.31,128Z"></path></svg>
        </button>
      </div>
      <span class="message-warning">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" id="icon-warning">
        <g clip-path="url(#clip0_2_231)">
          <path id="warning-color" d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8 4C7.87361 4.00007 7.74863 4.02662 7.63312 4.07793C7.51761 4.12924 7.41413 4.20418 7.32934 4.29791C7.24456 4.39165 7.18035 4.5021 7.14084 4.62217C7.10134 4.74223 7.08743 4.86923 7.1 4.995L7.45 8.502C7.46176 8.63977 7.5248 8.76811 7.62664 8.86164C7.72849 8.95516 7.86173 9.00705 8 9.00705C8.13827 9.00705 8.27151 8.95516 8.37336 8.86164C8.4752 8.76811 8.53824 8.63977 8.55 8.502L8.9 4.995C8.91257 4.86923 8.89866 4.74223 8.85915 4.62217C8.81965 4.5021 8.75544 4.39165 8.67066 4.29791C8.58587 4.20418 8.48239 4.12924 8.36688 4.07793C8.25137 4.02662 8.12639 4.00007 8 4ZM8.002 10C7.73678 10 7.48243 10.1054 7.29489 10.2929C7.10736 10.4804 7.002 10.7348 7.002 11C7.002 11.2652 7.10736 11.5196 7.29489 11.7071C7.48243 11.8946 7.73678 12 8.002 12C8.26722 12 8.52157 11.8946 8.70911 11.7071C8.89664 11.5196 9.002 11.2652 9.002 11C9.002 10.7348 8.89664 10.4804 8.70911 10.2929C8.52157 10.1054 8.26722 10 8.002 10Z" fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0_2_231">
            <rect width="16" height="16" fill="currentColor"/>
          </clipPath>
        </defs>
      </svg>
        Apenas letras minúsculas e sem acento.
      </span>
      <div class="message-actions">
        <button class="btn-converting" data-method="encript" disabled>Criptografar</button>
        <button class="btn-converting btn-secondary" data-method="dencript" disabled>Descriptografar</button>
      </div>
    </main>
    <aside>
      <div class="no-messages-found">
        <img src="${noMessagesFound}" alt={}>
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
themeSelect();