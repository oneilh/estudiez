class Users {
  constructor() {
    this.usersRef = db.collection('users')
    this.scoresRef = db.collection('scores')
    this.studentsRef = db.collection('students')
    this.category
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }

  async addUser(userDetails) {
    const {
      first_name,
      last_name,
      email,
      username,
      gender,
      age,
      eduClass,
      childId,
    } = userDetails
    const now = new Date()
    const reg_date = firebase.firestore.Timestamp.fromDate(now)
    const userData = {
      first_name,
      last_name,
      username,
      email,
      // address: { street, city, state },
      age,
      gender,
      category: this.category,
      reg_date,
      childId,
    }
    console.log(userData)
    const response = await this.usersRef.add(userData)
    if (category.toLowerCase() == 'student') {
      const studentData = {
        class: eduClass,
        reg_date,
        username,
      }
      this.studentsRef.add(studentData)
    }
    return this
  }
}
