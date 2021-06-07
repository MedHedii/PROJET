const rooms = [
  {
    name: 'Single economy',
    image: '/images/room-1.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.  ",
    capacity: '1',
    category: 'Economy',
    price: 99.99,
    countInStock: 0,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Double economy',
    image: '/images/room-2.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.  ",
    capacity: '2',
    category: 'Economy',
    price: 159.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 0,
  },
  {
    name: 'Family room',
    image: '/images/room-3.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.  ",
    capacity: '3',
    category: 'Basic',
    price: 239.99,
    countInStock: 5,
    rating: 3,
    numReviews: 0,
  },
  {
    name: 'Family room',
    image: '/images/room-4.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '4',
    category: 'Basic',
    price: 319.99,
    countInStock: 11,
    rating: 5,
    numReviews: 0,
  },
  {
    name: 'Single room',
    image: '/images/room-5.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '1',
    category: 'Standard',
    price: 129.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: 'Double room',
    image: '/images/room-6.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '2',
    category: 'Standard',
    price: 229.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 0,
  },

  {
    name: 'Single room',
    image: '/images/room-7.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '1',
    category: 'Deluxe',
    price: 290.99,
    countInStock: 20,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Double room',
    image: '/images/room-8.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '2',
    category: 'Deluxe',
    price: 369.99,
    countInStock: 20,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Family room',
    image: '/images/room-9.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '3',
    category: 'Deluxe',
    price: 419.99,
    countInStock: 20,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Double room',
    image: '/images/room-10.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '2',
    category: 'Deluxe',
    price: 339.99,
    countInStock: 20,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Deluxe room',
    image: '/images/room-11.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '1',
    category: 'Deluxe',
    price: 399.99,
    countInStock: 21,
    rating: 4.9,
    numReviews: 0,
  },
  {
    name: 'Single deluxe',
    image: '/images/room-12.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '1',
    category: 'Deluxe',
    price: 499.99,
    countInStock: 20,
    rating: 4.9,
    numReviews: 0,
  },
  {
    name: 'Double room deluxe',
    image: '/images/room-10.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '2',
    category: 'Deluxe',
    price: 339.99,
    countInStock: 20,
    rating: 4,
    numReviews: 0,
  },
  {
    name: 'Deluxe room special edition',
    image: '/images/room-11.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '1',
    category: 'Deluxe',
    price: 399.99,
    countInStock: 22,
    rating: 4.9,
    numReviews: 0,
  },
  {
    name: 'Single deluxe room',
    image: '/images/room-12.jpeg',
    description: "Street art edison bsingle economyulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo.",
    capacity: '1',
    category: 'Deluxe',
    price: 499.99,
    countInStock: 12,
    rating: 4.9,
    numReviews: 0,
  },
  
]

export default rooms
