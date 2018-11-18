/**
 *
 * src/js/script.js
 *
 */


/**
 * domSelector
 */
const domSelector = Object.freeze({
  getChatView: function() {
    return document.querySelector('.gaia-argoui-app-show-sidebar-dragged');
  },
  getButtonList: function() {
    return document.querySelector('.gaia-argoui-app-show-sidebartabs').children[0];
  },
});


/**
 * make element of the toggle button.
 * @param {Function} onClick - onClick listener function
 */
const makeToggleButton = function(onClick = null) {
  let elem = document.createElement('a');
  elem.setAttribute('class', 'goog-tab sidebar-tab-history-gaia');
  elem.setAttribute('title', 'ChatPaneToggleButton');
  elem.setAttribute('aria-selected', 'false');
  elem.setAttribute('role', 'tab');
  elem.setAttribute('id', 'kintone-chat-opener-toggle-button');

  // TODO: 画像適当なのでなんとかしたい
  elem.setAttribute('style', `
    user-select: none;
    background-image: url(https://static.cybozu.com/contents/k/image/argo/uiparts/widget/add.png);
    background-size: 55% 55%;
    background-position: center;
    background-color: #9f9f9f;
  `);
  elem.innerText = 'Toggle';
  elem.addEventListener('click', onClick);
  return elem;
};


/**
 * get element width.
 * @param {Element} elem - element
 */
const getElementWidth = function(elem) {
  return window.getComputedStyle(elem, null)['width'];
};


/**
 * update element width.
 * @param {Element} elem - element
 * @param {Number} width - width (px)
 */
const updateElementWidth = function(elem, width) {
  elem.style.width = `${width}px`;
};


/**
 * main func
 */
const main = function() {
  const elemChatview = domSelector.getChatView();
  const initialWidth = Number.parseInt(getElementWidth(elemChatview), 10);

  // Buttons
  let elemBtnList = domSelector.getButtonList();
  elemBtnList.appendChild(makeToggleButton(function () {
    const elem = domSelector.getChatView();
    const w = Number.parseInt(getElementWidth(elem), 10);

    if (w <= 10) {
      updateElementWidth(elem, initialWidth);
    } else {
      updateElementWidth(elem, 10);
    }
  }));
};


// Entry Point
if (document.readyState !== 'loading') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}

