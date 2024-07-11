// What You Will Create
// A Robo-Friends Search with Advanced Javascript

// In this project you will have to create a robot website (you can use your own css to style your project):
// Instructions
// PART I : The Website
// The webpage displays Cards of Robots with their respective image and information.
// 2. You have to create the cards by using the values from the array of objects provided in the ASSETS below.

// PART II : The Filter
// When you search for a specific name in the search box, the webpage filters the cards displayed. 
// For example is you write “nic” in the search box, you will display the robot which name contains “nic”, 
// which means only one robot: “Nicholas”.
// 2. Display the cards in the DOM, using DOM elements and selectors, and filter them with the search box.

const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

const container = document.getElementById('container');
const searchText = document.getElementById('searchText');
searchText.addEventListener('change', searchRobots);

class Robot {
  constructor(id, name, username, email, image) {
    this.id = id,
    this.name = name,
    this.username = username,
    this.email = email,
    this.image = image
  }
  display(cont) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img src="${this.image}" alt="robot_image" height="230px" width="230px">`;
    let h2 = document.createElement('h2');
    h2.innerText = this.name;
    let p = document.createElement('p');
    p.innerText = this.email
    card.appendChild(h2);
    card.appendChild(p);
    cont.appendChild(card);
  }
}

// display robots from array - arr into tag - cont
function displayRobots(arr, cont) {
  cont.innerHTML = '';
  arr.forEach(robot => robot.display(cont));
}

// search & display the result
function searchRobots(e) {
  e.preventDefault()
  text = searchText.value.toLowerCase();
  let result_arr = [];
  for (let robot of robots_obj) {
    if (robot.name.toLowerCase().includes(text)) {
      result_arr.push(robot);
    }
  }
  console.log(result_arr);
  displayRobots(result_arr, container);
};

//create array of Robot
const robots_obj = robots.map(({id, name, username, email, image}) => new Robot(id, name, username, email, image));
//display start page
displayRobots(robots_obj, container);
