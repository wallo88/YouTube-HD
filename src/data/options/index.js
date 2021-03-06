'use strict';

function restore () {
  chrome.storage.local.get({
    hd: true,
    quality: 'highest',
    log: false,
    faqs: true
  }, (prefs) => {
    document.getElementById('hd').checked = prefs.hd;
    document.getElementById('log').checked = prefs.log;
    document.getElementById('faqs').checked = prefs.faqs;
    document.getElementById('quality').value = prefs.quality;
  });
}

function save () {
  let hd = document.getElementById('hd').checked;
  let log = document.getElementById('log').checked;
  let faqs = document.getElementById('faqs').checked;
  let quality = document.getElementById('quality').value;

  chrome.storage.local.set({
    hd,
    log,
    faqs,
    quality
  }, () => {
    let status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(() => status.textContent = '', 750);
  });
}

document.addEventListener('DOMContentLoaded', restore);
document.getElementById('save').addEventListener('click', save);
