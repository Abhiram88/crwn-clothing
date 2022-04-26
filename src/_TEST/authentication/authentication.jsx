const VerifyUserLogin = (email, password) => {
  console.log("user cred" + email + password);

  fetch(
    `http://localhost:4000/verify_user?email=${email}&password=${password}`,
    {
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data != "" && data != "False") {
        console.log(data);
        return data;
      } else {
        console.log("Please check username/password");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default VerifyUserLogin;
