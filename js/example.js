const nameH1Element = document.querySelector('h1.inline');
const connectNameElement = document.querySelector('span.red');
const inputModalElement = document.querySelector('#inputModal');

const studentNoElement = document.querySelector('span.studentNo');
const emailElement = document.querySelector('span.email');

const setUserName = (name) => {
  nameH1Element.textContent = name;
  connectNameElement.textContent = name;
};
const setStudentNo = (no) => studentNoElement.textContent = no;
const setEmail = (email) => emailElement.textContent = email;

const localName = localStorage.getItem('userName');
const localStudentNo = localStorage.getItem('studentNo');
const localEmail = localStorage.getItem('email');

if (localName) setUserName(localName);
if (localStudentNo) setStudentNo(localStudentNo);
if (localEmail) setEmail(localEmail);


nameH1Element.onclick = () => {
  inputModalElement.showModal();
  // const inputName = prompt('이름을 입력해 주세요.');
  // if (inputName) {
  //   localStorage.setItem('name', inputName);

  //   setUserName(inputName);
  // } else {
  //   alert('이름이 입력되지 않았습니다.');
  // }
};
const modalSubmitBtn = document.querySelector('button.modalSubmit');

modalSubmitBtn.onclick = () => {
  const modalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(modalFormElement);
  const exptext = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;

  for (const [key, value] of formData) {
    if (value) {
      if (key ==='userName') {
        setUserName(value);
      } else if (key ==='studentNo' && value.length === 9 && parseInt(value)) {
        setStudentNo(value);
      } else if (key ==='email' && exptext.test(value)) {
        setEmail(value);
      } else {
        alert(key + '의 형식이 올바르지 않습니다.');
        continue;
      }
      localStorage.setItem(key, value);
    } else {
      alert(key + '가 잘못입력되었습니다.');
    }
  }

  inputModalElement.close();
};

inputModalElement.onclick = (event) => {
  if (event.target.nodeName === 'DIALOG') inputModalElement.close();
};
