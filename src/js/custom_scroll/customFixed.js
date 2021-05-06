import { TweenMax, TimelineMax } from "gsap/all";

import { detectSectionAction } from "../slider/detectSectionAction";
import { detectLogoColor } from "../scroll/detectLogoColor";
import { detectHeaderStatus } from "../scroll/detectHeaderStatus";

export default class CustomFixed {

    constructor(selector) {
        this.footer = null;
        this.activeSection = 0;
        this.nav = [];
        this.divs = [];
        this.tweenList = {};
        this.timer = undefined;
        this.selector = selector ? selector : '#wrapper .section'
        this.windowHeight = window.innerHeight;
        this.list = document.querySelectorAll(this.selector)
        this.initNav();
        this.initDivs(true);
        setTimeout(this.update.call(this, true), 1000);
        setInterval(this.update.bind(this), 10000);

        this.initTweens();

        window.addEventListener('resize', () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => { this.update() }, 250);
            if (this.footer) this.footer.el.style.height = this.windowHeight + 'px';
        })

        window.addEventListener("orientationchange", () => {
            this.update(true);
            clearTimeout(this.timer);
            setTimeout(this.update.call(this, true), 1500);
        });
    }

    resetPos() {
        this.divs.forEach(({ el }) => {
            TweenMax.set(el, { y: 0 });
        });
    };

    getDivInfo(element) {
        let offset = 0;
        const marginTop = element.style.marginTop;
        if (marginTop != '') offset += parseInt(marginTop);
        this.prevAll(element, []).forEach(prev => {
            const marginTop = prev.style.marginTop;
            offset += prev.clientHeight + (marginTop != '' ? parseInt(marginTop) : 0);
        });
        return {
            offset,
            height: element.clientHeight,
            id: element.getAttribute('id'),
        }
    }

    initNav() {
        document.querySelectorAll('nav a').forEach(element => {
            const index = parseInt(element.getAttribute('data-menuanchor'));
            this.nav.push({ el: element, index })
            element.addEventListener('click', (e) => {
                e.preventDefault();
                const top = this.divs.find(({ anchor }) => anchor == index).top + this.windowHeight * 0.05;
                window.scrollbar.scrollTo(0, top, 2000)
            })
        });
    };

    checkNav() {
        this.nav.forEach(({ el, index }) => {
            el.classList[index == this.activeSection ? 'add' : 'remove']('active');
        });
    };

    initDivs(setPosition = false) {
        this.windowHeight = window.innerHeight;
        this.list.forEach((element, index) => {
            element.style.transition = '0s';
            const { offset, height, id } = this.getDivInfo(element);

            const thise = this;
            const obj = {
                id, height, el: element, top: offset,
                anchor: index,
                prevFade: false,
                prevVisible: false,
                set visible(value) {
                    if (value && value != obj.prevVisible) detectSectionAction(obj.id)
                    obj.prevVisible = value;
                },
                set fade(value) {
                    if (value != obj.prevFade) {
                        detectLogoColor(thise.activeSection)
                        if (thise.activeSection == 0) detectHeaderStatus('up', thise.divs[0].el)
                        thise.checkNav();
                    }
                    obj.prevFade = value;
                }
            }
            obj.fade = false;
            this.divs.push(obj)
            // feat for footer
            if (id == 'section-8') {
                this.footer = obj;
                this.footer.el.style.height = this.windowHeight + 'px';
            }


        });
        this.list[0].fade = true;
        if (setPosition) this.tick(window.scrollbar.offset.y);
    };

    update(setPosition = false) {
        this.windowHeight = window.innerHeight;
        this.divs.forEach(div => {
            const { offset, height } = this.getDivInfo(div.el)
            div.top = offset;
            div.height = height;
        });
        if (setPosition) this.tick(window.scrollbar.offset.y);
    };

    tick(tickTop) {
        this.divs.forEach(({ el, top, id, height, anchor }) => {
            let shift = tickTop + this.windowHeight - height - top;
            if (shift < 0) shift = 0;
            TweenMax.set(el, { y: shift });
            let progress = (tickTop + this.windowHeight - top) / height;
            let progressTop = (tickTop + this.windowHeight - top) / this.windowHeight;
            let progressTopHalf = (tickTop - this.windowHeight / 2 + top) / (this.windowHeight / 2);
            progress < 0 ? progress = 0 : '';
            progress > 2 ? progress = 2 : '';
            progressTop > 4 ? progressTop = 4 : '';

            const percentHeight = this.windowHeight * 0.05;
            if (tickTop >= top - percentHeight && tickTop < top + height) {
                this.activeSection = anchor;
            }

            this.callback(el, id, progress, progressTop, progressTopHalf);
        });
    };

    initTweens() {
        this.list.forEach((element, index, arr) => {
            const id = element.getAttribute('id');
            this.tweenList[id] = {};
            // out
            if (index < arr.length - 1) {
                const tweenOut = new TimelineMax().pause();
                tweenOut.add([TweenMax.fromTo(element, 1, { opacity: 1, scale: 1, top: '0vh' }, { opacity: 0, scale: 0.8, top: '-10vh' })])
                this.tweenList[id].out = tweenOut;
            }
            // in
            if (index > 0) {
                const tweenIn = new TimelineMax().pause();
                tweenIn.add([TweenMax.fromTo(element, 1, { scale: 1.2, y: 120 }, { scale: 1, y: 0 })])
                tweenIn.progress(0)
                this.tweenList[id].in = tweenIn;
            }
            // footer
            if (id === 'section-8') {
                const scrollTween = new TimelineMax().pause();
                scrollTween.add([TweenMax.fromTo(element.querySelectorAll('.before, .footer-title'), 1, { opacity: 0 }, { opacity: 1 })])
                this.tweenList[id].scroll = scrollTween;
            }

        });
    };

    callback(el, id, progress, progressTop, progressTopHalf) {
        if (this.tweenList[id]) {
            if (progressTop < 1 && this.tweenList[id].in) {
                this.tweenList[id].in.progress(Math.abs(progressTop) / 0.8);
            }
            if (progress > 0.9 && this.tweenList[id].out) {
                this.tweenList[id].out.progress(progress - 1);
            }
        }
        const currentDiv = this.divs.find(({ id: divID }) => divID == id);

        currentDiv.visible = progressTop > 0.2;
        currentDiv.fade = progressTop > 0.95;

        switch (id) {
            case 'section-8':
                if (this.tweenList[id]) this.tweenList[id].scroll.progress((progress - 0.5) / 0.5);
                break;

            default:
                break;
        }
    };

    prevAll(element, result) {
        if (element.previousElementSibling) {
            result.push(element.previousElementSibling);
            element = element.previousElementSibling;
            this.prevAll(element, result);
        }
        return result;
    }
}