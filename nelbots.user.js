// ==UserScript==
// @name         NELBOTS - Gota.io Bots
// @namespace    Free Gota.io Bots 2024
// @version      1.0
// @description  Free Gota.io Bots 2024
// @author       NelFeast
// @match        *://gota.io/web/*
// @run-at       document-start
// @icon         data:image/webp;base64,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
// @grant        none
// @require      https://github.com/NelFeast/Gota.io-Bots-2024/raw/master/nelbots.js
// ==/UserScript==

/* 
  MIT License

  Copyright (c) 2024 NelFeast
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

const serverBots = "ws://localhost:8087"; // Change with your server ip
class Reader{constructor(a){this.dataView=new DataView(a),this.byteOffset=0}readUint8(){return this.dataView.getUint8(this.byteOffset++)}readUint16(){const a=this.dataView.getUint16(this.byteOffset,!0);return this.byteOffset+=2,a}}class Writer{constructor(a){this.dataView=new DataView(new ArrayBuffer(a)),this.byteOffset=0}writeUint8(a){this.dataView.setUint8(this.byteOffset++,a)}writeInt32(a){this.dataView.setInt32(this.byteOffset,a,!0),this.byteOffset+=4}writeString(a){for(let b=0;b<a.length;b++)this.writeUint8(a.charCodeAt(b));this.writeUint8(0)}}
