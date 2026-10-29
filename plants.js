export const categories = [
  {
    id: 'easy-care',
    title: 'Easy-care favourites',
    subtitle: 'Lovely greens that are happy to grow with you.',
    plants: [
      { id: 'pothos', name: 'Golden Pothos', price: 18, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85', description: 'Trailing heart-shaped leaves with cheerful golden patterns.' },
      { id: 'snake', name: 'Snake Plant', price: 24, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=900&q=85', description: 'Architectural upright leaves for a modern corner.' },
      { id: 'zz', name: 'ZZ Plant', price: 28, image: 'https://images.unsplash.com/photo-1632207691143-643e2c2c7b88?auto=format&fit=crop&w=900&q=85', description: 'Glossy leaves and an easygoing personality.' },
      { id: 'spider', name: 'Spider Plant', price: 16, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=900&q=85', description: 'Arching striped foliage that brightens shelves.' },
      { id: 'peace', name: 'Peace Lily', price: 26, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=900&q=85', description: 'Deep green leaves with elegant white blooms.' },
      { id: 'rubber', name: 'Rubber Plant', price: 32, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85', description: 'Bold, leathery leaves make a beautiful statement.' }
    ]
  },
  {
    id: 'tropical',
    title: 'Tropical statement plants',
    subtitle: 'Bring the feeling of a lush indoor jungle home.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 38, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85', description: 'Iconic split leaves with tropical character.' },
      { id: 'bird', name: 'Bird of Paradise', price: 58, image: 'https://images.unsplash.com/photo-1597055181300-a8b5be9a7e10?auto=format&fit=crop&w=900&q=85', description: 'Large sculptural leaves that make a room feel alive.' },
      { id: 'calathea', name: 'Calathea Orbifolia', price: 34, image: 'https://images.unsplash.com/photo-1597055181300-a8b5be9a7e10?auto=format&fit=crop&w=900&q=85', description: 'Rounded leaves with soft silver-green stripes.' },
      { id: 'alocasia', name: 'Alocasia Polly', price: 30, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=900&q=85', description: 'Arrow-shaped leaves and dramatic pale veins.' },
      { id: 'philodendron', name: 'Heartleaf Philodendron', price: 22, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=900&q=85', description: 'Soft trailing vines for shelves and hanging planters.' },
      { id: 'palm', name: 'Parlour Palm', price: 27, image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=85', description: 'Feathery fronds bring a calm, airy feel.' }
    ]
  },
  {
    id: 'succulents',
    title: 'Succulents & sculptural greens',
    subtitle: 'Small wonders with personality and texture.',
    plants: [
      { id: 'jade', name: 'Jade Plant', price: 19, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85', description: 'Plump rounded leaves in a compact, tree-like form.' },
      { id: 'echeveria', name: 'Echeveria', price: 14, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85', description: 'Rosette-shaped leaves with a sculptural silhouette.' },
      { id: 'aloe', name: 'Aloe Vera', price: 17, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85', description: 'A sun-loving succulent with long fleshy leaves.' },
      { id: 'haworthia', name: 'Haworthia Zebra', price: 15, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85', description: 'Compact pointed leaves with fine white bands.' },
      { id: 'stringpearls', name: 'String of Pearls', price: 21, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=900&q=85', description: 'Bead-like leaves trail beautifully over pot edges.' },
      { id: 'cactus', name: 'Moon Cactus', price: 13, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85', description: 'A playful little cactus for a sunny windowsill.' }
    ]
  }
];

export const allPlants = categories.flatMap(category => category.plants.map(plant => ({ ...plant, category: category.title })));
