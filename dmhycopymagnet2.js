// ==UserScript==
// @name        New script - dmhy.org
// @namespace   Violentmonkey Scripts
// @match       https://share.dmhy.org/topics/view/*
// @grant       GM_setClipboard
// @version     1.0
// @author      -
// @description 3/28/2021, 10:44:20 PM
// ==/UserScript==

let link = document.querySelector('#magnet2').innerText;
GM_setClipboard(link,'text/plain')
