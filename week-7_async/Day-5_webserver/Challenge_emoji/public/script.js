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
