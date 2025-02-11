from flask import Flask, render_template, request

app = Flask(__name__)

# Home page route
@app.route('/')
def home():
    return render_template('index.html')

# About page route
@app.route('/about')
def about():
    return render_template('about.html')

# Contact page route
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        # Here you can handle the form submission, e.g. send an email or save to a database
        return f"Thanks for your message, {name}!"
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
