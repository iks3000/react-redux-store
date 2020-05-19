export default class BookStoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler'
      },
      {
        id: 2,
        title: 'Released It!',
        author: 'Michael T. Nygard'
      }
    ];
  }
};