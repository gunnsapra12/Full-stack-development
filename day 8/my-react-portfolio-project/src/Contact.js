function Contact() {
  return (
    <div>
      <h3>Contact me</h3>

      <form>
        <div>
          <label>Enter your Name:</label><br />
          <input type="text" name="name" /><br />
        </div>

        <div>
          <label>Enter your Email ID:</label><br />
          <input type="email" name="email" /><br />
        </div>

        <div>
          <label>Query:</label><br />
          <textarea name="query" /><br />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { Contact };

