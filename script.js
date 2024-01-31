const notifications = document.querySelector('.notifications');
// const notificationElements = document.getElementsByTagName('p');
const chooseNotification = document.querySelector('.choose_notification');

const counterNotification = document.getElementById('counter_notification');
let notificationCount = 0;

const form = document.querySelector('form');
const formElements = document.querySelectorAll('form div');
const formInputs = document.querySelectorAll('form div input');
const textAreaMessage = document.querySelector('#comment');
const textArea = document.querySelector('.area_text');

const markRead = document.querySelector('.mark_read');
const backCn = document.querySelector('.back_cn');

const unreadContainer = document.createElement('div');
const readContainer = document.createElement('div');

unreadContainer.classList.add('unread_notification');

notifications.appendChild(unreadContainer);
chooseNotification.addEventListener('click', function (event) {
  // counterNotification.textContent = '4';

  // console.log(event.target.className);
  // event.currentTarget.style.display = 'none';
  // form.style.display = 'block';
  console.log('clicked');
  for (const item of formElements) {
    if (event.target.className[0] === item.className[0]) {
      event.currentTarget.style.display = 'none';
      form.style.display = 'flex';

      console.log(event.target.className);
      console.log(item.className);
      item.style.display = 'flex';
    }
  }
});

const messageList = [
  'has joined your group Chess Club',
  'left the group Chess Club',
  'reacted to your recent post My First Tournament Today',
  'reacted to your recent post 5 End Game Strategies to increase your win-rate',
  'commented on your picture',
  'followed you',
];

const imageArray = [
  '../img1.png',
  '../img2.png',
  '../img3.png',
  '../img4.png',
  '../img5.png',
  '../img6.png',
  '../img7.png',
];

function formEvents(childNode, formInputNumber, message, image) {
  if (formInputs[formInputNumber].value) {
    event.currentTarget.style.display = 'none';
    event.currentTarget.childNodes[childNode].style.display = 'none';
    notifications.style.display = 'block';

    const newSpan = document.createElement('span');
    newSpan.classList.add('user_name');
    newSpan.textContent = formInputs[formInputNumber].value;

    const newImg = document.createElement('img');

    const newDiv = document.createElement('div');
    const newNotification = document.createElement('p');
    // newNotification.textContent = `${formInputs[formInputNumber].value} ${messageList[message]}`;

    newNotification.appendChild(newSpan);
    newNotification.innerHTML += ` ${messageList[message]}`;

    newDiv.classList.add('user_notification');
    newDiv.appendChild(newImg);
    newDiv.appendChild(newNotification);
    newImg.src = imageArray[image];
    unreadContainer.appendChild(newDiv);
    formInputs[formInputNumber].value = '';
    notificationCount++;
    counterNotification.textContent = notificationCount;
  } else {
    console.log('No Empty value, Invalid value');
  }
}

const privateMessageExtend = document.querySelector('.message_pri_message');

privateMessageExtend.addEventListener('click', function (event) {
  const message_private_div_id = document.getElementById('name_pri_message');
  // event.currentTarget.style.display = 'none';
  textArea.style.display = 'none';
  form.style.display = 'none';
  const newImgPrivate = document.createElement('img');
  newImgPrivate.src = imageArray[6];
  const newPrivateSpan = document.createElement('span');
  const para = document.createElement('p');
  const newDiv = document.createElement('div');
  para.textContent = `"${textAreaMessage.value}"`;
  newPrivateSpan.textContent = message_private_div_id.value;
  newPrivateSpan.classList.add('user_name');
  para.classList.add('para_private');
  newDiv.appendChild(newImgPrivate);
  newDiv.appendChild(newPrivateSpan);

  newDiv.innerHTML += ` sent you a private message:`;

  unreadContainer.appendChild(newDiv);
  newDiv.appendChild(para);

  newDiv.classList.add('user_notification_private');

  notifications.style.display = 'block';
  formInputs[6].value = '';
  notificationCount++;
  counterNotification.textContent = notificationCount;
});

form.addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target.className.includes('join')) {
    formEvents(1, 0, 0, 0);
  } else if (event.target.className.includes('leave')) {
    formEvents(3, 1, 1, 1);
  } else if (event.target.className.includes('tour_react_button')) {
    formEvents(5, 2, 2, 2);
  } else if (event.target.className.includes('win_react_button')) {
    formEvents(7, 3, 3, 3);
  } else if (event.target.className.includes('pic_com_button')) {
    formEvents(9, 4, 4, 4);
  } else if (event.target.className.includes('follow_button')) {
    formEvents(11, 5, 5, 5);
  } else if (event.target.className.includes('message_pri_name')) {
    event.currentTarget.childNodes[13].style.display = 'none';
    textArea.style.display = 'flex';

    // privateMessageExtend.addEventListener('click', function (event) {
    //   // event.currentTarget.style.display = 'none';
    //   textArea.style.display = 'none';
    //   form.style.display = 'none';
    //   const para = document.createElement('p');

    //   const newDiv = document.createElement('div');
    //   para.textContent = `${formInputs[6].value} sent you a private message`;
    //   newDiv.textContent = textAreaMessage.value;
    //   unreadContainer.appendChild(para);
    //   unreadContainer.appendChild(newDiv);
    //   notifications.style.display = 'block';
    //   // notifications.innerHTML += `
    //   // <p>${formInputs[6].value} sent you a private message</p>
    //   // <div>${textAreaMessage.value}</div>

    //   // `;
    //   formInputs[6].value = '';
    //   notificationCount++;
    //   counterNotification.textContent = notificationCount;
    // });

    // if (textAreaMessage.value) {
    //   event.currentTarget.style.display = 'none';
    //   textArea.style.display = 'none';
    //   const para = document.createElement('p');

    //   const newDiv = document.createElement('div');
    //   para.textContent = `${formInputs[6].value} sent you a private message`;
    //   newDiv.textContent = textAreaMessage.value;
    //   unreadContainer.appendChild(para);
    //   unreadContainer.appendChild(newDiv);
    //   notifications.style.display = 'block';
    //   // notifications.innerHTML += `
    //   // <p>${formInputs[6].value} sent you a private message</p>
    //   // <div>${textAreaMessage.value}</div>

    //   // `;
    //   formInputs[6].value = '';
    //   notificationCount++;
    //   counterNotification.textContent = notificationCount;
    // }
  } else if (event.target.className.includes('back')) {
    console.log(event.currentTarget);
    event.currentTarget.style.display = 'none';
    for (const item of formElements) {
      item.style.display = 'none';
    }

    chooseNotification.style.display = 'flex';
  }
});
// counterNotification.textContent = '4';
notifications.addEventListener('click', function (event) {
  // BUG to Ask stackOver flow
  // console.log('CLICKED');
  // counterNotification.textContent = '4';
  // BUG

  if (event.target.className.includes('back_cn')) {
    event.currentTarget.style.display = 'none';
    chooseNotification.style.display = 'flex';
  } else if (event.target.className.includes('mark_read')) {
    const notificationElements = document.querySelectorAll(
      '.unread_notification div'
    );
    notificationCount = 0;
    counterNotification.textContent = notificationCount;

    for (const item of notificationElements) {
      item.classList.add('read');
    }
  }
});

// markRead.addEventListener('submit', function (event) {
//   console.log('Yeah Click');
//   counterNotification.textContent = '0';
// });
