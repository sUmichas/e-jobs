## Welcome to e-jobs

E-jobs is a c2c platform that anyone can use. Once you create an account you can create a post about a job that you need, such as to fix your TV. Another user that knows how to help you has a problem that is your expertise. For example you are a web developer and he has issues with deploying his project in nginx. So that means that you can "exchange" your services and "pay" with your job. In case, that someone's issue is more complicated, then you can agree on the cost. 

### Requirements:
- python 3.x
-angular cli
-node


### Steps for installation and run locally e-jobs

Create your mysql database like this:
```markdown
CREATE DATABASE ejobs CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE USER 'ejobs_user'@'localhost' IDENTIFIED BY 'strongPasswd12$';

GRANT ALL PRIVILEGES ON ejobs.* TO 'ejobs_user'@'localhost';
```

If you want to run e-jobs locally follow steps below:

1. Clone the repo:
```markdown
git clone https://github.com/sUmichas/e-jobs.git
```
2. Create a site_config file like this:
```markdown
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'ejobs',
        'USER': 'ejobs_user',
        'PASSWORD': 'strongPasswd12$',
        'HOST': '127.0.0.1',
    }
}
SECRET_KEY = 'yourdjangosecretkey'
```
3. Download python packages with pip:
```markdown
pip install django pymysql djangorestframework djangorestframework-jwt 
```
4. Go to /your-path/my-app/server and migrate your changes. Then start your app:
```markdown
cd /your-path/my-app/server
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
5. Go to /your-path/my-app/sumi and install node_modules.:
```markodown
cd /your-path/my-app/sumi
npm install
npm start

#if you follow this guide and you successfully completed step 4
cd ../sumi
npm install
npm start
````
6. Visit localhost:4200/

7. You must see this page:

[Image of e-jobs](https://photos.google.com/share/AF1QipPdSsbAUKLmv6O3J8f5c7WpuN-amQZB4gGV1YxoyA60h98flmnnR5cYVmNADDBLNw/photo/AF1QipNB-xIxYqFR0FPoHEcwGCUcKsnPU2u0ZfqNj-yg?key=UGV5RFFIQkpFVWlvcEpRQkFyNlVOX2R0ZDl5LWZR)


### Pages

- In register page you sign up. If your input is valid, a sussess pop-up apperas.If not, an error pop-up appears.
  Note that you need to fill all fields to enable register button.

- In Posts page you see all posts that have been created

-In Create-post you can create a new post.
 Note that you have to sign in to create a new post

-In Users you can see all users that have created an account. If you click on someone a profile page appears with all his information

-In post/[post:id] you can see the details of a post. You can also edit it, if you are the one that created it.
 You can also see the comments that other users have posted. You can also create your own comment. 

-Once you sing in, there is a link Your posts under your "username-list" in navbar.
 In this page you can see all your posts.


