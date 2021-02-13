let imgSrc = `data:image/jpeg;base64,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`

const windowW = window.innerWidth;
const windowH = window.innerHeight;

const sketch = function(p){
  let glitch;
  let isLoaded = false;
  
  p.setup = function() {
    p.background(0);
    p.createCanvas(170, 170);
    // p.createCanvas(windowW, windowH);
    
    p.loadImage(imgSrc, function (img) {
      glitch = new Glitch(img);
      isLoaded = true;
    });
  }  

  p.draw = function () {
    p.clear();
    p.background(0);
  
    if (isLoaded) {
      glitch.show();
    }
  }

  class Glitch {
    constructor(img) {
      this.channelLen = 4;
      this.imgOrigin = img;
      this.imgOrigin.loadPixels();
      this.copyData = [];
      this.flowLineImgs = [];
      this.shiftLineImgs = [];
      this.shiftRGBs = [];
      this.scatImgs = [];
      this.throughFlag = true;
      this.copyData = new Uint8ClampedArray(this.imgOrigin.pixels);
  
      // flow line
      for (let i = 0; i < 1; i++) {
        let o = {
          pixels: null,
          t1: p.floor(p.random(0, 1000)),
          speed: p.floor(p.random(4, 24)),
          randX: p.floor(p.random(24, 80)),
        };
        this.flowLineImgs.push(o);
      }
  
      // shift line
      for (let i = 0; i < 6; i++) {
        let o = null;
        this.shiftLineImgs.push(o);
      }
  
      // shift RGB
      for (let i = 0; i < 1; i++) {
        let o = null;
        this.shiftRGBs.push(o);
      }
  
      // scat imgs
      for (let i = 0; i < 3; i++) {
        let scatImg = {
          img: null,
          x: 0,
          y: 0,
        };
        this.scatImgs.push(scatImg);
      }
    }
  
    replaceData(destImg, srcPixels) {
      for (let y = 0; y < destImg.height; y++) {
        for (let x = 0; x < destImg.width; x++) {
          let r, g, b, a;
          let index;
          index = (y * destImg.width + x) * this.channelLen;
          r = index;
          g = index + 1;
          b = index + 2;
          a = index + 3;
          destImg.pixels[r] = srcPixels[r];
          destImg.pixels[g] = srcPixels[g];
          destImg.pixels[b] = srcPixels[b];
          destImg.pixels[a] = srcPixels[a];
        }
      }
      destImg.updatePixels();
    }
  
    flowLine(srcImg, obj) {
      let destPixels, tempY;
      destPixels = new Uint8ClampedArray(srcImg.pixels);
      obj.t1 %= srcImg.height;
      obj.t1 += obj.speed;
      //tempY = p.floor(noise(obj.t1) * srcImg.height);
      tempY = p.floor(obj.t1);
      for (let y = 0; y < srcImg.height; y++) {
        if (tempY === y) {
          for (let x = 0; x < srcImg.width; x++) {
            let r, g, b, a;
            let index;
            index = (y * srcImg.width + x) * this.channelLen;
            r = index;
            g = index + 1;
            b = index + 2;
            a = index + 3;
            destPixels[r] = srcImg.pixels[r] + obj.randX;
            destPixels[g] = srcImg.pixels[g] + obj.randX;
            destPixels[b] = srcImg.pixels[b] + obj.randX;
            destPixels[a] = srcImg.pixels[a];
          }
        }
      }
      return destPixels;
    }
  
    shiftLine(srcImg) {
      let offsetX;
      let rangeMin, rangeMax;
      let destPixels;
      let rangeH;
  
      destPixels = new Uint8ClampedArray(srcImg.pixels);
      rangeH = srcImg.height;
      rangeMin = p.floor(p.random(0, rangeH));
      rangeMax = rangeMin + p.floor(p.random(1, rangeH - rangeMin));
      offsetX = this.channelLen * p.floor(p.random(-40, 40));
  
      for (let y = 0; y < srcImg.height; y++) {
        if (y > rangeMin && y < rangeMax) {
          for (let x = 0; x < srcImg.width; x++) {
            let r, g, b, a;
            let r2, g2, b2, a2;
            let index;
  
            index = (y * srcImg.width + x) * this.channelLen;
            r = index;
            g = index + 1;
            b = index + 2;
            a = index + 3;
            r2 = r + offsetX;
            g2 = g + offsetX;
            b2 = b + offsetX;
            destPixels[r] = srcImg.pixels[r2];
            destPixels[g] = srcImg.pixels[g2];
            destPixels[b] = srcImg.pixels[b2];
            destPixels[a] = srcImg.pixels[a];
          }
        }
      }
      return destPixels;
    }
  
    shiftRGB(srcImg) {
      let randR, randG, randB;
      let destPixels;
      let range;
  
      range = 16;
      destPixels = new Uint8ClampedArray(srcImg.pixels);
      randR =
        (p.floor(p.random(-range, range)) * srcImg.width +
          p.floor(p.random(-range, range))) *
        this.channelLen;
      randG =
        (p.floor(p.random(-range, range)) * srcImg.width +
          p.floor(p.random(-range, range))) *
        this.channelLen;
      randB =
        (p.floor(p.random(-range, range)) * srcImg.width +
          p.floor(p.random(-range, range))) *
        this.channelLen;
  
      for (let y = 0; y < srcImg.height; y++) {
        for (let x = 0; x < srcImg.width; x++) {
          let r, g, b, a;
          let r2, g2, b2, a2;
          let index;
  
          index = (y * srcImg.width + x) * this.channelLen;
          r = index;
          g = index + 1;
          b = index + 2;
          a = index + 3;
          r2 = (r + randR) % srcImg.pixels.length;
          g2 = (g + randG) % srcImg.pixels.length;
          b2 = (b + randB) % srcImg.pixels.length;
          destPixels[r] = srcImg.pixels[r2];
          destPixels[g] = srcImg.pixels[g2];
          destPixels[b] = srcImg.pixels[b2];
          destPixels[a] = srcImg.pixels[a];
        }
      }
  
      return destPixels;
    }
  
    getRandomRectImg(srcImg) {
      let startX;
      let startY;
      let rectW;
      let rectH;
      let destImg;
      startX = p.floor(p.random(0, srcImg.width - 30));
      startY = p.floor(p.random(0, srcImg.height - 50));
      rectW = p.floor(p.random(30, srcImg.width - startX));
      rectH = p.floor(p.random(1, 50));
      destImg = srcImg.get(startX, startY, rectW, rectH);
      destImg.loadPixels();
      return destImg;
    }
  
    show() {
      // restore the original state
      this.replaceData(this.imgOrigin, this.copyData);
  
      // sometimes pass without effect processing
      let n = p.floor(p.random(100));
      if (n > 75 && this.throughFlag) {
        this.throughFlag = false;
        setTimeout(() => {
          this.throughFlag = true;
        }, p.floor(p.random(40, 400)));
      }
      if (!this.throughFlag) {
        p.push();
        p.translate(
          (p.width - this.imgOrigin.width) / 2,
          (p.height - this.imgOrigin.height) / 2
        );
        p.image(this.imgOrigin, 0, 0);
        p.pop();
        return;
      }
  
      // flow line
      this.flowLineImgs.forEach((v, i, arr) => {
        arr[i].pixels = this.flowLine(this.imgOrigin, v);
        if (arr[i].pixels) {
          this.replaceData(this.imgOrigin, arr[i].pixels);
        }
      });
  
      // shift line
      this.shiftLineImgs.forEach((v, i, arr) => {
        if (p.floor(p.random(100)) > 50) {
          arr[i] = this.shiftLine(this.imgOrigin);
          this.replaceData(this.imgOrigin, arr[i]);
        } else {
          if (arr[i]) {
            this.replaceData(this.imgOrigin, arr[i]);
          }
        }
      });
  
      // shift rgb
      this.shiftRGBs.forEach((v, i, arr) => {
        if (p.floor(p.random(100)) > 65) {
          arr[i] = this.shiftRGB(this.imgOrigin);
          this.replaceData(this.imgOrigin, arr[i]);
        }
      });
  
      p.push();
      p.translate(
        (p.width - this.imgOrigin.width) / 2,
        (p.height - this.imgOrigin.height) / 2
      );
      p.image(this.imgOrigin, 0, 0);
      p.pop();
  
      // scat image
      this.scatImgs.forEach((obj) => {
        p.push();
        p.translate(
          (p.width - this.imgOrigin.width) / 2,
          (p.height - this.imgOrigin.height) / 2
        );
        if (p.floor(p.random(100)) > 80) {
          obj.x = p.floor(
            p.random(-this.imgOrigin.width * 0.3, this.imgOrigin.width * 0.7)
          );
          obj.y = p.floor(
            p.random(-this.imgOrigin.height * 0.1, this.imgOrigin.height)
          );
          obj.img = this.getRandomRectImg(this.imgOrigin);
        }
        if (obj.img) {
          p.image(obj.img, obj.x, obj.y);
        }
        p.pop();
      });
    }
  }
  
}

window.addEventListener('DOMContentLoaded', () => {
  new p5(sketch, document.getElementById('glitch-img-canvas'))
})





