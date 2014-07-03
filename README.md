# Awesome Ruby

A collection of awesome Ruby libraries, tools, frameworks and software :gem:

Inspired by [awesome-php](https://github.com/ziadoz/awesome-php), [awesome-python](https://github.com/vinta/awesome-python), [frontend-dev-bookmarks](https://github.com/dypsilon/frontend-dev-bookmarks) and [ruby-bookmarks](https://github.com/dreikanter/ruby-bookmarks).

Contributions are always welcome! The idea is to build a categorized community-driven collection.

* [Awesome Ruby](#awesome-ruby)
  * [Style Guide](#style-guide)
  * [Package Management](#package-management)
  * [Environment Management](#environment-management)
  * [Documentation](#documentation)
  * [Testing](#testing)
  * [Web Frameworks](#web-frameworks)
  * [Database Drivers](#database-drivers)
  * [ORM](#orm)
  * [HTTP](#http)
  * [API Builder](#api-builder)
  * [CLI](#cli)
  * [Authentication](#authentication)
  * [Authorization](#authorization)
  * [Queue](#queue)
  * [Template Engine](#template-engine)
  * [Search](#search)
  * [Internationalization](#internationalization)
  * [Geolocation](#geolocation)
  * [Caching](#caching)
  * [Email](#email)
  * [Form Builder](#forms)
  * [Imagery](#imagery)
  * [WebSocket](#websocket)
  * [HTML Parsing](#html-parsing)
  * [Processes and Threads](#processes-and-threads)
  * [Concurrency](#concurrency)
  * [Code Analysis](#code-analysis)
  * [Debugging Tools](#debugging-tools)
  * [CMS](#cms)
  * [Admin Interface](#admin-interface)
  * [Static Site Generation](#static-site-generation)
  * [Forum Engine](#forum-engine)
  * [E-Commerce](#e-commerce)
  * [Analytics](#analytics)
  * [DevOps Tools](#devops-tools)
  * [GUI](#gui)
  * [Game Development](#game-development)
  * [Robotics](#robotics)
  * [Misc](#misc)

## Style Guide

* [Ruby style guide](https://github.com/bbatsov/ruby-style-guide) - Community-driven Ruby coding style.
* [Rails style guide](https://github.com/bbatsov/rails-style-guide) - Community-driven Rails best practices and style for Rails 3 and 4.

## Package Management

* [RubyGems](https://rubygems.org) - Community's gem hosting service.

## Environment Management
* [rbenv](https://github.com/sstephenson/rbenv) — Use rbenv to pick a Ruby version for your application and guarantee that your development environment matches production. Put rbenv to work with [Bundler](http://bundler.io) for painless Ruby upgrades and bulletproof deployments.
* [RVM](https://rvm.io) — RVM is a command-line tool which allows you to easily install, manage, and work with multiple ruby environments from interpreters to sets of gems.
* [dotenv](https://github.com/bkeepers/dotenv)

## Documentation

* [RDoc](https://github.com/rdoc/rdoc) - RDoc produces HTML and command-line documentation for Ruby projects.
* [YARD](http://yardoc.org) - YARD is a documentation generation tool for Ruby. It enables the user to generate consistent, usable documentation that can be exported to a number of formats very easily.

## Testing

* [RSpec](https://github.com/rspec/rspec)
* [minitest](https://github.com/seattlerb/minitest)
* [Test::Unit](http://test-unit.github.io)
* [Cucumber](https://github.com/cucumber/cucumber)
* [Capybara](https://github.com/jnicklas/capybara)
* [Appraisal](https://github.com/thoughtbot/appraisal) - Appraisal integrates with bundler and rake to test your library against different versions of dependencies.

## Web Frameworks

* [Ruby on Rails](http://rubyonrails.org)
* [Sinatra](http://www.sinatrarb.com)
* [Padrino](http://www.padrinorb.com)
* [Lotus](http://lotusrb.org)

## Database Drivers

* [pg](https://bitbucket.org/ged/ruby-pg)
* [mysql2](https://github.com/brianmario/mysql2)
* [SQLite3](https://github.com/sparklemotion/sqlite3-ruby)
* [redis-rb](https://github.com/redis/redis-rb)

## ORM

* [ActiveRecord](https://github.com/rails/rails/tree/master/activerecord)
* [Sequel](https://github.com/jeremyevans/sequel)
* [Mongoid](http://mongoid.org/en/mongoid/index.html)

## Http

* [RESTClient](https://github.com/rest-client/rest-client)
* [httparty](https://github.com/jnunemaker/httparty)
* [Faraday](https://github.com/lostisland/faraday)

## API Builder

* [Grape](http://intridea.github.io/grape)
* [Rails::API](https://github.com/rails-api/rails-api)
* [jbuilder](https://github.com/rails/jbuilder)
* [rabl](https://github.com/nesquena/rabl)

## CLI

* [Thor](http://whatisthor.com)
* [Commander](https://github.com/visionmedia/commander)
* [Slop](https://github.com/leejarvis/slop)

## Authentication

* [Devise](https://github.com/plataformatec/devise)
* [Authlogic](https://github.com/binarylogic/authlogic)
* [OmniAuth](https://github.com/intridea/omniauth)
* [Sorcery](https://github.com/NoamB/sorcery)

## Authorization

* [CanCanCan](https://github.com/CanCanCommunity/cancancan)
* [Pundit](https://github.com/elabs/pundit)

## Queue

* [Resque](https://github.com/resque/resque) — a Redis-backed Ruby library for creating background jobs.
* [Sidekiq](http://sidekiq.org) — a full-featured background processing framework for Ruby. It aims to be simple to integrate with any modern Rails application and much higher performance than other existing solutions.
* [Delayed::Job](https://github.com/tobi/delayed_job) — database backed asynchronous priority queue.

## Template Engine

* [Tilt](https://github.com/rtomayko/tilt)
* [Haml](https://github.com/haml/haml)
* [Slim](https://github.com/slim-template/slim)
* [Liquid](https://github.com/Shopify/liquid)

## Search

* [Thinking Sphinx](https://github.com/pat/thinking-sphinx)
* [elasticsearch-ruby](https://github.com/elasticsearch/elasticsearch-ruby)
* [Searchkick](https://github.com/ankane/searchkick)

## Internationalization

* [i18n](https://github.com/svenfuchs/i18n)

## Geolocation

* [Geocoder](https://github.com/alexreisner/geocoder)
* [Geokit](https://github.com/geokit/geokit)

## Caching

* [Dalli](https://github.com/mperham/dalli) - a high performance pure Ruby client for accessing memcached servers.

## Email

* [Mail](https://github.com/mikel/mail)
* [Pony](https://github.com/benprew/pony)

## Form Builder

* [Simple Form](https://github.com/plataformatec/simple_form)
* [Formtastic](https://github.com/justinfrench/formtastic)

## Imagery

* [MiniMagick](https://github.com/minimagick/minimagick) - a ruby wrapper for ImageMagick or GraphicsMagick command line.

## WebSocket

* [Faye](http://faye.jcoglan.com/ruby.html)

## HTML Parsing

* [Nokogiri](http://nokogiri.org)

## Processes and Threads

* [Parallel](https://github.com/grosser/parallel)

## Concurrency

* [EventMachine](https://github.com/eventmachine/eventmachine)
* [Celluloid](http://celluloid.io)

## Code Analysis

* [SimpleCov](https://github.com/colszowka/simplecov)
* [Rubocop](https://github.com/bbatsov/rubocop)

## Debugging Tools

* [debugger](https://github.com/cldwalker/debugger)
* [Byebug](https://github.com/deivid-rodriguez/byebug) - a simple to use, feature rich debugger for Ruby 2.

## CMS

* [Refinery CMS](http://refinerycms.com)
* [Radiant](http://radiantcms.org)
* [LocomotiveCMS](http://www.locomotivecms.com)

## Admin Interface

* [ActiveAdmin](http://activeadmin.info)
* [RailsAdmin](https://github.com/sferik/rails_admin)

## Static Site Generation

* [Jekyll](http://jekyllrb.com)
* [Middleman](http://middlemanapp.com)

## Forum Engine

* [Forem](https://github.com/radar/forem)

## E-Commerce

* [Spree](http://spreecommerce.com)
* [ROR Ecommerce](http://www.ror-e.com)

## Analytics

* [Gabba](https://github.com/hybridgroup/gabba)
* [Ahoy](https://github.com/ankane/ahoy)

## DevOps Tools

* [Capistrano](http://capistranorb.com)
* [Backup](https://github.com/meskyanichi/backup)
* [Puppet](https://github.com/puppetlabs/puppet)

## GUI

* [Shoes](http://shoesrb.com)

## Game Development

* [Gosu](http://www.libgosu.org)

## Mobile Development

* [RubyMotion](http://www.rubymotion.com)
* [Ruboto](http://ruboto.org)

## Robotics

* [Artoo](http://artoo.io)

## Misc

* [Betty](https://github.com/pickhardt/betty)
