export default class BookStoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 31.49,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51oxXEG6TRL._SX379_BO1,204,203,200_.jpg'
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 29.40,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81c+o9-DetL.jpg'
    },
    {
      id: 3,
      title: 'The Ultimate Book of Vehicles',
      author: 'Anne-Sophie Baumann, Didier Balicevic',
      price: 15.69,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51JXljxwF5L._SX379_BO1,204,203,200_.jpg'
    },
    {
      id: 4,
      title: 'The Ultimate Book of Planet Earth',
      author: 'Anne-Sophie Baumann, Didier Balicevic',
      price: 18.69,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51yOh1rE3bL._SX380_BO1,204,203,200_.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error(console.log('Something bad happened')))
        } else {
          resolve(this.data)
        }
      }, 700);
    })
  }
};