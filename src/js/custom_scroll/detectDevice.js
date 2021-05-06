import device from './device.js'

const isIpad = navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform);
const isIOS = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? true : false || isIpad;

window.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
window.isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false || isIpad;
window.isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
window.mobile = device.mobile() || isIpad || device.tablet() || isIOS;
window.tablet = device.tablet() || isIpad;
window.mobileDevice = mobile || tablet || isIOS;

export default { mobile, tablet, mobileDevice }