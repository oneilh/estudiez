const users = new Users()

// subscription to auth changes
auth.onAuthStateChanged(user => {
  if (user) {
    const email = user.email
    users.usersRef.where('email', '==', email).onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        const id = change.doc.id
        console.log(change.doc.data())
        const user = db.collection('users').doc(id)
        renderProfile(user)
      })
    })
  }
})

// users.usersRef.where('email', '==', 'keyturn@live.com').onSnapshot(snapshot => {
//   snapshot.docChanges().forEach(change => {
//     const id = change.doc.id
//     console.log(
//       change.doc.data().first_name +
//         ' ' +
//         change.doc.data().last_name +
//         ' ' +
//         change.doc.id
//     )
//     const user = db.collection('users').doc(id)
//     console.log(user, auth.userUser)
//     renderProfile(user.doc.data())
//   })
// })

const renderProfile = ({
  first_name,
  last_name,
  gender,
  age,
  email,
  category,
}) => {
  const profile = document.querySelector('.categories')
  const html = `
        <div class="profile card" tabindex="1">
            <div class="profile-image"><i class="fa-solid fa-user"></i></div>
            <h3 class="title">
                <span id="first-name">${first_name}</span>
                <span id="last-name">${last_name}</span>
            </h3>
            <hr>
            <p>
                <span id="gender">${gender}</span> -
                <span id="age">${age}</span> YRS OLD
                <br>
                <span id="gmail">${email}</span>
                <br>
                <span id="category">${category}</span>
            </p>
        </div>
        `
  profile.innerHTML = html
  console.log('rendered')
}