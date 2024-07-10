const form = document.myForm;
const data_keys = ['name', 'lastname'];
form.addEventListener('submit', function(e) {
    localStorage.setItem('data',dataToJSON(data_keys, [form.name.value, form.lastname.value]));
    window.location.href = 'Exercise_gold_2.html';
});

function dataToJSON(keys, values) {
    let len = Math.min(keys.length, values.length);
    if (len === 0) {
        console.log('Value array is empty.')
    };
    let obj = {};
    for (i = 0; i < len; i++) obj[keys[i]] = values[i];
    return JSON.stringify(obj)
};

function DataObj(name, lastname) {
    this.name = name;
    this.lastname = lastname;
};

function dataToJSON_2(values) {
    obj = new DataObj([...values])
    return JSON.stringify(obj)
};