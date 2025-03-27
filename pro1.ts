function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function submitForm(name: string, email: string): void {
  if (!name || !email) {
    console.log("All fields are required.");
    return;
  }

  if (!validateEmail(email)) {
    console.log("Invalid email format.");
    return;
  }

  console.log("Form Submitted Successfully!", { name, email });
}

submitForm("Alice", "alice@example.com"); // ✅ Form Submitted
submitForm("", "alice@example.com");       // ❌ Missing Name
submitForm("Bob", "invalid-email");        // ❌ Invalid Email
