#Tech Jobs Website

NYC Tech Jobs is the City's initiative to highlight critical roles for developers, data analysts, and designers in City government. This is part of our effort to “rebrand” working for City government as an unparalleled opportunity to solve complex urban challenges, create massive impact, and learn new skills. You can visit the live site here: [NYC Tech Jobs](http://www.nyc.gov/techjobs).

##Website Framework

The website is built using [Jekyll](http://jekyllrb.com/), a Ruby-based static website generator. [Bootstrap](http://www.getbootstrap.com) and [Designmodo's FlatUI](http://designmodo.github.io/Flat-UI/) are being used for styles and front-end. Lastly, we're using open-source icons from [Flat Icon](http://www.flaticon.com).

##Development

[Ruby](https://www.ruby-lang.org/en/) is required for building the site locally, [Bundler](http://bundler.io/) is used to manage dependencies. The [gh-pages gem](https://github.com/github/pages-gem) is used for easy bootstrapping (to install the Jekyll gem and all required dependencies, at the version level currently supported by [GitHub pages](https://pages.github.com/)).

Once you have Ruby and Bundler installed, getting the website built and running locally is as simple as installing the dependencies using Bundler:

    ~/TechJobs$ bundle install
    ...
    ...
    Your bundle is complete!
    Use `bundle show [gemname]` to see where a bundled gem is installed

and then serving the site (again, using Bundler):

    ~/TechJobs$ bundle exec jekyll serve
    Configuration file: /home/user/TechJobs/_config.yml
            Source: /home/user/TechJobs
       Destination: /home/user/TechJobs/_site
      Generating...
                    done.
    Auto-regeneration: enabled for '/home/user/TechJobs'
    Configuration file: /home/user/TechJobs/_config.yml
    Server address: http://0.0.0.0:4000/html/techjobs/html/
    Server running... press ctrl-c to stop.

Notice the `Server address` is `http://0.0.0.0:4000/html/techjobs/html/` - this means the site is available locally at
http://localhost:4000/html/techjobs/html.

The latter part of this URL (`/html/techjobs/html`) comes from the `baseurl` parameter in `_config.yml`.
This can be overridden when developing locally using the `--baseurl` argument, e.g.

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

Here we used `--baseurl ''` to set the `baseurl` parameter to `''` (empty), so the site is available at http://localhost:4000.

Each time you make a change to a file, the site will automatically regenerate.

##Use it for Your City!

We want you to use or modify this website for your city. If you're GitHub-savvy, you can [fork this repository](https://help.github.com/articles/fork-a-repo/) for your organization. If you just want to download the code as a ZIP file, click Download ZIP at the bottom of the right-hand navigation bar.

Either way, shoot us a note at dseliger@cto.nyc.gov!

##Project Partners

* [NYC Mayor's Office of Tech + Innovation](http://www.nyc.gov/forward)
* [NYC Mayor's Office of Operations](http://www.nyc.gov/operations)
* [NYC Department of Information Technology and Telecommunications](http://www.nyc.gov/doitt)
