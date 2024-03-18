// LoginValidation.js

// Define your validation function here
const Validation = (values) => {
    let errors = {};

    // Check if email is empty
    if (!values.email.trim()) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    // Check if password is empty
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more";
    }

    // Check if user type is selected
    if (!values.usertype.trim()) {
        errors.usertype = "Please select user type";
    }
    if (values.usertype.trim().split(' ').length > 1) {
        errors.usertype = "Please select only one user type";
    }
    return errors;
};

export default Validation;
