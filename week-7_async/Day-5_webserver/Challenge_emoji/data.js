const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '👍', name: 'Nice' },
    { emoji: '👻', name: 'Ghost' },
    { emoji: '🤡', name: 'Cloun' },
    { emoji: '🤝', name: 'Handshake' },
    { emoji: '🤖', name: 'Robot' },
    { emoji: '👽', name: 'Alien' },
    { emoji: '🔥', name: 'Fire' }
];

// https://api.api-ninjas.com/v1/emoji
// Returns a list of emojis according to input parameters. 
// Returns at most 30 results. To access more than 30 results, 
// use the offset parameter to offset results in multiple API calls.
const api_key = 'dL23rsZEPs/GRTQ+9Z18uA==m9e5C8G5Vf6GMqJA';

export const groupSet = [
    'smileys_emotion',
    'people_body',
    'component',
    'animals_nature',
    'food_drink',
    'travel_places',
    'activities',
    'objects',
    'symbols',
    'flags'
];

export async function get30Emojies(group, offset) {
    let url = `https://api.api-ninjas.com/v1/emoji?group=${group}&offset=${offset}`;
    let data = await getData(url);
    return data
};

const getData = async(url) => {
    try {
        let res = await fetch(url, {
            headers: {
                'X-Api-Key': api_key,
                'Content-Type': 'application/json'
              }      
        });
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
