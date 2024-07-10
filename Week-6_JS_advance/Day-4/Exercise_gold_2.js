function viewData() {
    document.getElementById('view').innerHTML = localStorage.getItem('data');
}

viewData();