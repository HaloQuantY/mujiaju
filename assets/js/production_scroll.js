// 商品区左右滚动效果
(function() {
  // 获取DOM元素
  const proContent = document.querySelector('.production .production-content');
  const leftBtn = proContent.querySelector('.left-btn');
  const rightBtn = proContent.querySelector('.right-btn');
  const proList = proContent.querySelector('.production-content-list');

  // 展示图片序号,由于隐藏图为5张因此最大值为5
  let index = 0;
  // 节流锁,true为打开
  let lockOpen = true;

  // 右滚动事件
  rightBtn.addEventListener('click', () => {
    // 判断节流锁是否关闭和是否滚动到尽头
    if (!lockOpen || index === 5) {
      return;
    }
    // 关闭节流锁
    lockOpen = false;
    // 实现向右滚动
    index++;
    proList.style.left = `${-index * 221}px`;
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
    index--;
    proList.style.left = `${-index * 221}px`;
    // 动画完成, 打开节流锁
    setTimeout(() => {
      lockOpen = true;
    }, 300)
  });
})();