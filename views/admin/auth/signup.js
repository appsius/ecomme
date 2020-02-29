const layout = require('../layout');

const getErrors = (errors, prop) => {
  try {
    return errors.mapped()[prop].msg;
  } catch (err) {
    return '';
  }
};

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div>
        Your id is: ${req.session.userId}
        <form method="POST">
        
          <input name="email" placeholder="Email" />
          ${getErrors(errors, 'email')}

          <input name="password" placeholder="Password" />
          ${getErrors(errors, 'password')}

          <input name="passwordConfirmation" placeholder="Password Confirmation" />
          ${getErrors(errors, 'passwordConfirmation')}
          <button>Sign Up</button>

        </form>
      </div>
  `
  });
};
