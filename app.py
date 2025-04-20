import os.path

from flask import Flask, render_template, current_app, send_file, flash, redirect, url_for

from forms import ContactForm

app = Flask(__name__)
app.config['SECRET_KEY'] = '0f7cae9cb7caa0d6d206476a078a6904f998b2304ecae17ed1e3251660dd2ed8'


# Home Page
@app.route('/')
@app.route('/home', strict_slashes=False)
def home():  # put application's code here
    return render_template('home.html', title='Home')


# About Page
@app.route('/about', strict_slashes=False)
def about():
    return render_template('about.html', title='About')


# Contact Page
@app.route('/contact', methods=['GET', 'POST'], strict_slashes=False)
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        user_message = {
            'name': form.name.data,
            'email': form.email.data,
            'subject': form.subject.data,
            'message': form.message.data
        }
        # confirm_message_received(user_message)
        # send_message_to_admin(user_message)
        flash('Your message has been sent, i will get back to you soon!', 'success')
        return redirect(url_for('home'))
    else:
        print(form.errors)
    return render_template('contact.html', title='Contact', form=form)


# Download Resume
@app.route('/resume', strict_slashes=False)
def resume():
    file_path = os.path.join(current_app.root_path, 'static', 'attachments', 'AksaimMohamedAmin_SoftwareEngineer.pdf')
    return send_file(file_path, as_attachment=True)


# Error Pages
@app.errorhandler(403)
def forbidden(e):
    return render_template('errors/403.html', title='Forbidden'), 403


@app.errorhandler(404)
def page_not_found(e):
    return render_template('errors/404.html', title='Page Not Found'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('errors/500.html', title='Internal Server Error'), 500


if __name__ == '__main__':
    app.run()
