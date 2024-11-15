// 获取元素
const countDisplay = document.getElementById('count');
const countButton = document.querySelector('.count-button');
const bgChangeButton = document.querySelector('.bg-change-button');

// 初始化计数
let count = 0;

// 计数按钮点击事件
countButton.addEventListener('click', () => {
  count++;
  countDisplay.innerText = count;
});

// 背景变换按钮点击事件
bgChangeButton.addEventListener('click', () => {
  const randomColor1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const randomColor2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
});
