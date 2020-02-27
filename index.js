const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['skkskskskkskskskkskskk']
  })
);

app.get('/', (req, res) => {
  res.send(`
  <div>
    Your id is: ${req.session.userId}
    <form method="POST">
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" />
      <input name="passwordConfirmation" placeholder="Password Confirmation" />
      <button>Sign Up</button>
    </form>
  </div>
  `);
});

app.post('/', async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  const existingUser = await usersRepo.getOneBy({ email });

  if (existingUser) {
    return res.send('Email in use');
  }

  if (password !== passwordConfirmation) {
    return res.send('Sorry, you may make a typo!');
  }

  // Create a user in our repo to represent this person
  const user = await usersRepo.create({ email, password });

  // Store the id of that person inside users cookie
  req.session.userId = user.id;

  res.send('Account Created!');
});

app.listen(3000, () => {
  console.log('Listening!');
});
