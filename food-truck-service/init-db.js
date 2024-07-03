db = db.getSiblingDB('food_truck');
db.createUser({
  user: 'admin',
  pwd: 'password',
  roles: [
    {
      role: 'readWrite',
      db: 'nest',
    },
  ],
});
