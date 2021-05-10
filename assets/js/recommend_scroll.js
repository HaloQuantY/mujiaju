// 精品推荐区域左右滚动效果
(function() {
  // 获取DOM元素
  const recoContent = document.querySelector('.recommend .recommend-content');
  const leftBtn = recoContent.querySelector('.left-btn');
  const rightBtn = recoContent.querySelector('.right-btn');
  const recoList = recoContent.querySelector('.recommend-content-list');

  // 展示图片序号,隐藏图片为6张因此最大值为6
  let index = 0;
  // 节流锁,true为打开
  let lockOpen = true;

  // 右滚动事件
  rightBtn.addEventListener('click', () => {
    // 判断节流锁是否关闭和是否滚动到尽头
    if (!lockOpen || index === 6) {
      return;
    }
    // 关闭节流锁
    lockOpen = false;
    // 实现向右滚动
    index++;
    recoList.style.left = `${-index * 368}px`;
    // 动画完成, 打开节流锁
    setTimeout(() => {
      lockOpen = true;
    }, 300)
  });

  // 左滚动事件
  leftBtn.addEventListener('click', () => {
    // 判断节流锁是否关闭和是否滚动到尽头
    if (!lockOpen || index === 0) {
      return;
    }
    // 关闭节流锁
    lockOpen = false;
    // 实现向左滚动
    index--
    recoList.style.left = `${-index * 368}px`;
    // 动画完成, 打开节流锁
    setTimeout(() => {
      lockOpen = true;
    }, 300)
  });
})();