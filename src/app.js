fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then(data => {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    data.users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.className = 'user-card';
      userDiv.innerHTML = `
        <img src="${user.image}" alt="${user.firstName}">
        <div>
          <h3>${user.firstName} ${user.lastName}</h3>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Age:</strong> ${user.age}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
        </div>
      `;
      userList.appendChild(userDiv);
    });
  })
  .catch(error => {
    document.getElementById('userList').innerHTML = 'Xatolik yuz berdi!';
    console.error('Xatolik:', error);
  });
