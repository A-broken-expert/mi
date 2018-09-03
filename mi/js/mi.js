function bannerDh(imgs,dots,widths,rightBth,leftBth,banner,activeClass="active",delay,flag=true) {
    let next = 0;
    let current = 0;
    imgs[current].style.left = 0 + "px";
    dots[current].classList.add(activeClass);
    let t = setInterval(move, delay);
    function move() {
        next++;
        if (next == imgs.length) {
            next = 0;
        }
        imgs[next].style.left = `${widths}px`;
        animate(imgs[current], {left: -widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[current].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        current = next;
    }
    function moveL() {
        next--;
        if (next == -1) {
            next = imgs.length - 1;
        }
        imgs[next].style.left = `${-widths}px`;
        animate(imgs[current], {left: widths});
        animate(imgs[next], {left: 0}, function () {
            flag = true;
        });
        dots[current].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
        current = next;
    }

    leftBth.onclick = function () {
        if (flag == false) {
            return;
        }
        flag = false;
        moveL();
    };
    rightBth.onclick = function () {
        if (flag == false) {
            return;
        }
        flag = false;
        move();
    };
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {
        t = setInterval(move, delay);
    };
//bannerBar
    for (let i = 0; i < dots.length; i++) {

        dots[i].onclick = function () {
            if (flag == false) {
                return;
            }
            flag = false;
            bannerBar();

        };

        function bannerBar() {
            if (i == current) {
                return;
            } else if (i < current) {
                imgs[i].style.left = `${-widths}px`;
                animate(imgs[current], {left: widths});
                animate(imgs[i], {left: 0}, function () {
                    flag = true;
                });
                dots[current].classList.remove(activeClass);
                dots[i].classList.add(activeClass);
            } else if (i > current) {
                imgs[i].style.left = `${widths}px`;
                animate(imgs[current], {left: -widths});
                animate(imgs[i], {left: 0}, function () {
                    flag = true;
                });
                dots[current].classList.remove(activeClass);
                dots[i].classList.add(activeClass);
            }
            next = current = i;
        }
    }

//窗口获取焦点
    window.onblur = function () {
        clearInterval(t);
    };
    window.onfocus = function () {
        t = setInterval(move, delay);
    };

}
function goods4(cons,bannerBar,widthOne,rightBthOne,leftBthOne,activeClass,flag=true){
    console.log(rightBthOne);
    console.log(leftBthOne);
    let next = 0;
    let current = 0;
    cons[current].style.left = 0 + "px";
    bannerBar[current].classList.add(activeClass);
    function move() {
        next++;
        if(next == bannerBar.length){
            next = 0;
        }

        cons[next].style.left = `${widthOne}px`;
        animate(cons[current], {left: -widthOne});
        animate(cons[next], {left: 0}, function () {
            flag = true;
        });
        bannerBar[current].classList.remove(activeClass);
        bannerBar[next].classList.add(activeClass);
        current = next;
    }

    function moveL() {
        next--;
        console.log(next);
        if (next == -1) {
            next = bannerBar.length - 1;
        }
        cons[next].style.left = `${-widthOne}px`;
        animate(cons[current], {left: widthOne});
        animate(cons[next], {left: 0}, function () {
            flag = true;
        });
        bannerBar[current].classList.remove(activeClass);
        bannerBar[next].classList.add(activeClass);
        current = next;
    }

    leftBthOne.onclick = function (){
        if (!flag) {
            return;
        }
        flag = false;
        moveL();
    }


    rightBthOne.onclick = function () {
        if (!flag) {
            return;
        }
        flag = false;
        move();
    }
    for (let i = 0; i < bannerBar.length; i++) {

        bannerBar[i].onclick = function () {
            if (flag == false) {
                return;
            }
            flag = false;
            bannerBars();

        };

        function bannerBars() {
            if (i == current) {
                return;
            } else if (i < current) {
                cons[i].style.left = `${-widths}px`;
                animate(cons[current], {left: widths});
                animate(cons[i], {left: 0}, function () {
                    flag = true;
                });
                bannerBar[current].classList.remove(activeClass);
                bannerBar[i].classList.add(activeClass);
            } else if (i > current) {
                cons[i].style.left = `${widths}px`;
                animate(cons[current], {left: -widths});
                animate(cons[i], {left: 0}, function () {
                    flag = true;
                });
                bannerBar[current].classList.remove(activeClass);
                bannerBar[i].classList.add(activeClass);
            }
            next = current = i;
        }
    }

}