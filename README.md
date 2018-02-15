## Welcome to e-jobs

E-jobs is a c2c platform that anyone can use. Once you create an account you can create a post about a job that you need, such as to fix your TV. Another user that knows how to help you has a problem that is your expertise. For example you are a web developer and he has issues with deploying his project in nginx. So that means that you can "exchange" your services and "pay" with your job. In case, that someone's issue is more complicated, then you can agree on the cost. 

### Steps for installation and run locally e-jobs

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
```markdown
cd /your-path/my-app/sumi
npm install
npm start

#if you follow this guide and you successfully completed step 4
cd ../sumi
npm install
npm start
```
6. Visit localhost:4200/

7. You must see this page:

![Image of e-jobs](https://photos.google.com/share/AF1QipPdSsbAUKLmv6O3J8f5c7WpuN-amQZB4gGV1YxoyA60h98flmnnR5cYVmNADDBLNw/photo/AF1QipNB-xIxYqFR0FPoHEcwGCUcKsnPU2u0ZfqNj-yg?key=UGV5RFFIQkpFVWlvcEpRQkFyNlVOX2R0ZDl5LWZR)
# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)


For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/sUmichas/e-jobs/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
