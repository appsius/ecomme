module.exports = ({ req }) => {
  return `
  <div>
    Your id is: ${req.session.userId}
    <form method="POST">
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" />
      <input name="passwordConfirmation" placeholder="Password Confirmation" />
      <button>Sign Up</button>
    </form>
  </div>
  `;
};
