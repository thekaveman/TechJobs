#Tech Jobs Website

NYC Tech Jobs is the City's initiative to highlight critical roles for developers, data analysts, and designers in City government. This is part of our effort to “rebrand” working for City government as an unparalleled opportunity to solve complex urban challenges, create massive impact, and learn new skills. You can visit the live site here: [NYC Tech Jobs](http://www.nyc.gov/techjobs).

##Website Framework

The website is built using [Jekyll](http://jekyllrb.com/). [Bootstrap](http://www.getbootstrap.com) and [Designmodo's FlatUI](http://designmodo.github.io/Flat-UI/) are being used for styles and front-end. Lastly, we're using open-source icons from [Flat Icon](http://www.flaticon.com).

##Development

[Jekyll](http://jekyllrb.com/) is required for building the site locally, [Bundler](http://bundler.io/) is used to manage dependencies (we just use the [gh-pages gem](https://github.com/github/pages-gem) for easy bootstrapping).

Once you have these tools installed, getting the website built and running locally is as simple as installing the dependencies

    ~/TechJobs$ bundle install
    ...
    ...
    Your bundle is complete!
    Use `bundle show [gemname]` to see where a bundled gem is installed

and then running (available at http://localhost:4000 by default).

    ~/TechJobs$ bundle exec jekyll serve --baseurl ''
    Configuration file: /home/user/TechJobs/_config.yml
            Source: /home/user/TechJobs
       Destination: /home/user/TechJobs/_site
      Generating...
                    done.
    Auto-regeneration: enabled for '/home/user/TechJobs'
    Configuration file: /home/user/TechJobs/_config.yml
    Server address: http://0.0.0.0:4000/
    Server running... press ctrl-c to stop.

Each time you make a change to a file, the site will automatically regenerate.

##Use it for Your City!

We want you to use or modify this website for your city. If you're GitHub-savvy, you can [fork this repository](https://help.github.com/articles/fork-a-repo/) for your organization. If you just want to download the code as a ZIP file, click Download ZIP at the bottom of the right-hand navigation bar.

Either way, shoot us a note at dseliger@cto.nyc.gov!

##Project Partners

* [NYC Mayor's Office of Tech + Innovation](http://www.nyc.gov/forward)
* [NYC Mayor's Office of Operations](http://www.nyc.gov/operations)
* [NYC Department of Information Technology and Telecommunications](http://www.nyc.gov/doitt)
