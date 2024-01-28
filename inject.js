// ==UserScript==
// @name         Inspect+ Pro
// @namespace    http://tampermonkey.net/
// @version      4.63
// @description  Best script for destroying website styling and more!.
// @author       DaxCodes
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var version = "V4.63";

var isOpen = false;
////var CCHackopen = false;
var calculatorIsOn = false;


function openInspectPro() {
  var frameVar = document.getElementById("mainFrameInspect");
  var openbutton = document.getElementById("openButtonInspect")
  if (isOpen == false) {
    isOpen = true;
    frameVar.style.opacity = 1;
    frameVar.style.pointerEvents = "all";
    openbutton.style.opacity = 1;

  } else {
    isOpen = false;
    frameVar.style.opacity = 0;
    frameVar.style.pointerEvents = "none";
    openbutton.style.opacity = .4;
  }
}

// SCRIPT BUTTON FUNCTIONS \\

function notiveScript() {
  console.log("asd");
  var notiveimg = document.createElement("img");
  notiveimg.style = "top: 50%; left: 50%; position: fixed; transform: translate(-50%, -50%);";
  notiveimg.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3554f9e1-cd13-4814-a8b9-0e4011d28d69/de0w7sg-a975207c-c72d-422c-b444-300e0cca4e81.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1NTRmOWUxLWNkMTMtNDgxNC1hOGI5LTBlNDAxMWQyOGQ2OVwvZGUwdzdzZy1hOTc1MjA3Yy1jNzJkLTQyMmMtYjQ0NC0zMDBlMGNjYTRlODEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M3stmTlClN6dVrA_upobEZYBavZs66RJyJU2h4sQons";

  var notiveimg1 = document.createElement("img");
  notiveimg1.style = "top: 50%; left: 50; position: fixed; transform: translate(-50%, -50%);";
  notiveimg1.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3554f9e1-cd13-4814-a8b9-0e4011d28d69/de0w7sg-a975207c-c72d-422c-b444-300e0cca4e81.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1NTRmOWUxLWNkMTMtNDgxNC1hOGI5LTBlNDAxMWQyOGQ2OVwvZGUwdzdzZy1hOTc1MjA3Yy1jNzJkLTQyMmMtYjQ0NC0zMDBlMGNjYTRlODEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M3stmTlClN6dVrA_upobEZYBavZs66RJyJU2h4sQons";
  var notiveimg2 = document.createElement("img");
  notiveimg2.style = "top: 0; left: 50; position: fixed;";
  notiveimg2.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3554f9e1-cd13-4814-a8b9-0e4011d28d69/de0w7sg-a975207c-c72d-422c-b444-300e0cca4e81.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1NTRmOWUxLWNkMTMtNDgxNC1hOGI5LTBlNDAxMWQyOGQ2OVwvZGUwdzdzZy1hOTc1MjA3Yy1jNzJkLTQyMmMtYjQ0NC0zMDBlMGNjYTRlODEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M3stmTlClN6dVrA_upobEZYBavZs66RJyJU2h4sQons";
  document.body.appendChild(notiveimg)
  document.body.appendChild(notiveimg1)
  document.body.appendChild(notiveimg2)
  document.body.style.backgroundImage = "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3554f9e1-cd13-4814-a8b9-0e4011d28d69/de0w7sg-a975207c-c72d-422c-b444-300e0cca4e81.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1NTRmOWUxLWNkMTMtNDgxNC1hOGI5LTBlNDAxMWQyOGQ2OVwvZGUwdzdzZy1hOTc1MjA3Yy1jNzJkLTQyMmMtYjQ0NC0zMDBlMGNjYTRlODEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.M3stmTlClN6dVrA_upobEZYBavZs66RJyJU2h4sQons)";
}

function WindowsXPScript() {
  console.log("windowsXPXPXPXPXXP");
  document.body.style.backgroundImage = "url(https://media.gcflearnfree.org/ctassets/topics/40/xp_desktop.jpg)";
  document.body.style.backgroundSize = "cover";
}

function CCHackScript1() {
  var idk = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 * 99999999999999999999999999999999999999999999
  var idk2 = idk * 999999999
  Game.Earn(idk2);
}

function CCHackScript2() {
  Game.cookies = 0
  Game.cookiesPs = 0
  Game.lumps = 0
}

function FBHackScript() {
  counter.text = 999999999; counterOutline.text = 999999999; rd = (counter.text * 1.5) + 4.82;
}

function RedBGScript() {
  document.body.style.background = "red";
}

function calculatorScript() {
  if (calculatorIsOn == false) {
    calculatorIsOn = true;
    var calcFrame = document.createElement("iframe");
    calcFrame.id = "dangYouFoundTheCalculator";
    calcFrame.src = "https://calculator.net/";
    calcFrame.style = "height: 350px; width: 750px; overflow-y: hidden; overflow-x: hidden;";
    document.body.appendChild(calcFrame);
  } else {
    console.log("Already Loaded CalculatorScript!");
  }

}

function inspectScript() {
  document.body.contentEditable = 'true';
  document.designMode = 'on';
  console.log("Enjoy the editing B)")
}

function removeinspectScript() {
  document.body.contentEditable = 'false';
  document.designMode = 'off';
  console.log("goodbye XD")
}

function errorScript() {
  var error = document.createElement("img");
  error.src = "https://inspect-pro-source.daxcodes.repl.co/images/error.jpg";
  error.style = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999";
  error.id = "EROROROROEROOROREOREOEROOEROERORE";
  document.body.appendChild(error);

  var audio = document.createElement("audio");
  audio.src = "https://inspect-pro-source.daxcodes.repl.co/music/slide.oga";
  audio.id = "slideraaaa"
  audio.play()
}

function dinoScript() {
  var dinogame = document.createElement("iframe");
  dinogame.src = "https://chromedino.com/";
  dinogame.style = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); height: 950px; width: 950px; z-index: 9999";
  dinogame.id = "FunnyDinoGameTotallyRealXDDDD";
  document.body.appendChild(dinogame);
}

function scalcScript() {
  var scriptaa = document.createElement("script");
  scriptaa.src = "https://scalc.daxcodes.repl.co/script.js";
  scriptaa.id = "ScriptCalcSourceElement";
  document.head.appendChild(scriptaa);
}

function rainbowtextScript() {
  var css = 'body {animation-name:test; animation-duration:4s; animation-iteration-count:infinite; } @keyframes test{ 0%{color:#ff0000} 20%{color:#00ff00} 40%{color:#ffff00} 60%{color:#0000ff} 80%{color:#00ffff} 100%{color:#ff0000}', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.type = 'text/css'; if (style.styleSheet) { style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);
}

function rickrollScript() {
  var getrickrolled = document.createElement('h1');
  getrickrolled.innerHTML = "GET RICKROLLED LOLOLOLOLOL";
  getrickrolled.style = "position: fixed; top: 15%; left: 50%; transform: translate(-50%, -50%); font-family: sans-serif; font-size: 45px; background: gray; padding: 5px; z-index: 8123821389"
  getrickrolled.id = "getrickrolledtextlol";
  document.body.appendChild(getrickrolled);

  var ricksaidno = document.createElement("img");
  ricksaidno.src = "https://inspect-pro-source.daxcodes.repl.co/images/rickroll.gif";
  ricksaidno.style = "position: fixed; height: 500px; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;";
  ricksaidno.id = "RICKROLLhAHAHAHAHAHHAHAHAHAHAH";
  document.body.appendChild(ricksaidno);
  console.log('GET RICKROLLED IHSFHDSIFHDISHFIDSHFISFUHDIFUSHDSIUHFDIUHFIDSHFUDSFUHSIFSDHFUDSHIDF');
  console.log('THIS IS FUNNY YOU ARE KINDA WEIRD HAHAHAHSDH RICKROLLSDFOJHDFHJDJSFJFDSKF');
}

function idiotScript() {
  var idiothahaha = document.createElement("img");
  idiothahaha.src = "https://inspect-pro-source.daxcodes.repl.co/images/idiot.gif";
  idiothahaha.style = "position: fixed; height: 650px; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;";
  idiothahaha.id = "IDIOTIDIOTIDIOTIDIOTHAHAHAHAHHAHA";
  document.body.appendChild(idiothahaha);
}

function stheaScript() {
  var scriptforit = document.createElement("script");
  scriptforit.src = "https://sthesaurus.daxcodes.repl.co/script.js";
  document.head.appendChild(scriptforit);
}

function sansasciiScript() {
  /*var snasinput = document.createElement('input');
  snasinput.type = 'text';
  snasinput.value = `█████████████▀▀▀▀▀▀▀▀▀▀▀▀▀█████████████
████████▀▀░░░░░░░░░░░░░░░░░░░▀▀████████
██████▀░░░░░░░░░░░░░░░░░░░░░░░░░▀██████
█████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█████
████░░░░░▄▄▄▄▄▄▄░░░░░░░░▄▄▄▄▄▄░░░░░████
████░░▄██████████░░░░░░██▀░░░▀██▄░░████
████░░███████████░░░░░░█▄░░▀░░▄██░░████
█████░░▀▀███████░░░██░░░██▄▄▄█▀▀░░█████
██████░░░░░░▄▄▀░░░████░░░▀▄▄░░░░░██████
█████░░░░░█▄░░░░░░▀▀▀▀░░░░░░░█▄░░░█████
█████░░░▀▀█░█▀▄▄▄▄▄▄▄▄▄▄▄▄▄▀██▀▀░░█████
██████░░░░░▀█▄░░█░░█░░░█░░█▄▀░░░░██▀▀▀▀
▀░░░▀██▄░░░░░░▀▀█▄▄█▄▄▄█▄▀▀░░░░▄█▀░░░▄▄
▄▄▄░░░▀▀██▄▄▄▄░░░░░░░░░░░░▄▄▄███░░░▄██▄
██████▄▄░░▀█████▀█████▀██████▀▀░░▄█████
██████████▄░░▀▀█▄░░░░░▄██▀▀▀░▄▄▄███▀▄██
███████████░██░▄██▄▄▄▄█▄░▄░████████░███`;
  var copyText = document.getElementById("myInput");*/

  /* Select the text field */
  /*copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(`█████████████▀▀▀▀▀▀▀▀▀▀▀▀▀█████████████
████████▀▀░░░░░░░░░░░░░░░░░░░▀▀████████
██████▀░░░░░░░░░░░░░░░░░░░░░░░░░▀██████
█████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█████
████░░░░░▄▄▄▄▄▄▄░░░░░░░░▄▄▄▄▄▄░░░░░████
████░░▄██████████░░░░░░██▀░░░▀██▄░░████
████░░███████████░░░░░░█▄░░▀░░▄██░░████
█████░░▀▀███████░░░██░░░██▄▄▄█▀▀░░█████
██████░░░░░░▄▄▀░░░████░░░▀▄▄░░░░░██████
█████░░░░░█▄░░░░░░▀▀▀▀░░░░░░░█▄░░░█████
█████░░░▀▀█░█▀▄▄▄▄▄▄▄▄▄▄▄▄▄▀██▀▀░░█████
██████░░░░░▀█▄░░█░░█░░░█░░█▄▀░░░░██▀▀▀▀
▀░░░▀██▄░░░░░░▀▀█▄▄█▄▄▄█▄▀▀░░░░▄█▀░░░▄▄
▄▄▄░░░▀▀██▄▄▄▄░░░░░░░░░░░░▄▄▄███░░░▄██▄
██████▄▄░░▀█████▀█████▀██████▀▀░░▄█████
██████████▄░░▀▀█▄░░░░░▄██▀▀▀░▄▄▄███▀▄██
███████████░██░▄██▄▄▄▄█▄░▄░████████░███`);
}

function musicScript() {
  var scriptforit = document.createElement("script");
  scriptforit.src = "https://musicgui.daxcodes.repl.co/script.js";
  document.head.appendChild(scriptforit);
}

function BlueBGScript() {
  document.body.style.background = 'blue';
}

function rgbbackgroundScript() {
  var css = 'body {animation-name:test; animation-duration:4s; animation-iteration-count:infinite; } @keyframes test{ 0%{background:#ff0000} 20%{background:#00ff00} 40%{background:#ffff00} 60%{background:#0000ff} 80%{background:#00ffff} 100%{background:#ff0000}', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.type = 'text/css'; if (style.styleSheet) { style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);
}

function pikaasciiScript() {
  navigator.clipboard.writeText(`_¶___________¶¶¶
_¶¶__________¶__¶
¶__¶_________¶___¶
¶___¶________¶___¶
¶____¶_______¶____¶¶¶¶¶¶
¶_____¶______¶__________¶¶
¶______¶¶¶__¶_¶¶_________¶¶¶¶¶¶¶¶¶¶¶¶¶
¶_____¶___¶¶_¶¶¶¶________________¶¶¶¶
_¶___¶___¶¶___¶¶___________¶¶¶¶¶¶
__¶__¶__¶___¶_____¶___¶¶¶¶_¶
___¶_¶_¶______________¶¶¶¶_¶
¶¶¶__¶¶_________¶¶¶¶______¶
¶___¶__¶_________¶¶____¶__¶
_¶___¶_¶_________________¶
__¶__¶_¶________________¶¶
___¶_¶¶___________________¶¶
____¶¶_________________¶¶___¶
____¶_________________¶__¶___¶
___¶_________________¶____¶¶¶¶
__¶___________________¶
__¶____________________¶
__¶_____¶¶¶¶¶¶¶¶_______¶
___¶__¶¶________¶¶____¶
___¶__¶___________¶____¶¶
__¶¶¶¶_____________¶¶¶¶¶¶¶¶`);
}

function BlackBGScript() {
  document.body.style.background = '#444444';
  document.body.style.color = '#FFFFFF';

  document.div.style.background = '#444444';
  document.div.style.color = '#FFFFFF';

  document.span.style.background = '#444444';
  document.span.style.color = '#FFFFFF';

  document.article.style.background = '#444444';
  document.article.style.color = '#FFFFFF';
}

function benScript() {
  var imgs = document.getElementsByTagName("img"); for (var i = 0, l = imgs.length; i < l; i++) { imgs[i].src = "https://inspect-pro-source.daxcodes.repl.co/images/ben.gif"; }
  var imgs2 = document.getElementsByTagName("img"); for (var i = 0, l = imgs2.length; i < l; i++) { imgs2[i].srcset = "https://inspect-pro-source.daxcodes.repl.co/images/ben.gif"; }


  document.body.style.backgroundImage = "url('https://inspect-pro-source.daxcodes.repl.co/images/ben2.gif')";
  document.body.style.backgroundSize = 'cover';
  document.body.style.color = 'lightgreen';
}

function jsexecutorScript() {
  var a = document.createElement('script');
  a.src = 'https://jsexecutor.daxcodes.repl.co/script.js';
  document.head.appendChild(a);
}

function notouchyScript() {
  document.body.style.pointerEvents = 'none';
}

function bruhScript() {
  document.body.style.backgroundImage = 'url("https://i.kym-cdn.com/entries/icons/facebook/000/016/540/Bruh_meme_banner.jpg")';
}

function cowScript() {
  document.body.style.backgroundImage = 'url("https://inspect-pro-source.daxcodes.repl.co/images/cow.gif")';
}


var idiotv2 = false
function idiotV2Script() {
  var imgs = document.getElementsByTagName("img"); for (var i = 0, l = imgs.length; i < l; i++) { imgs[i].src = "https://inspect-pro-source.daxcodes.repl.co/images/idiot-stupid.gif"; }
  var imgs2 = document.getElementsByTagName("img"); for (var i = 0, l = imgs2.length; i < l; i++) { imgs2[i].srcset = "https://inspect-pro-source.daxcodes.repl.co/images/idiot1.gif"; }
  var imgs3 = document.getElementsByTagName("h1"); for (var i = 0, l = imgs3.length; i < l; i++) { imgs3[i].innerHTML = "YOU ARE A IDIOT :)"; }
  var imgs4 = document.getElementsByTagName("p"); for (var i = 0, l = imgs4.length; i < l; i++) { imgs4[i].innerHTML = "YOU ARE A IDIOT :)"; }
  document.title = 'YOUAREAIDIOT';

  document.body.style.backgroundImage = "url('https://inspect-pro-source.daxcodes.repl.co/images/idiot-stupid.gif')";
  document.body.style.backgroundSize = '25%';
  document.body.style.color = 'black';
  idiotv2 = true
  alert('Y0U ARE aN IDI0T HAHAHAHAHAH :)))')
  for (var i = 0; i < 100; i++) {
    console.error('YOU ARE aN IDI0TTT HAHAHHAHAA :)))))')
  }

}

function slitherioScript() {
  var a = document.createElement('script');
  a.src = 'https://slitheriohack.inspectpluspro.repl.co/script.js';
  document.head.appendChild(a);
}

function inspectelement2Script() {
  (function() { var script = document.createElement('script'); script.src = 'https://x-ray-goggles.mouse.org/webxray.js'; script.className = 'webxray'; script.setAttribute('data-lang', 'en-US'); script.setAttribute('data-baseuri', 'https://x-ray-goggles.mouse.org'); document.body.appendChild(script); }())
}

function threedwebsiteScript() {
  (function() { var js = document.body.appendChild(document.createElement("script")); js.onerror = function() { alert("Sorry, the script could not be loaded.") }; js.src = "https://rawgit.com/Krazete/bookmarklets/master/tri.js" })();
}

function whatfontScript() {
  (function() { var d = document, s = d.createElement('scr' + 'ipt'), b = d.body, l = d.location; s.setAttribute('src', 'http://chengyinliu.com/wf.js?o=' + encodeURIComponent(l.href) + '&t=' + (new Date().getTime())); b.appendChild(s) })();
}

function matrixScript() {
  (() => { const b = document.createElement('div'); document.body.appendChild(b); function rx() { return Math.random() * window.innerWidth; } function ry() { return Math.random() * window.innerHeight; } function r() { const a = document.createElement('span'); a.className = '2kJCole-is-cool'; a.style.position = 'fixed'; a.style.color = '#00ff00'; a.style.background = '#000'; a.style.padding = '0.25rem'; a.style.borderRadius = '1rem'; a.style.pointerEvents = 'none'; a.style.top = ry() + 'px'; a.style.right = rx() + 'px'; a.textContent = (Math.random() + 1).toString(36).substring(2, 3); return a; } setInterval(() => b.appendChild(r()), 50); })();
}

function goodbyeScript() {
  (function() { document.body.style.transition = '10s'; document.body.style.borderLeft = '2000px solid #FFFFFF'; document.body.style.overflowX = 'hidden'; }());
}

function epixinspectScript() {
  (function () {     var script =  document.createElement('script');    script.src="//cdn.jsdelivr.net/npm/eruda";     document.body.appendChild(script);    script.onload = function () {         eruda.init()     } })();
  alert('Loaded EPIX INSPECT Sucessfully!')
}

function sidewaysScript() {
  document.body.style.transition = '1s transform';
  document.body.style.transform = 'rotate(90deg)';
}

(function() {
  'use strict';

  // button hover/click \\
  var hoverstyle = document.createElement('style');
  hoverstyle.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@300&family=Noto+Sans:wght@200&family=Poppins:wght@300&display=swap');
    
    .epixbtn{
      font-weight: bold; 
      text-align: center; 
      color: white; 
      background: #262626; 
      padding: 2px; 
      border: 1.5px solid #333333; 
      border-radius: 7px; 
      font-size: 18px; 
      width: 200px;
      transition: .2s background;
      font-family: 'Anek Telugu', sans-serif;
      font-family: 'Noto Sans', sans-serif;
      font-family: 'Poppins', sans-serif;
    }
    .epixbtn:hover{
      background: #141414;
      cursor: pointer;
    }
    .epixbtn:active{
      background: #000000;
    }

    #openButtonInspect{
      border: 3px solid #262626; 
      font-weight: bold; 
      border-radius: 2px; 
      font-size: 18px; 
      font-family: 'Anek Telugu', sans-serif;
      font-family: 'Noto Sans', sans-serif;
      font-family: 'Poppins', sans-serif;
      background: #1a1a1a; 
      color: white; 
      width: 210px; 
      height: 35px; 
      bottom: 0; 
      left: 0; 
      position: fixed; 
      z-index: 9999;
      opacity: .4;
      transition: .2s background;
      transition: .2s opacity;
    }
    #openButtonInspect:hover{
      background: #0C0C0C;
      cursor: pointer;
      opacity: 1;
    }
    #openButtonInspect:active{
      background: #000000;
    }
    #dinoButtonInspect{
      opacity: .5;
      pointer-events: none;
    }

    #mainFrameInspect{
      opacity: 0; 
      overflow-y: auto; 
      font-size: 18px; 
      font-family: 'Anek Telugu', sans-serif; 
      overflow-x: hidden; 
      text-align: center; 
      pointer-events: none; 
      border: 3px solid #262626; 
      background: #1a1a1a; 
      color: white; 
      border-radius: 2px; 
      width: 205px; 
      height: 350px; 
      bottom: 35px; 
      left: 0; 
      position: fixed; 
      padding: 2.5px; 
      z-index: 9999;
      transition: .2s opacity;
    }
  `;
  document.head.appendChild(hoverstyle);

  var open = document.createElement("Button");
  open.id = "openButtonInspect";
  open.innerHTML = "Inspect+ Pro";
  open.style = "";
  open.onclick = function() { openInspectPro() };

  var frame = document.createElement("div");
  frame.id = "mainFrameInspect";

  var scripts = document.createElement("div");
  scripts.id = "mainScriptsInspect";
  // just some credts \\ oweijdfmhkadfsujhkawsdiukljwehkjafhsgisadkjslkjhfasdjklfskgjhofsidjlkbkhilajkfdjgkhfdsjklgjhk


  var credit = document.createElement("h2");
  credit.id = "ifyouchangethisYOUDIE";
  credit.style = "color: white; font-weight: bold; font-size: 15px; padding: 0; margin: 0;";
  credit.innerHTML = "Made by <a href='https://replit.com/@DaxCodes/' style='color: aqua;'>@DaxCodes</a>";

  var credit2 = document.createElement("h2");
  credit2.id = "ifyouchangethisYOUDIE2";
  credit2.style = "color: #AF43FF; font-weight: bold; font-size: 15px; padding: 0; margin: 0; font-size: 25px;";
  credit2.innerHTML = version;

  var credit3 = document.createElement("h2");
  credit3.id = "ifyouchangethisYOUDIE3";
  credit3.style = "color: red; font-weight: bold; font-size: 15px; padding: 0; margin: 0; font-size: 20px;";
  credit3.innerHTML = 'discontinued until district allows me to use bookmarklets again ;-;';
  ///////////////////////////oogly\\\\\\\\\\\\\\\\\\\\\\\\\\
  //\\\\\\\\\\\\\\\\\\\\\\\\\boogly//////////////////////////
  // Script Buttons \\
  var notiveButton = document.createElement("Button");
  notiveButton.id = "notiveButtonInspect";
  notiveButton.classList.add('epixbtn');

  notiveButton.innerHTML = "notive";
  notiveButton.onclick = function() { notiveScript() };

  var FBHackButton = document.createElement("Button");
  FBHackButton.id = "FBHackButtonInspect";
  FBHackButton.classList.add('epixbtn');

  FBHackButton.innerHTML = "FlappyBird Hack";
  FBHackButton.onclick = function() { FBHackScript() };

  var WindowsXPButton = document.createElement("Button");
  WindowsXPButton.id = "WindowsXPButtonInspect";
  WindowsXPButton.classList.add('epixbtn');

  WindowsXPButton.innerHTML = "Windows XP";
  WindowsXPButton.onclick = function() { WindowsXPScript() };

  var RedBGButton = document.createElement("Button");
  RedBGButton.id = "RedBGButtonInspect";
  RedBGButton.classList.add('epixbtn');

  RedBGButton.innerHTML = "Red Background";
  RedBGButton.onclick = function() { RedBGScript() };

  var BlueBGButton = document.createElement("Button");
  BlueBGButton.id = "BlueBGButtonInspect";
  BlueBGButton.classList.add('epixbtn');

  BlueBGButton.innerHTML = "Blue Background";
  BlueBGButton.onclick = function() { BlueBGScript() };

  var BlackBGButton = document.createElement("Button");
  BlackBGButton.id = "BlackBGButtonInspect";
  BlackBGButton.classList.add('epixbtn');

  BlackBGButton.innerHTML = "Black Background";
  BlackBGButton.onclick = function() { BlackBGScript() };

  var calcButton = document.createElement("Button");
  calcButton.id = "calcButtonInspect";
  calcButton.classList.add('epixbtn');

  calcButton.innerHTML = "Calculator";
  calcButton.onclick = function() { calculatorScript() };

  var inspectButton = document.createElement("Button");
  inspectButton.id = "inspectButtonInspect";
  inspectButton.classList.add('epixbtn');

  inspectButton.innerHTML = "Edit Text";
  inspectButton.onclick = function() { inspectScript() };

  var removeinspectButton = document.createElement("Button");
  removeinspectButton.id = "removeinspectButtonInspect";
  removeinspectButton.classList.add('epixbtn');

  removeinspectButton.innerHTML = "Remove Edit Text";
  removeinspectButton.onclick = function() { removeinspectScript() };

  var errorButton = document.createElement("Button");
  errorButton.id = "errorButtonInspect";
  errorButton.classList.add('epixbtn');

  errorButton.innerHTML = "Error B)";
  errorButton.onclick = function() { errorScript() };

  var dinoButton = document.createElement("Button");
  dinoButton.id = "dinoButtonInspect";
  dinoButton.classList.add('epixbtn');

  dinoButton.innerHTML = "d i n o";
  dinoButton.onclick = function() { dinoScript() };

  var rainbowtextButton = document.createElement("Button");
  rainbowtextButton.id = "rainbowtextButtonInspect";
  rainbowtextButton.classList.add('epixbtn');

  rainbowtextButton.innerHTML = "RGB Text";
  rainbowtextButton.onclick = function() { rainbowtextScript() };

  var rickrollButton = document.createElement("Button");
  rickrollButton.id = "rickrollButtonInspect";
  rickrollButton.classList.add('epixbtn');

  rickrollButton.innerHTML = "rickroll";
  rickrollButton.onclick = function() { rickrollScript() };

  var idiotButton = document.createElement("Button");
  idiotButton.id = "idiotButtonInspect";
  idiotButton.classList.add('epixbtn');

  idiotButton.innerHTML = "idiot";
  idiotButton.onclick = function() { idiotScript() };

  var musicButton = document.createElement("Button");
  musicButton.id = "musicButtonInspect";
  musicButton.classList.add('epixbtn');

  musicButton.innerHTML = "Music GUI";
  musicButton.onclick = function() { musicScript() };

  var rgbBackgroundButton = document.createElement("Button");
  rgbBackgroundButton.id = "rgbBackgroundButtonInspect";
  rgbBackgroundButton.classList.add('epixbtn');

  rgbBackgroundButton.innerHTML = "RGB Background";
  rgbBackgroundButton.onclick = function() { rgbbackgroundScript() };

  var benButton = document.createElement("Button");
  benButton.id = "benButtonInspect";
  benButton.classList.add('epixbtn');

  benButton.innerHTML = "ben";
  benButton.onclick = function() { benScript() };

  var notouchyButton = document.createElement("Button");
  notouchyButton.id = "notouchyInspect";
  notouchyButton.classList.add('epixbtn');

  notouchyButton.innerHTML = "No Touchy!!";
  notouchyButton.onclick = function() { notouchyScript() };

  var bruhButton = document.createElement("Button");
  bruhButton.id = "bruhButtonInspect";
  bruhButton.classList.add('epixbtn');

  bruhButton.innerHTML = "bruh";
  bruhButton.onclick = function() { bruhScript() };

  var cowButton = document.createElement("Button");
  cowButton.id = "cowButtonInspect";
  cowButton.classList.add('epixbtn');

  cowButton.innerHTML = "polish cow";
  cowButton.onclick = function() { cowScript() };

  var idiotV2Button = document.createElement("Button");
  idiotV2Button.id = "idiotV2ButtonInspect";
  idiotV2Button.classList.add('epixbtn');

  idiotV2Button.innerHTML = "idiot v2";
  idiotV2Button.onclick = function() { idiotV2Script() };

  var inspectelement2Button = document.createElement("Button");
  inspectelement2Button.id = "inspectelement2ButtonInspect";
  inspectelement2Button.classList.add('epixbtn');

  inspectelement2Button.innerHTML = "Inspect Element";
  inspectelement2Button.onclick = function() { inspectelement2Script() };

  var threedwebsiteButton = document.createElement("Button");
  threedwebsiteButton.id = "threedwebsiteButtonInspect";
  threedwebsiteButton.classList.add('epixbtn');

  threedwebsiteButton.innerHTML = "3D Website";
  threedwebsiteButton.onclick = function() { threedwebsiteScript() };

  var whatfontButton = document.createElement("Button");
  whatfontButton.id = "whatfontButtonInspect";
  whatfontButton.classList.add('epixbtn');

  whatfontButton.innerHTML = "WhatFont";
  whatfontButton.onclick = function() { whatfontScript() };

  var matrixButton = document.createElement("Button");
  matrixButton.id = "matrixButtonInspect";
  matrixButton.classList.add('epixbtn');

  matrixButton.innerHTML = "Matrix";
  matrixButton.onclick = function() { matrixScript() };

  var goodbyeButton = document.createElement("Button");
  goodbyeButton.id = "goodbyeButtonInspect";
  goodbyeButton.classList.add('epixbtn');

  goodbyeButton.innerHTML = "goodbye";
  goodbyeButton.onclick = function() { goodbyeScript() };

  var epixinspectButton = document.createElement("Button");
  epixinspectButton.id = "epixinspectButtonInspect";
  epixinspectButton.classList.add('epixbtn');

  epixinspectButton.innerHTML = "Epix Inspect";
  epixinspectButton.onclick = function() { epixinspectScript() };

  var sidewaysButton = document.createElement("Button");
  sidewaysButton.id = "sidewaysButtonInspect";
  sidewaysButton.classList.add('epixbtn');

  sidewaysButton.innerHTML = "Sideways";
  sidewaysButton.onclick = function() { sidewaysScript() };
  // splitter boi \\

  var ccsplit = document.createElement("h2");
  ccsplit.id = "CCSplitInspect";
  ccsplit.style = "color: #ffcc80; font-weight: bold; font-size: 15px; padding: 0; margin: 5px;";
  ccsplit.innerHTML = "Hacks";

  // HACKS \\
  var CCHackButton = document.createElement("Button");
  CCHackButton.id = "CCHackButtonInspect";
  CCHackButton.classList.add('epixbtn');

  CCHackButton.innerHTML = "CC INF Cookie Hack";
  CCHackButton.onclick = function() { CCHackScript1() };

  var CCWipeButton = document.createElement("Button");
  CCWipeButton.id = "CCWipeButtonInspect";
  CCWipeButton.classList.add('epixbtn');

  CCWipeButton.innerHTML = "CC Wipe";
  CCWipeButton.onclick = function() { CCHackScript2() };

  var slitherioButton = document.createElement("Button");
  slitherioButton.id = "slitherioButtonInspect";
  slitherioButton.classList.add('epixbtn');

  slitherioButton.innerHTML = 'Slither.io Hack';
  slitherioButton.onclick = function() { slitherioScript() };
  // Tool splitter start B)
  var toolsplit = document.createElement("h2");
  toolsplit.id = "toolsplitInspect";
  toolsplit.style = "color: #2596be; font-weight: bold; font-size: 15px; padding: 0; margin: 5px;";
  toolsplit.innerHTML = "Tools";
  // Tool splitter end B)

  var scalcButton = document.createElement("Button");
  scalcButton.id = "scalcButtonInspect";
  scalcButton.classList.add('epixbtn');

  scalcButton.innerHTML = "SCalc";
  scalcButton.onclick = function() { scalcScript() };

  var stheaButton = document.createElement("Button");
  stheaButton.id = "stheaButtonInspect";
  stheaButton.classList.add('epixbtn');

  stheaButton.innerHTML = "SThesaurus";
  stheaButton.onclick = function() { stheaScript() };

  var jsexecutorButton = document.createElement("Button");
  jsexecutorButton.id = "jsexecutorButtonInspect";
  jsexecutorButton.classList.add('epixbtn');

  jsexecutorButton.innerHTML = "JS Executor";
  jsexecutorButton.onclick = function() { jsexecutorScript() };

  // Textwall splitter start B)
  var textwallsplit = document.createElement("h2");
  textwallsplit.id = "textwallsplitInspect";
  textwallsplit.style = "color: #9A57BC; font-weight: bold; font-size: 15px; padding: 0; margin: 5px;";
  textwallsplit.innerHTML = "Textwall.cc";
  // Textwall splitter end B)

  var sansasciiButton = document.createElement("Button");
  sansasciiButton.id = "sansasciiButtonInspect";
  sansasciiButton.classList.add('epixbtn');

  sansasciiButton.innerHTML = "Sans ASCII";
  sansasciiButton.onclick = function() { sansasciiScript() };

  var pikaasciiButton = document.createElement("Button");
  pikaasciiButton.id = "pikaasciiButtonInspect";
  pikaasciiButton.classList.add('epixbtn');

  pikaasciiButton.innerHTML = "Pikachu ASCII";
  pikaasciiButton.onclick = function() { pikaasciiScript() };

  // MORE \\
  document.body.appendChild(frame);
  var framescroll = '#mainFrameInspect::-webkit-scrollbar { width: 10px;} #mainFrameInspect::-webkit-scrollbar-thumb { background-image: linear-gradient(purple, #67009e, red); border-radius: 5px; } #mainFrameInspect::-webkit-scrollbar-track {background: white; border-radius: 5px;}', framehead = document.head || document.getElementsByTagName('head')[0], framestylevar = document.createElement('style'); framestylevar.type = 'text/css'; if (framestylevar.styleSheet) { framestylevar.styleSheet.cssText = framescroll; } else { framestylevar.appendChild(document.createTextNode(framescroll)); } framehead.appendChild(framestylevar);
  document.body.appendChild(open);
  document.getElementById("mainFrameInspect").appendChild(credit);// This line needs to be first!! \\
  document.getElementById("mainFrameInspect").appendChild(credit2);// This line needs to be second!! \\
  //document.getElementById("mainFrameInspect").appendChild(credit3);// This line needs to be third until i get bookmarklets back!! \\
  document.getElementById("mainFrameInspect").appendChild(notiveButton);

  document.getElementById("mainFrameInspect").appendChild(WindowsXPButton);
  document.getElementById("mainFrameInspect").appendChild(RedBGButton);
  document.getElementById("mainFrameInspect").appendChild(BlueBGButton);
  document.getElementById("mainFrameInspect").appendChild(calcButton);
  document.getElementById("mainFrameInspect").appendChild(inspectButton);
  document.getElementById("mainFrameInspect").appendChild(removeinspectButton);
  document.getElementById("mainFrameInspect").appendChild(errorButton);
  document.getElementById("mainFrameInspect").appendChild(dinoButton);
  document.getElementById("mainFrameInspect").appendChild(rainbowtextButton);
  document.getElementById("mainFrameInspect").appendChild(rickrollButton);
  document.getElementById("mainFrameInspect").appendChild(idiotButton);
  document.getElementById("mainFrameInspect").appendChild(musicButton);
  document.getElementById("mainFrameInspect").appendChild(rgbBackgroundButton);
  document.getElementById("mainFrameInspect").appendChild(BlackBGButton);
  document.getElementById("mainFrameInspect").appendChild(benButton);
  document.getElementById("mainFrameInspect").appendChild(notouchyButton);
  document.getElementById("mainFrameInspect").appendChild(bruhButton);
  document.getElementById("mainFrameInspect").appendChild(cowButton);
  document.getElementById("mainFrameInspect").appendChild(idiotV2Button);
  document.getElementById("mainFrameInspect").appendChild(inspectelement2Button);
  document.getElementById("mainFrameInspect").appendChild(threedwebsiteButton);
  document.getElementById("mainFrameInspect").appendChild(whatfontButton);
  document.getElementById("mainFrameInspect").appendChild(matrixButton);
  document.getElementById("mainFrameInspect").appendChild(goodbyeButton);
  document.getElementById("mainFrameInspect").appendChild(epixinspectButton);
  document.getElementById("mainFrameInspect").appendChild(sidewaysButton);
  document.getElementById("mainFrameInspect").appendChild(ccsplit); // This line needs to be BEHIND of the cookie clicker stuff! \\
  document.getElementById("mainFrameInspect").appendChild(FBHackButton);
  document.getElementById("mainFrameInspect").appendChild(CCHackButton);
  document.getElementById("mainFrameInspect").appendChild(CCWipeButton);

  //document.getElementById("mainFrameInspect").appendChild(slitherioButton);
  document.getElementById("mainFrameInspect").appendChild(toolsplit); // This line needs to be IN FRONT of the cookie clicker stuff! To start the tools section \\
  document.getElementById("mainFrameInspect").appendChild(scalcButton);
  document.getElementById("mainFrameInspect").appendChild(stheaButton);

  document.getElementById("mainFrameInspect").appendChild(jsexecutorButton);
  document.getElementById("mainFrameInspect").appendChild(textwallsplit); // This line needs to be IN FRONT of the tool stuff! To start the textwall.cc section \\
  document.getElementById("mainFrameInspect").appendChild(sansasciiButton);
  document.getElementById("mainFrameInspect").appendChild(pikaasciiButton);
})();
