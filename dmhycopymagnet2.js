// ==UserScript==
// @name        copy magnet2 from dmhy.org
// @namespace   Violentmonkey Scripts
// @match       https://share.dmhy.org/topics/view/*
// @grant       GM_setClipboard
// @version     1.1
// @author      -
// @description 3/28/2021, 10:44:20 PM
// ==/UserScript==

let link = document.querySelector('#magnet2').innerText;
GM_setClipboard(link,'text/plain')
