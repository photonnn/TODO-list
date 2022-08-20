# TODO-list

Features:
    - Fully responsive
    - Local storage
    - Simplistic design

My first project that has properly utilised NPM & webpack.
I kind of just went into the project, thinking it would be simple.
Well, it was, untill I decided that I want to flesh this out fully.
I decided that I want a storage, more responsiveness, expired border
that shows when the date is due and many others features, many which
I've written about in the index.js. It is fact that a properly planned
project like this would have likely result in the better enginered
product, but I'm satisfied with what I was able to accomplish as I took
my time, more than was perhaps necessary, to rework the project and 
make it work properly on the foundations that I've instictivilly 
think of. 

The core of the project is a 'projects' object, that contains all of
the information on the projects and tasks included in the project.
Due to everything being in one object, it was simple to load local 
storage, as only the object needed to be loaded.

Forms is the largest module, even though it may as well have been
larger. This is because I considered adding a seperate form for 
editing a task, but I changed my mind, because I though it would
be batter to just modify the existing addTask form. The way I've done
forms, is without a submit button, I just couldn't get it to work.
Information from the forms is obtains by a seperate get function,
and the forms need to be reset every time the users submit aka
clicks the green button. In a way there are only singular forms
being utilisized and these one of each keep reseting. Better thing
may be done, here, I am not sure as of this moment though.