const hiddenProp = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;  
const visibilityChangeEvent = hiddenProp.replace(/hidden/i,'visibilitychange');
window.addEventListener(visibilityChangeEvent,function () {
    if (document[hiddenProp]) {
        document.title = '兄dei,你人呢？(⊙ˍ⊙)'
    } else {
        document.title = '哟，回来啦~(≧∇≦)ﾉ'
        setTimeout(function () {
            document.title = '86君的小呆毛们'
        }, 500);
    }
})