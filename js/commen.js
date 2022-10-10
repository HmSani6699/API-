const lodeData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayData(data))
}
lodeData();

const displayData = data => {
    const displayData = document.getElementById('displayData');
    for (const user of data) {
        // console.log(user)
        const div = document.createElement('div');
        div.classList.add('user')
        div.innerHTML = `
        <h4>Name:${user.name}</h4>
        <h6>Email:${user.email}</h6>
        <button onclick="detailInfo(${user.id})" class="btn btn-primary">Detail</button>
        `;
        displayData.appendChild(div);
    }
}

const detailInfo = userId => {
    const url = `https://jsonplaceholder.typicode.com/comments/${userId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayLodeDetail(data))
}

const displayLodeDetail = user => {
    const section = document.getElementById('section');
    const div = document.createElement('div');
    section.textContent = '';
    div.classList.add('artical')
    div.innerHTML = `
        <h4>Name:${user.name}</h4>
        <h6>Email:${user.email}</h6>
        <p>User Detail:${user.body}</p>
        <h3>User ID: ${user.id}</h3>
`;
    section.appendChild(div);
}

