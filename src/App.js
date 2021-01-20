function App() {
  return (
  <main className="App">
    <section class="section-contact">
      <div class="container">
        <h1>Contact the team!</h1>
        <p>Fill out the form below to get in touch with one of our team members.
          We will try to get back to you within 48 hours. If we do not reply within that
          time please feel free to contact the support.
        </p>
        <form>
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input 
              type="text"
              name="firstName"
              id="firstName"
              required
              class="form-element"
              placeholder="John"
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input 
              type="text"
              name="lastName"
              id="lastName"
              required
              class="form-element"
              placeholder="Doe"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="text"
              name="email"
              id="email"
              class="form-element"
              placeholder="john.doe@example.com"
            />
          </div>
          <div class="form-group">
            <label for="company">Company</label>
            <input 
              type="text"
              name="company"
              id="company"
              class="form-element"
              placeholder="john.doe@example.com"
            />
          </div>
          <div class="form-group full">
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              class="form-element"
              placeholder="Test"
            >
            </textarea>
          </div>
          <div class="submit-group">
            <input
              type="submit"
              value="Send Message!"
            />
          </div>
        </form>
      </div>
    </section>
  </main>
  );
}

export default App;
