// ==UserScript==
// @name        New script - dmhy.org
// @namespace   Violentmonkey Scripts
// @match       *://share.dmhy.org/topics/view/*
// @grant       GM_setClipboard
// @version     1.2
// @author      -
// @description 3/28/2021, 10:44:20 PM
// ==/UserScript==


let magnet2DownloadLink = document.getElementById('magnet2').href;
GM_setClipboard(magnet2DownloadLink,'text/plain');
