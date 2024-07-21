const choiceNum = 4;
var score = 0;
var roundCount = 0;
var rightName = '';
var group = '';

document.choiceForm.addEventListener('submit', submitChoice);
document.groupForm.addEventListener('submit', submitGroup);


function submitChoice(e) {
  e.preventDefault();
  // console.log('target - ', e.target.emoji.value);
  if (e.target.emoji.value == rightName) {
    score += 1;
    document.getElementById('message').innerText = 'Right! Very good!'
  }
  else {
    document.getElementById('message').innerText = 'No! Try next!'
  }
  roundCount += 1;
  document.getElementById('score').innerText = `Your score ${score} from ${roundCount}`;
  if (roundCount < 5) {
    play();
  }
  else {
    alert(`Game over! Your result: ${score} from ${roundCount}`);
    location.reload();
  };
};

function submitGroup(e) {
  e.preventDefault();
  // console.log('target - ', e.target.group.value);
  group = e.target.group.value;
  document.groupForm.innerHTML = '';
  play();
};


function sendData() {
    let choiceName = document.getElementById('choicename').value;

    let dataPost = {
      choiceName,
    }
    console.log(dataPost);

    fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataPost)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('root').innerHTML = `${data.message} ${data.user}`
    })
    .catch(e => console.log(e))
  }

const getData = async(url) => {
  try {
      let res = await fetch(url);
      if (res.status === 200) {
          let data = await res.json();
          return data
      }
      else throw `Response error. Status ${res.status}.`;
  } 
  catch (err) {
      console.log(err)
  }
};

function renderChoiceForm(dataArray) {
    let html = '<p>Guess correct name of this emoji:</p>';
    dataArray.forEach(({name}, i) => {
        html += `
            <input type="radio" id="radio${i}" name="emoji" value="${name}">
            <label for="radio${i}">${name}</label><br>`
    });
    html += `
        <br><input type="submit" value="Choice">`;
    document.choiceForm.innerHTML = html;
}

function renderGroupForm(dataArray) {
  let html = 'Choose group of emojies:</p>';
  dataArray.forEach((group, i) => {
      html += `
          <input type="radio" id="radio${i}" name="group" value="${group}">
          <label for="radio${i}">${group}</label><br>`
  });
  html += `
      <br><input type="submit" value="Choice">`;
  document.groupForm.innerHTML = html;
}

async function choiceGroup() {
  let groupData = await getData('http://localhost:3000/groups');
  renderGroupForm(groupData);
};

async function play() {
    let choiceData = await getData(`http://localhost:3000/emoji?group=${group}&num=${choiceNum}`);
    // console.log(choiceData);
    let rightChoiceIndex = Math.floor(Math.random() * choiceNum);
    // console.log(rightChoiceIndex);
    // console.log(choiceData[rightChoiceIndex]);
    let { emoji, name } = choiceData[rightChoiceIndex];
    rightName = name;
    console.log('rightName - ', rightName);
    document.getElementById('emoji_container').innerHTML = `<h1>${emoji}</h1>`;
    renderChoiceForm(choiceData);
};

choiceGroup();