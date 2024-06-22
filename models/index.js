const sequelize = require('./config/database');
const User = require('./models/user');
const { create } = require('domain');


try {
  await sequelize.authenticate();
  console.log('Connection to the database has been established successfully');

  await User.sync();
  // CREATE (POST)
  const newUser = await User.create({
    name: 'Joao',
    email: 'joao@gmail.com',
    password: 'hardcode',
  });
  console.log('New user inserted', newUser.toJSON());

  // READ (GET)
  const users = await User.findAll();
  console.log('User List', users.map((u) => u.toJSON()));

  // PUT (UPDATE)
  const user = await User.findByPk(id);
  await user.update({ password: 'hardcode' })
  console.log('User successfully updated', user.toJSON());

  // DELETE (DELETE)
  const deleteUser = await User.findByPk(id);
  await deleteUser.destroy();
  console.log('User successfully updated')
}

catch (error) {
  console.error('Unable to connect to or insert into the database:', error);
} finally { sequelize.close(); }
