export default {
  photos: `Hi {name}!, {numPhotos, plural,
    =0 {You don't have any photo}
    =1 {You have one photo}
    other {You have {numPhotos} photos}
  } in your collection`,
  button: {
    content: 'Click Me!',
    english: 'english',
    spanish: 'spanish'
  },
  home: {
    link: 'Home'
  },
  users: {
    title: 'Welcome to Users',
    link: 'Users'
  }
}
