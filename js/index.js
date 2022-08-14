const signupForm = document.querySelector('#signup')

const users = new Users()
let userDetails = {}

const setCategory = cat => {
  users.category = cat
  console.log('category: ', cat)
  document.querySelector('.signupTitle').textContent = `${cat} Sign Up`
  if (cat == 'Student') {
    // document.querySelector('#childId').classList.add('disabled')
    document.querySelector('#childId').classList.add('disabled')
    // document.querySelector('.childId').remove()
  }
}

signupForm.addEventListener('submit', e => {
  // prevent default behaviour of form submit event
  e.preventDefault()
  console.log('submitting...')

  const data = new FormData(e.target)
  const userDetails = {}

  for (const [name, value] of data) {
    userDetails[name] = value
    // console.log(data, name, ':', value, userDetails)
  }

  users.addUser(userDetails)
  const modal = document.querySelector('[data-modal]')
  // pick values from form fields
  // const email = signupForm.email.value
  // const password = signupForm.password.value
  // const username = signupForm.username.value
  // const firstname = signupForm.firstname.value
  // const lastname = signupForm.lastname.value
  // const address = {
  //   'street': signupForm.street.value,
  //   'city': signupForm.city.value,
  //   'state': signupForm.state.value,
  // }
  // const age = signupForm.age.value
  // const gender = signupForm.gender.value
  // const level = signupForm.class.value
  // const token = signupForm.token.value
  // const userDetails = [
  //   email,
  //   username,
  //   password,
  //   firstname,
  //   lastname,
  //   address,
  //   age,
  //   gender,
  //   level,
  //   token,
  // ]
  // authenticate user with email and password
  // firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(email, password)
  //   .then(cred => {
  //     // Recieve sign in response
  //     let user = cred.user

  //     // Save user data to database
  //     // users.addUser(userDetails)
  //     console.log(cred.user, userDetails)
  //   })
  //   .catch(error => {
  //     console.log('3', error.message)
  //   })
})

users.usersRef.where('category', '==', 'Student').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    console.log(
      change.doc.data().first_name +
        ' ' +
        change.doc.data().last_name +
        ' ' +
        change.doc.id
    )
  })
})

// this.chats
//         .where('room', '==', this.room)
//         .orderBy('created_at')
//         .onSnapshot(snapshot => {
//             snapshot.docChanges().forEach(change => {
//                 if(change.type === 'added') {
//                     //update ui

//                     // callback(change.doc.data());
//                 }
//             })
//         });

//
//   auth
//   .signOut()
//   .then(() => {
//     // Sign-out successful.
//   })
//   .catch(error => {
//     // An error happened.
//   })
