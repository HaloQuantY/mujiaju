// banner区域轮播图效果
(function() {
  // 获取DOM元素
  const carousel = document.querySelector('.banner .carousel');
  const casrouselList = document.querySelector('.banner .carousel-list');
  const circles = document.querySelector('.banner .circles');

  // 展示图片序号index
  let index = 0;
  // 节流锁lockOpen,true表示打开
  let lockOpen = true;

  // 克隆第一个li
  casrouselList.appendChild(casrouselList.firstElementChild.cloneNode(true));

  // 小圆点函数,小圆点样式跟随index改变
  const setCircles = function() {
    const lis = circles.children;
    // 遍历小圆点li
    for (let i=0; i<lis.length; i++) {
      // 根据index值设置对应li元素拥有current类
      if (i === index % lis.length) {
        lis[i].className = 'current';
      } else {
        lis[i].className = '';
      }
    }
  };

  // 小圆点点击事件
  circles.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      // 将index设置为li对应data-n属性值
      const dataN = e.target.getAttribute('data-n');
      index = dataN;
      // 设置translateX值,轮播图滚动到相应位置
      casrouselList.style.transform = `translateX(${-index * 25}%)`;
      // 改变小圆点样式
      setCircles();
    }
  });
  
  // 轮播图右滚动函数
  const moveRight = function() {
    // 判断节流阀是否关闭,关闭则直接返回
    if (!lockOpen) {
      return;
    }
    // 进入函数,关闭节流阀
    lockOpen = false;
    // 设置transition属性,防止被定时器内语句修改为none
    casrouselList.style.transition = 'transform .5s ease 0s';
    index++;
    // index大于2说明滚动到克隆li,重置列表位置
    if (index > 2) {
      setTimeout(() => {
        casrouselList.style.transition = 'none';
        index = 0;
        casrouselList.style.transform = `translateX(${-index * 25}%)`;
      }, 500);
    } 
    // 改变小圆点样式
    setCircles();
    casrouselList.style.transform = `translateX(${-index * 25}%)`;
    // 动画完成,打开节流阀
    setTimeout(() => {
      lockOpen = true;
    }, 500);
  };

  // 设置轮播图循环播放,周期为2秒
  let timer = setInterval(moveRight, 2000);
  // carousel元素鼠标移入取消定时,停止播放
  carousel.addEventListener('mouseover', () => {
    clearInterval(timer);
  });
  // 鼠标移出重新设置定时器播放
  carousel.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = setInterval(moveRight, 2000);
  });
})();