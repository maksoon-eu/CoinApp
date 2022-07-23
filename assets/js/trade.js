/* Tabs */
let x = document.querySelectorAll('.return');
for( let i = 0; i < x.length; i ++) {
    x[i].addEventListener('click', function () {
        if (document.querySelector('.tab-content_show').querySelector('.dropdown2').classList.contains('clicked')) {
            let e = document.querySelector('.tab-content_show').querySelector('.dropdown2').querySelector('span').textContent;
            let s = document.querySelector('.tab-content_show').querySelector('.dropdown').querySelector('span').textContent;
            document.querySelector('.tab-content_show').querySelector('.dropdown').querySelector('span').textContent = e;
            document.querySelector('.tab-content_show').querySelector('.dropdown').querySelector('.resr').setAttribute('src','assets/img/' + e.replace(/[^a-zа-яё]/gi, '') + '.svg');
            let y = document.querySelectorAll('.jsCount');
            for( let i = 0; i < y.length; i ++) {
                y[i].textContent = e;
            }
        
            document.querySelector('.tab-content_show').querySelector('.dropdown2').querySelector('span').textContent = s;
            document.querySelector('.tab-content_show').querySelector('.dropdown2').querySelector('.resr').setAttribute('src','assets/img/' + s.replace(/[^a-zа-яё]/gi, '') + '.svg');
            let z = document.querySelectorAll('.jsCount2');
            for( let i = 0; i < z.length; i ++) {
                z[i].textContent = s;
            }
        }
    });
}

/* Trade */
document.querySelector('.tab-content_show').querySelector('.dropdown-menu').classList.add('bbb');
let d = document.querySelectorAll('.dropdown');
for( let i = 0; i < d.length; i ++) {
    d[i].addEventListener('click', function () {
        let sel = this.querySelectorAll('.select span');
        for( let i = 0; i < sel.length; i ++) {
            sel[i].style.textTransform = 'uppercase';
        }
        setTimeout(function() {
            document.querySelector('.tab-content_show').querySelector('.dropdown-menu').classList.remove('bbb');
            document.querySelector('.tab-content_show').querySelector('.dropdown-menu').classList.add('aaa');
        }, 1);

        document.querySelector('.tab-content_show').querySelector(".shadow").classList.add('block');

        let a = document.querySelectorAll('.dropdown .dropdown-menu li');
        for( let i = 0; i < a.length; i ++) {
            a[i].addEventListener('click', function () {
                setTimeout(function() {
                    document.querySelector('.tab-content_show').querySelector('.dropdown-menu').classList.add('bbb');
                    document.querySelector('.tab-content_show').querySelector('.dropdown-menu').classList.remove('aaa');
                }, 100);
                setTimeout(function() {
                    document.querySelector('.tab-content_show').querySelector(".shadow").classList.remove('block');
                }, 300);
                document.querySelector('.tab-content_show').querySelector('.dropdown').querySelector('span').textContent = this.textContent;
                document.querySelector('.tab-content_show').querySelector('.dropdown').querySelector('.resr').setAttribute('src','assets/img/' + this.textContent.replace(/[^a-zа-яё]/gi, '') + '.svg');
                let q = document.querySelector('.tab-content_show').querySelectorAll('.jsCount');
                for( let i = 0; i < q.length; i ++) {
                    q[i].textContent = this.textContent;
                }
            });
        }
    });
}

document.querySelector('.tab-content_show').querySelector('.dropdown-menu2').classList.add('bbb');
let m = document.querySelectorAll('.dropdown2');
for( let i = 0; i < m.length; i ++) {
    m[i].addEventListener('click', function () {
        let sel = document.querySelector('.tab-content_show').querySelectorAll('.select span');
        for( let i = 0; i < sel.length; i ++) {
            sel[i].style.textTransform = 'uppercase';
        }
        this.style.width = '82px';
        this.classList.add('clicked');
        if (this.classList.contains('clicked')) {
            document.querySelector('.tab-content_show').querySelector('.change__text2').style.opacity = 1;
        }
        setTimeout(function() {
            document.querySelector('.tab-content_show').querySelector('.dropdown-menu2').classList.remove('bbb');
            document.querySelector('.tab-content_show').querySelector('.dropdown-menu2').classList.add('aaa');
        }, 1);

        document.querySelector('.tab-content_show').querySelector(".shadow2").classList.add('block');

        let a = document.querySelectorAll('.dropdown2 .dropdown-menu2 li');
        for( let i = 0; i < a.length; i ++) {
            a[i].addEventListener('click', function () {
                setTimeout(function() {
                    document.querySelector('.tab-content_show').querySelector('.dropdown-menu2').classList.add('bbb');
                    document.querySelector('.tab-content_show').querySelector('.dropdown-menu2').classList.remove('aaa');
            }, 100);
                setTimeout(function() {
                    document.querySelector('.tab-content_show').querySelector(".shadow2").classList.remove('block');
                }, 300);
                document.querySelector('.tab-content_show').querySelector('.dropdown2').querySelector('span').textContent = this.textContent;
                document.querySelector('.tab-content_show').querySelector('.dropdown2').querySelector('.resr').setAttribute('src','assets/img/' + this.textContent.replace(/[^a-zа-яё]/gi, '') + '.svg');
                let q = document.querySelector('.tab-content_show').querySelectorAll('.jsCount2');
                for( let i = 0; i < q.length; i ++) {
                    q[i].textContent = this.textContent;
                }
            });

        }
    });
}

/* Return trade */
let s = document.querySelectorAll('.trade__inner-list');
for( let i = 0; i < s.length; i ++) {
    s[i].style.height = '0px';
    s[i].style.overflow = 'hidden';
    s[i].style.transition = 'height 0.2s linear';
}

let c = document.querySelectorAll('.cheked');
for( let i = 0; i < c.length; i ++) {
    for( let i = 0; i < s.length; i ++) {
            c[i].oninput = function() {
                if (document.querySelector('.tab-content_show').querySelector('.dropdown2').classList.contains('clicked')) {
                    if (c[i].value == '') {
                        s[i].style.height = '0px';
                    } else {
                        s[i].style.height = '154px';
                    }
                }
            };
        
    }
}
