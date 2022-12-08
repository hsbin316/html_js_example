const nameH1Element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');
// const inputModalElement = document.querySelector('#inputModal');

const setUserName = (name) => {
  nameH1Element.textContent = name;
  connectNameElement.textContent = name;
};

const localName = localStorage.getItem('name');
if (localName) setUserName(localName);

nameH1Element.onclick = () => {
  // inputModalElement.showModal();
  const inputName = prompt('이름을 입력해 주세요.');
  if (inputName) {
    localStorage.setItem('name', inputName);

    setUserName(inputName);
  } else {
    alert('이름이 입력되지 않았습니다.');
  }
};
// inputModalElement.onclick = (event) => {
//   if (event.target.nodeName === 'DIALOG') inputModalElement.closest();
// };
