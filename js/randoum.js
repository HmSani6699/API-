const lodUserMe = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => displaYuserMe(data.results))
}

const displaYuserMe = useras => {
    // for (const user of useras) {
    //     console.log(user)
    // }
    const section = document.getElementById('section');
    useras.forEach(user => {
        // console.log(user)
        const div = document.createElement('div');
        div.classList.add('user')
        div.innerHTML = `
     <div class="userImg">
     <img src="${user.picture.large}" alt="">
     </div>
        <h2>Nmae:${user.name.first}</h2>
        <p>Email:${user.email}</p>
        <p>City:${user.location.city}</p>
        <p>ID:${user.location.coordinates.latitude}</p>
        <p>Time:${user.location.timezone.offset}</p>
        `;
        section.append(div);
    })
}