# Awesome Ruby <a href="http://marcanguera.net/awesome-ruby"><img src="https://raw.githubusercontent.com/markets/awesome-ruby/gh-pages/images/logo.png" align="absmiddle"/></a>

A collection of awesome Ruby libraries, tools, frameworks and software.

Inspired by [awesome-php](https://github.com/ziadoz/awesome-php), [awesome-python](https://github.com/vinta/awesome-python), [frontend-dev-bookmarks](https://github.com/dypsilon/frontend-dev-bookmarks) and [ruby-bookmarks](https://github.com/dreikanter/ruby-bookmarks).

Contributions are always welcome! Please take a look at the [contribution guidelines and quality standard](https://github.com/markets/awesome-ruby/blob/master/CONTRIBUTING.md) first.

Thanks to all [contributors](https://github.com/markets/awesome-ruby/graphs/contributors), you're awesome and wouldn't be possible without you! The goal is to build a categorized community-driven collection of very well-known resources.

* [Awesome Ruby](#awesome-ruby)
  * [Coding Style Guides](#coding-style-guides)
  * [Package Management](#package-management)
  * [Environment Management](#environment-management)
  * [Documentation](#documentation)
  * [Testing](#testing)
  * [Web Frameworks](#web-frameworks)
  * [Web Servers](#web-servers)
  * [Database Drivers](#database-drivers)
  * [Database Tools](#database-tools)
  * [ORM/ODM](#ormodm)
  * [ORM/ODM Extensions](#ormodm-extensions)
  * [Decorators](#decorators)
  * [HTTP](#http)
  * [API Builder](#api-builder)
  * [CLI Builder](#cli-builder)
  * [Authentication](#authentication)
  * [OAuth](#oauth)
  * [Authorization](#authorization)
  * [Logging](#logging)
  * [Queue](#queue)
  * [Scheduling](#scheduling)
  * [Data Visualization](#data-visualization)
  * [Template Engine](#template-engine)
  * [Assets](#assets)
  * [Markdown Processors](#markdown-processors)
  * [Search](#search)
  * [Internationalization](#internationalization)
  * [Country Data](#country-data)
  * [Geolocation](#geolocation)
  * [Money](#money)
  * [Caching](#caching)
  * [File Upload](#file-upload)
  * [Email](#email)
  * [Form Builder](#form-builder)
  * [Pagination](#pagination)
  * [Imagery](#imagery)
  * [Video](#video)
  * [WebSocket](#websocket)
  * [HTML/XML Parsing](#htmlxml-parsing)
  * [Ebook](#ebook)
  * [PDF](#pdf)
  * [Web Crawling](#web-crawling)
  * [Processes and Threads](#processes-and-threads)
  * [Process Monitoring](#process-monitoring)
  * [Concurrency](#concurrency)
  * [Configuration](#configuration)
  * [Core Extensions](#core-extensions)
  * [Error Handling](#error-handling)
  * [Code Analysis and Metrics](#code-analysis-and-metrics)
  * [Dashboards](#dashboards)
  * [Debugging Tools](#debugging-tools)
  * [Date and Time Processing](#date-and-time-processing)
  * [Profiler](#profiler)
  * [Third-party APIs](#third-party-apis)
  * [CMS](#cms)
  * [Admin Interface](#admin-interface)
  * [Static Site Generation](#static-site-generation)
  * [SEO](#seo)
  * [Social Networking](#social-networking)
  * [E-Commerce and Payments](#e-commerce-and-payments)
  * [Analytics](#analytics)
  * [RSS](#rss)
  * [DevOps Tools](#devops-tools)
  * [Git Tools](#git-tools)
  * [GUI](#gui)
  * [Game Development](#game-development)
  * [Mobile Development](#mobile-development)
  * [Robotics](#robotics)
  * [Natural Language Processing](#natural-language-processing)
  * [Machine Learning](#machine-learning)
  * [Abstraction](#abstraction)
  * [Misc](#misc)
* [Services and Apps](#services-and-apps)
* [Resources](#resources)
* [Other Awesome Lists](#other-awesome-lists)

## Coding Style Guides

* [Ruby style guide](https://github.com/bbatsov/ruby-style-guide) - Community-driven Ruby coding style
* [Rails style guide](https://github.com/bbatsov/rails-style-guide) - Community-driven Rails best practices and style for Rails 3 and 4
* [RSpec style guide](https://github.com/andreareginato/betterspecs) - Better Specs { rspec guidelines with ruby }

## Package Management

* Gems
  * [RubyGems](https://rubygems.org) - Community's gem hosting service
  * [Bundler](http://bundler.io) - Manage your application's gem dependencies with less pain
* Packages and Applications
  * [Homebrew](https://github.com/Homebrew/homebrew) - The missing package manager for OS X
  * [Homebrew-cask](https://github.com/caskroom/homebrew-cask) - a CLI workflow for the administration of Mac applications distributed as binaries
  * [CocoaPods](https://github.com/CocoaPods/CocoaPods) - The Objective-C dependency manager
  * [Berkshelf](https://github.com/berkshelf/berkshelf) - A Chef Cookbook manager

## Environment Management

* [rbenv](https://github.com/sstephenson/rbenv) — Use rbenv to pick a Ruby version for your application and guarantee that your development environment matches production
* [RVM](https://rvm.io) — RVM is a command-line tool which allows you to easily install, manage, and work with multiple ruby environments from interpreters to sets of gems
* [ruby-build](https://github.com/sstephenson/ruby-build) - Compile and install Ruby
* [chruby](https://github.com/postmodern/chruby) - Change your current Ruby. No shims, no crazy options or features, ~90 LOC
* [chgems](https://github.com/postmodern/chgems) - Chroot for RubyGems
* [ruby-install](https://github.com/postmodern/ruby-install) - Installs Ruby, JRuby, Rubinius, MagLev or MRuby

## Documentation

* [RDoc](https://github.com/rdoc/rdoc) - RDoc produces HTML and command-line documentation for Ruby projects
* [YARD](http://yardoc.org) - YARD enables the user to generate consistent, usable documentation that can be exported to a number of formats very easily
* [grape-swagger](https://github.com/tim-vandecasteele/grape-swagger) - Add swagger compliant documentation to your Grape API
* [Inch](https://github.com/rrrene/inch) - Inch is a documentation measurement and evalutation tool for Ruby code, based on YARD

## Testing

* Frameworks
  * [RSpec](https://github.com/rspec/rspec) - Behaviour Driven Development for Ruby
  * [minitest](https://github.com/seattlerb/minitest) - minitest provides a complete suite of testing facilities supporting TDD, BDD, mocking, and benchmarking
  * [Test::Unit](http://test-unit.github.io) - Test::Unit is a xUnit family unit testing framework for Ruby
  * [Cucumber](https://github.com/cucumber/cucumber) - BDD that talks to domain experts first and code second
  * [Capybara](http://jnicklas.github.io/capybara) - Acceptance test framework for web applications
  * [RR](https://github.com/rr/rr) - A test double framework that features a rich selection of double techniques and a terse syntax
  * [Spinach](https://github.com/codegram/spinach) - Spinach is a high-level BDD framework that leverages the expressive Gherkin language (used by Cucumber) to help you define executable specifications of your application or library's acceptance criteria.
  * [Bacon](https://github.com/chneukirchen/bacon) - A small RSpec clone
  * [Konacha](https://github.com/jfirebaugh/konacha) - Test your Rails application's JavaScript with the mocha test framework and chai assertion library
  * [shoulda-matchers](https://github.com/thoughtbot/shoulda-matchers) - Provides Test::Unit- and RSpec-compatible one-liners that test common Rails functionality. These tests would otherwise be much longer, more complex, and error-prone.
  * [Spork](https://github.com/sporkrb/spork) - A DRb server for testing frameworks (RSpec / Cucumber currently)
  * [Cutest](https://github.com/djanowski/cutest) - Isolated tests in Ruby
* Fake Data
  * [factory_girl](https://github.com/thoughtbot/factory_girl) - A library for setting up Ruby objects as test data
  * [faker](https://github.com/stympy/faker) - A library for generating fake data such as names, addresses, and phone numbers.
  * [Fabrication](http://fabricationgem.org/) - A simple and powerful object generation library
  * [Machinist](https://github.com/notahat/machinist) - Fixtures aren't fun. Machinist is
  * [Forgery](https://github.com/sevenwire/forgery) - Easy and customizable generation of forged data.
* Mock
  * [WebMock](https://github.com/bblimke/webmock) - Library for stubbing and setting expectations on HTTP requests
* WebDrivers
  * [Watir](https://github.com/watir/watir/) - Web application testing in Ruby
  * [Selenium WebDriver](http://selenium.googlecode.com/git/docs/api/rb/index.html) - This gem provides Ruby bindings for WebDriver.
* Extra
  * [Appraisal](https://github.com/thoughtbot/appraisal) - Appraisal integrates with bundler and rake to test your library against different versions of dependencies
  * [timecop](https://github.com/travisjeffery/timecop) - Provides "time travel" and "time freezing" capabilities, making it dead simple to test time-dependent code
  * [Ruby-JMeter](https://github.com/flood-io/ruby-jmeter) - A Ruby based DSL for building JMeter test plans
  * [Spring](https://github.com/rails/spring) - Preloads your rails environment in the background for faster testing and Rake tasks
  * [vcr](https://github.com/vcr/vcr) - Record your test suite's HTTP interactions and replay them during future test runs for fast, deterministic, accurate tests

## Web Frameworks

* [Ruby on Rails](http://rubyonrails.org) - A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern
* [Sinatra](http://www.sinatrarb.com) - Classy web-development dressed in a DSL
* [Padrino](http://www.padrinorb.com) - A full-stack ruby framework built upon Sinatra
* [Lotus](http://lotusrb.org) - It aims to bring back Object Oriented Programming to web development, leveraging on a stable API, a minimal DSL, and plain objects.
* [Camping](http://camping.io) - A web microframework which consistently stays at less than 4kB of code
* [Cuba](http://cuba.is) - A microframework for web development
* [Pakyow](http://pakyow.com/) - A framework for building modern web-apps in Ruby. It helps you build working software faster with a development process that remains friendly to both designers and developers
* [Ramaze](http://ramaze.net/) - A simple, light and modular open-source web application framework written in Ruby

## Web Servers

* [Rack](http://rack.github.io) - A common Ruby web server interface. By itself, it's just a specification and utility library, but all Ruby web servers implement this interface
* [Phusion Passenger](https://www.phusionpassenger.com) - Fast and robust web server and application server
* [Unicorn](http://unicorn.bogomips.org) - Rack HTTP server for fast clients and Unix
* [Thin](http://code.macournoyer.com/thin) - Tiny, fast & funny HTTP server
* [Puma](https://github.com/puma/puma) - A modern, concurrent web server for Ruby
* [Goliath](https://github.com/postrank-labs/goliath) - A non-blocking Ruby web server framework

## Database Drivers

* [ruby-pg](https://bitbucket.org/ged/ruby-pg) - Ruby interface to PostgreSQL 8.3 and later
* [mysql2](https://github.com/brianmario/mysql2) - A modern, simple and very fast Mysql library for Ruby (binding to libmysql)
* [SQLite3](https://github.com/sparklemotion/sqlite3-ruby)
* [redis-rb](https://github.com/redis/redis-rb) - A Ruby client that tries to match Redis' API one-to-one, while still providing an idiomatic interface
* [Redic](https://github.com/amakawa/redic) - Lightweight Redis Client
* [DataObjects](https://github.com/datamapper/do) - An attempt to rewrite existing Ruby database drivers to conform to one, standard interface.
* [mongo-ruby-driver](https://github.com/mongodb/mongo-ruby-driver) - MongoDB Ruby driver
* [moped](http://mongoid.org/en/moped/index.html) - A MongoDB driver for Ruby

## Database Tools

* [Seed dump](https://github.com/rroblak/seed_dump) - Rails 4 task to dump (parts) of your database to db/seeds.rb.
* [Seed Fu](https://github.com/mbleigh/seed-fu) - Advanced seed data handling for Rails.

## ORM/ODM

* [ActiveRecord](https://github.com/rails/rails/tree/master/activerecord)
* [Sequel](https://github.com/jeremyevans/sequel) - Sequel is a simple, flexible, and powerful SQL database access toolkit for Ruby
* [Mongoid](http://mongoid.org/en/mongoid/index.html) - An ODM (Object-Document-Mapper) framework for MongoDB in Ruby
* [DataMapper](http://datamapper.org/) - ORM which works well with legacy databases. Last release (1.2.0) was on 13 October 2011.
* [MongoMapper](http://mongomapper.com/)
* [MongoModel](https://github.com/spohlenz/mongomodel) -  Ruby ODM for interfacing with MongoDB databases
* [ohm](http://ohm.keyvalue.org/) - Object-hash mapping library for Redis
* [Guacamole](https://github.com/triAGENS/guacamole) -  An ODM for ArangoDB

## ORM/ODM Extensions

* [Mongoid Tree](https://github.com/benedikt/mongoid-tree) - A tree structure for Mongoid documents using the materialized path pattern

## Decorators

* [Draper](https://github.com/drapergem/draper) - Draper adds an object-oriented layer of presentation logic to your Rails application

## HTTP

* [RESTClient](https://github.com/rest-client/rest-client) - Simple HTTP and REST client for Ruby, inspired by microframework syntax for specifying actions
* [httparty](https://github.com/jnunemaker/httparty)
* [Faraday](https://github.com/lostisland/faraday)
* [Sawyer](https://github.com/lostisland/sawyer) - Secret user agent of HTTP, built on top of Faraday
* [excon](https://github.com/excon/excon) - Usable, fast, simple Ruby HTTP 1.1. It works great as a general HTTP(s) client and is particularly well suited to usage in API clients.
* [Patron](https://github.com/toland/patron) - Patron is a Ruby HTTP client library based on libcurl.
* [Typhoeus](https://github.com/typhoeus/typhoeus) - Typhoeus wraps libcurl in order to make fast and reliable requests
* [Http Client](https://github.com/nahi/httpclient) - Gives something like the functionality of libwww-perl (LWP) in Ruby
* [http](https://github.com/tarcieri/http) - The HTTP Gem: a simple Ruby DSL for making HTTP requests.
* [Savon](https://github.com/savonrb/savon) - Savon is a SOAP client for the Ruby programming language.

## API Builder

* [Grape](http://intridea.github.io/grape) - An opinionated micro-framework for creating REST-like APIs in Ruby
* [Rails::API](https://github.com/rails-api/rails-api) - Rails for API only applications
* [ActiveModel::Serializers](https://github.com/rails-api/active_model_serializers) - JSON serialization of objects
* [Crêpe](https://github.com/crepe/crepe) - The thin API stack
* [jbuilder](https://github.com/rails/jbuilder) - Create JSON structures via a Builder-style DSL
* [Jsonite](https://github.com/barrelage/jsonite) - A tiny, HAL-compliant JSON presenter for your APIs
* [rabl](https://github.com/nesquena/rabl) - General ruby templating with json, bson, xml, plist and msgpack support
* [Pliny](https://github.com/interagent/pliny) - Opinionated template Sinatra app for writing excellent APIs in Ruby
* [Roar](https://github.com/apotonick/roar) - Resource-Oriented Architectures in Ruby

## CLI Builder

* [Rake](https://github.com/jimweirich/rake) - A make-like build utility for Ruby
* [Thor](http://whatisthor.com) - A toolkit for building powerful command-line interfaces
* [Commander](https://github.com/visionmedia/commander) - The complete solution for Ruby command-line executables
* [Slop](https://github.com/leejarvis/slop) - Simple Lightweight Option Parsing
* [Main](https://github.com/ahoward/main) - A class factory and DSL for generating command line programs real quick

## Authentication

* [Devise](https://github.com/plataformatec/devise) - A flexible authentication solution for Rails based on Warden
* [Authlogic](https://github.com/binarylogic/authlogic)
* [OmniAuth](https://github.com/intridea/omniauth) - A library that standardizes multi-provider authentication utilizing Rack middleware
* [Sorcery](https://github.com/NoamB/sorcery) - Magical Authentication for Rails 3 and 4
* [Clearance](https://github.com/thoughtbot/clearance) - Small and simple email & password based authenticaton for Rails

## OAuth

* [OAuth2](https://github.com/intridea/oauth2) - A Ruby wrapper for the OAuth 2.0 protocol
* [Doorkeeper](https://github.com/doorkeeper-gem/doorkeeper) - An OAuth2 provider for Rails

## Authorization

* [CanCanCan](https://github.com/CanCanCommunity/cancancan)
* [Pundit](https://github.com/elabs/pundit) - Minimal authorization through OO design and pure Ruby classes
* [Authority](https://github.com/nathanl/authority) ORM-neutral way to authorize actions in your Rails app.

## Logging

* [Log4r](https://github.com/colbygk/log4r) - Log4r is a comprehensive and flexible logging library for use in Ruby programs
* [Logging](https://github.com/TwP/logging) - A flexible logging library for use in Ruby programs based on the design of Java's log4j library.
* [Lograge](https://github.com/roidrage/lograge) - An attempt to tame Rails' default policy to log everything.
* [Cabin](https://github.com/jordansissel/ruby-cabin) - Structured+contextual logging experiments in Ruby.
* [Yell](https://github.com/rudionrails/yell) - Your Extensible Logging Library
* [MongoDB Logger](https://github.com/le0pard/mongodb_logger) - MongoDB logger for Rails
* [Fluentd](https://github.com/fluent/fluentd) - Fluentd data collector.
* [HttpLog](https://github.com/trusche/httplog) - Log outgoing HTTP requests.
* [Scrolls](https://github.com/asenchi/scrolls) - Simple logging

## Queue

* [Resque](https://github.com/resque/resque) — A Redis-backed Ruby library for creating background jobs
* [Sidekiq](http://sidekiq.org) — A full-featured background processing framework for Ruby. It aims to be simple to integrate with any modern Rails application and much higher performance than other existing solutions.
* [Sucker Punch](https://github.com/brandonhilkert/sucker_punch) — A single process background processing library using Celluloid. Aimed to be Sidekiq's little brother.
* [Delayed::Job](https://github.com/collectiveidea/delayed_job) — Database backed asynchronous priority queue
* [active_job](https://github.com/rails/activejob) - Declare job classes that can be run by a variety of queueing backends

## Scheduling

* [Whenever](https://github.com/javan/whenever) - A Ruby gem that provides a clear syntax for writing and deploying cron jobs
* [Clockwork](https://github.com/tomykaira/clockwork) - Clockwork is a cron replacement. It runs as a lightweight, long-running Ruby process which sits alongside your web processes (Mongrel/Thin) and your worker processes (DJ/Resque/Minion/Stalker) to schedule recurring work at particular times or dates.
* [rufus-scheduler](https://github.com/jmettraux/rufus-scheduler) - Job scheduler for Ruby (at, cron, in and every jobs)
* [resque-scheduler](https://github.com/resque/resque-scheduler) - A light-weight job scheduling system built on top of Resque

## Data Visualization

* [Ruby/GraphViz](https://github.com/glejeune/Ruby-Graphviz) - Ruby interface to the GraphViz graphing tool
* [RailRoady](https://github.com/preston/railroady) - Ruby on Rails 3/4 model and controller UML class diagram generator.
* [Rails Erd](https://github.com/voormedia/rails-erd) - Generate Entity-Relationship Diagrams for Rails applications.

## Template Engine

* [Tilt](https://github.com/rtomayko/tilt) - Generic interface to multiple Ruby template engines
* [Haml](https://github.com/haml/haml) - HTML Abstraction Markup Language
* [Slim](https://github.com/slim-template/slim) - A template language whose goal is reduce the syntax to the essential parts without becoming cryptic
* [Liquid](https://github.com/Shopify/liquid) - Safe, customer facing template language for flexible web apps
* [Mustache](https://github.com/mustache/mustache) - Logic-less Ruby templates
* [Curly](https://github.com/zendesk/curly) - A template language that completely separates structure and logic

## Assets

* [Sass](http://sass-lang.com) - Sass makes CSS fun again
* [Less](https://github.com/cowboyd/less.rb) - Leaner CSS, in your browser or Ruby.
* [Less Rails](https://github.com/metaskills/less-rails) - The dynamic stylesheet language for the Rails asset pipeline.
* Management:
  * [Sprockets](https://github.com/sstephenson/sprockets) - Rack-based asset packaging system
  * [Rails Assets](https://rails-assets.org) - Bundler to Bower proxy

## Markdown Processors

* [kramdown](https://github.com/gettalong/kramdown) — Kramdown is yet-another-markdown-parser but fast, pure Ruby, using a strict syntax definition and supporting several common extensions
* [Redcarpet](https://github.com/vmg/redcarpet) — A fast, safe and extensible Markdown to (X)HTML parser
* [Maruku](https://github.com/bhollis/maruku) — A pure-Ruby Markdown-superset interpreter

## Search

* [Thinking Sphinx](https://github.com/pat/thinking-sphinx) - A library for connecting ActiveRecord to the Sphinx full-text search tool
* [elasticsearch-ruby](https://github.com/elasticsearch/elasticsearch-ruby)
* [Sunspot](https://github.com/sunspot/sunspot) - A Ruby library for expressive, powerful interaction with the Solr search engine
* [Searchkick](https://github.com/ankane/searchkick) - Searchkick learns what your users are looking for. As more people search, it gets smarter and the results get better. It’s friendly for developers - and magical for your users.
* [pg_search](https://github.com/Casecommons/pg_search) - Builds ActiveRecord named scopes that take advantage of PostgreSQL's full text search
* [has_scope](https://github.com/plataformatec/has_scope) - Has scope allows you to easily create controller filters based on your resources named scopes.
* [Searchlogic](https://github.com/binarylogic/searchlogic) - Object based searching, common named scopes, and other useful named scope tools for ActiveRecord
* [attr_searchable](https://github.com/mrkamel/attr_searchable) - Search engine like fulltext query support for ActiveRecord
* [ransack](https://github.com/activerecord-hackery/ransack/) - Object-based searching.
* [Rroonga](https://github.com/ranguba/rroonga) - The Ruby bindings of Groonga

## Internationalization

* [i18n](https://github.com/svenfuchs/i18n) - Ruby Internationalization and localization solution
* [i18n-tasks](https://github.com/glebm/i18n-tasks) - Manage missing and unused translations with the awesome power of static analysis
* [twitter-cldr-rb](https://github.com/twitter/twitter-cldr-rb) - Ruby implementation of the ICU (International Components for Unicode) that uses the Common Locale Data Repository to format dates, plurals, and more
* [r18n](https://github.com/ai/r18n) - Advanced i18n library for Rails, Sinatra, desktop apps, models, works well with complex languages like Russian.

## Country Data

* [Carmen](https://github.com/jim/carmen) - A repository of geographic regions
* [Countries](https://github.com/hexorx/countries) - All sorts of useful information about every country packaged as pretty little country objects
* [i18n_data](https://github.com/grosser/i18n_data) - country/language names and 2-letter-code pairs, in 85 languages, for country/language i18n
* [normalize_country](https://github.com/sshaw/normalize_country) - Convert country names and codes to a standard, includes a conversion program for XMLs, CSVs and DBs

## Geolocation

* [Geocoder](https://github.com/alexreisner/geocoder) - A complete geocoding solution for Ruby. With Rails it adds geocoding (by street or IP address), reverse geocoding (find street address based on given coordinates), and distance queries
* [Geokit](https://github.com/geokit/geokit) - Geokit gem provides geocoding and distance/heading calculations

## Money

* [Money](https://github.com/RubyMoney/money) - A Ruby Library for dealing with money and currency conversion
* [eu_central_bank](https://github.com/RubyMoney/eu_central_bank) - A gem that calculates the exchange rate using published rates from European Central Bank

## Caching

* [Action caching for Action Pack](https://github.com/rails/actionpack-action_caching) - Action caching for Action Pack
* [Dalli](https://github.com/mperham/dalli) - A high performance pure Ruby client for accessing memcached servers
* [Record Cache](https://github.com/orslumen/record-cache) - Cache Active Model Records in Rails 3

## File Upload

* [CarrierWave](https://github.com/carrierwaveuploader/carrierwave) - Classier solution for file uploads for Rails, Sinatra and other Ruby web frameworks
* [PaperClip](https://github.com/thoughtbot/paperclip) - Easy file attachment management for ActiveRecord
* [DragonFly](https://github.com/markevans/dragonfly) - A Ruby gem for on-the-fly processing - suitable for image uploading in Rails, Sinatra and much more!
* [rack-secure-upload](https://github.com/dtaniwaki/rack-secure-upload) - Upload files securely

## Email

* [Mail](https://github.com/mikel/mail) - A Really Ruby Mail Library
* [Pony](https://github.com/benprew/pony)- The express way to send mail from Ruby
* [Mailman](https://github.com/titanous/mailman) - An incoming mail processing microframework in Ruby
* [Incoming](https://github.com/honeybadger-io/incoming) - Incoming! helps you receive email in your Rack apps
* [MailCatcher](http://mailcatcher.me) - Catches mail and serves it through a dream
* [LetterOpener](https://github.com/ryanb/letter_opener) - Preview mail in the browser instead of sending.

## Form Builder

* [Simple Form](https://github.com/plataformatec/simple_form) - Rails forms made easy
* [Formtastic](https://github.com/justinfrench/formtastic) - A Rails form builder plugin with semantically rich and accessible markup
* [Rails Bootstrap Forms](https://github.com/bootstrap-ruby/rails-bootstrap-forms) - Rails form builder that makes it super easy to create beautiful-looking forms with Twitter Bootstrap 3+
* [Abracadabra](https://github.com/TrevorHinesley/abracadabra) - The gem that swaps out text with a fully-compliant Rails form in one click

## Pagination

* [Kaminari](https://github.com/amatsuda/kaminari) - A Scope & Engine based, clean, powerful, customizable and sophisticated paginator for modern web app frameworks and ORMs
* [will_paginate](https://github.com/mislav/will_paginate) - A pagination library that integrates with Ruby on Rails, Sinatra, Merb, DataMapper and Sequel

## Imagery

* [MiniMagick](https://github.com/minimagick/minimagick) - A ruby wrapper for ImageMagick or GraphicsMagick command line
* [RMagick](https://github.com/rmagick/rmagick) - RMagick is an interface between Ruby and ImageMagick
* [PSD.rb](https://github.com/layervault/psd.rb) - Parse Photoshop files in Ruby with ease

## Video

* [Streamio FFMPEG](https://github.com/streamio/streamio-ffmpeg) - Simple yet powerful wrapper around the ffmpeg command for reading metadata and transcoding movies

## WebSocket

* [Faye](http://faye.jcoglan.com/ruby.html) - A set of tools for simple publish-subscribe messaging between web clients. It ships with easy-to-use message routing servers for Node.js and Rack applications, and clients that can be used on the server and in the browser.
* [Websocket-Rails](https://github.com/websocket-rails/websocket-rails) - Creates a built in WebSocket server inside a Rails application with ease.  Also support streaming HTTP
* [Sync](https://github.com/chrismccord/sync) - Real-time Rails Partials
* [Firehose](https://github.com/polleverywhere/firehose) - Build realtime Ruby web applications
* [Rails Realtime](https://github.com/liamks/rails-realtime) - Adding Real-Time To Your RESTful Rails App.

## HTML/XML Parsing

* [Nokogiri](http://nokogiri.org) - An HTML, XML, SAX, and Reader parser with XPath and CSS selector support
* [HappyMapper](https://github.com/dam5s/happymapper) - Object to XML mapping library, using Nokogiri
* [ROXML](https://github.com/Empact/roxml) - Custom mapping and bidirectional marshalling between Ruby and XML using annotation-style class methods, via Nokogiri or LibXML.

## Ebook

* [Bookshop](https://github.com/blueheadpublishing/bookshop) - Bookshop is a an open-source agile book development and publishing framework for authors, editors.
* [Git Scribe](https://github.com/schacon/git-scribe) - Basically the best way to write an ebook.
* [Review](https://github.com/kmuto/review) - Re:VIEW is flexible document format/conversion system
* [Gepub](https://github.com/skoji/gepub) - A generic EPUB library for Ruby : supports EPUB 3
* [Eeepub](https://github.com/jugyo/eeepub) - EeePub is a Ruby ePub generator.
* [Mobi](https://github.com/jkongie/mobi) - A Ruby way to read MOBI format metadata

## PDF

* [Prawn](https://github.com/prawnpdf/prawn) - Fast, Nimble PDF Writer for Ruby
* [Pdfkit](https://github.com/pdfkit/pdfkit) - HTML+CSS to PDF using wkhtmltopdf
* [Wicked Pdf](https://github.com/mileszs/wicked_pdf) - PDF generator (from HTML) plugin for Ruby on Rails
* [Kitabu](https://github.com/fnando/kitabu) - A framework for creating e-books from Markdown/Textile text markup using Ruby.
* [Gimli](https://github.com/walle/gimli) - Utility for converting markup files to pdf files.
* [Shrimp](https://github.com/adjust/shrimp) - A phantomjs based pdf renderer
* [RGhost](https://github.com/shairontoledo/rghost) - RGhost is a document creation and conversion API.
* [Wisepdf](https://github.com/igor-alexandrov/wisepdf) - Wkhtmltopdf wrapper done right

## Web Crawling

* [MetaInspector](https://github.com/jaimeiniesta/metainspector) - Ruby gem for web scraping purposes. It scrapes a given URL, and returns you its title, meta description, meta keywords, an array with all the links, all the images in it, etc.
* [LinkThumbnailer](https://github.com/gottfrois/link_thumbnailer) - Ruby gem that generates thumbnail images and videos from a given URL. Much like popular social website with link preview.
* [anemone](https://github.com/chriskite/anemone) - Ruby library and CLI for crawling websites.
* [Wombat](https://github.com/felipecsl/wombat) - Web scraper with an elegant DSL that parses structured data from web pages
* [Mechanize](https://github.com/sparklemotion/mechanize) - Mechanize is a ruby library that makes automated web interaction easy.

## Processes and Threads

* [Parallel](https://github.com/grosser/parallel) - Run any code in parallel Processes (> use all CPUs) or Threads (> speedup blocking operations).
Best suited for map-reduce or e.g. parallel downloads/uploads
* [posix-spawn](https://github.com/rtomayko/posix-spawn) - Fast Process::spawn for Rubys >= 1.8.7 based on the posix_spawn() system interfaces
* [childprocess](https://github.com/jarib/childprocess) - Cross-platform ruby library for managing child processes.
* [forkoff](https://github.com/ahoward/forkoff) - brain-dead simple parallel processing for ruby

## Process Monitoring

* [Bluepill](https://github.com/bluepill-rb/bluepill) - Simple process monitoring tool
* [God](https://github.com/mojombo/god) - An easy to configure, easy to extend monitoring framework written in Ruby

## Concurrency

* [EventMachine](https://github.com/eventmachine/eventmachine) - An event-driven I/O and lightweight concurrency library for Ruby
* [Celluloid](http://celluloid.io) - Actor-based concurrent object framework for Ruby
* [Concurrent Ruby](https://github.com/ruby-concurrency/concurrent-ruby) -
  Modern concurrency tools including agents, futures, promises, thread pools, supervisors, and more. Inspired by Erlang, Clojure, Scala, Go, Java, JavaScript, and classic concurrency patterns.

## Configuration

* [Configatron](https://github.com/markbates/configatron) -  Simple and feature rich configuration system for Ruby apps
* [Configus](https://github.com/kaize/configus) - Helps you easily manage environment specific settings
* [dotenv](https://github.com/bkeepers/dotenv) - Loads environment variables from `.env`
* [Econfig](https://github.com/elabs/econfig) - Flexible configuration for Rails applications
* [Figaro](https://github.com/laserlemon/figaro) - Simple, Heroku-friendly Rails app configuration using `ENV` and a single YAML file
* [Global](https://github.com/railsware/global) - Provides accessor methods for your configuration data
* [RailsConfig](https://github.com/railsconfig/rails_config) - Multi-environment yaml settings for Rails3

## Core Extensions

* [ActiveSupport](https://github.com/rails/rails/tree/master/activesupport) - A collection of utility classes and standard library extensions.
* [Ruby Facets](https://github.com/rubyworks/facets) - The premiere collection of general purpose method extensions and standard additions for Ruby.
* Attributes
  * [ActiveAttr](https://github.com/cgriego/active_attr) - What ActiveModel left out
  * [Virtus](https://github.com/solnic/virtus) - Attributes on Steroids for Plain Old Ruby Objects
  * [FastAttributes](https://github.com/applift/fast_attributes) - FastAttributes adds attributes with their types to the class
* Hash
  * [Hashie](https://github.com/intridea/hashie) - A collection of tools that extend Hashes and make them more useful

## Error Handling

* [Exception Notification](https://github.com/smartinez87/exception_notification) - A set of notifiers for sending notifications when errors occur in a Rack/Rails application
* [Errbit](http://errbit.github.io/errbit) - The open source, self-hosted error catcher
* [Airbrake](https://github.com/airbrake/airbrake) - The official Airbrake library for Ruby on Rails (and other Rack based frameworks)
* [Better Errors](https://github.com/charliesome/better_errors) - Better error page for Rack apps
* [Raven Ruby](https://github.com/getsentry/raven-ruby) - Raven is a Ruby client for Sentry.
* [Nesty](https://github.com/skorks/nesty) - Nested exceptions for Ruby

## Code Analysis and Metrics

* [SimpleCov](https://github.com/colszowka/simplecov) - Code coverage for Ruby 1.9+ with a powerful configuration library and automatic merging of coverage across test suites.
* [Rubocop](https://github.com/bbatsov/rubocop) - A static code analyzer, based on the community Ruby style guide.
* [rails_best_practices](https://github.com/railsbp/rails_best_practices) - A code metric tool for rails projects
* [Flay](https://github.com/seattlerb/flay) - Flay analyzes code for structural similarities. Differences in literal values, variable, class, method names, whitespace, programming style, braces vs do/end, etc are all ignored. Making this totally rad.
* [Flog](https://github.com/seattlerb/flog) - Flog reports the most tortured code in an easy to read pain report. The higher the score, the more pain the code is in.
* [Brakeman](https://github.com/presidentbeef/brakeman) - A static analysis security vulnerability scanner for Ruby on Rails applications.
* [fukuzatsu](https://gitlab.com/coraline/fukuzatsu/tree/master) - Complexity analysis tool with a rich web front-end.
* [Reek](https://github.com/troessner/reek) - Code smell detector for Ruby

## Dashboards

* [Dashing-Rails](https://github.com/gottfrois/dashing-rails) - The exceptionally handsome dashboard framework for Rails.

## Date and Time Processing

* [business_time](https://github.com/bokmann/business_time) - Support for doing time math in business hours and days
* [Chronic](https://github.com/mojombo/chronic) - A natural language date/time parser written in pure Ruby
* [time-lord](https://github.com/krainboltgreene/time-lord) - Adds extra functionality to the time class
* [time_diff](https://github.com/abhidsm/time_diff) - Calculates the difference between two time
* [validates_timeliness](https://github.com/adzap/validates_timeliness) - Date and time validation plugin for ActiveModel and Rails

## Debugging Tools

* [debugger](https://github.com/cldwalker/debugger) - A port of ruby-debug that works on 1.9.2 and 1.9.3.
* [Byebug](https://github.com/deivid-rodriguez/byebug) - A simple to use, feature rich debugger for Ruby 2.

## Profiler

* [ruby-prof](https://github.com/ruby-prof/ruby-prof) - A code profiler for MRI rubies
* [rack-mini-profiler](https://github.com/MiniProfiler/rack-mini-profiler) - Profiler for your development and production Ruby rack apps
* [perftools.rb](https://github.com/tmm1/perftools.rb) - gperftools (formerly known as google-perftools) for Ruby code
* [Peek](https://github.com/peek/peek) - Visual status bar showing Rails performance
* [bullet](https://github.com/flyerhzm/bullet) - Help to kill N+1 queries and unused eager loading

## Third-party APIs

* [Octokit](http://octokit.github.io/octokit.rb) - Ruby toolkit for the GitHub API
* [gitlab](https://github.com/NARKOZ/gitlab) - Ruby wrapper and CLI for the GitLab API
* [fb_graph](https://github.com/nov/fb_graph) - A full-stack Facebook Graph API wrapper
* [twitter](https://github.com/sferik/twitter) - A Ruby interface to the Twitter API
* [t](https://github.com/sferik/t) - A command-line power tool for Twitter
* [tweetstream](https://github.com/tweetstream/tweetstream) - A simple library for consuming Twitter's Streaming API
* [ruby-gmail](https://github.com/dcparker/ruby-gmail) - A Rubyesque interface to Gmail
* [gmail](https://github.com/nu7hatch/gmail) - A Rubyesque interface to Gmail, with all the tools you'll need.
* [instagram-ruby-gem](https://github.com/Instagram/instagram-ruby-gem) - The official gem for the Instagram REST and Search APIs
* [soundcloud-ruby](https://github.com/soundcloud/soundcloud-ruby) - Official SoundCloud API Wrapper for Ruby
* [linkedin](https://github.com/hexgnu/linkedin) - Provides an easy-to-use wrapper for LinkedIn's REST APIs
* [Yt](https://github.com/Fullscreen/yt) - An object-oriented Ruby client for YouTube API V3
* [youtube_it](https://github.com/kylejginavan/youtube_it) - An object-oriented Ruby wrapper for the YouTube GData API
* [ruby-trello](https://github.com/jeremytregunna/ruby-trello) - Implementation of the Trello API for Ruby
* [hipchat-rb](https://github.com/hipchat/hipchat-rb) - HipChat HTTP API Wrapper in Ruby with Capistrano hooks
* [flickr](https://github.com/RaVbaker/flickr) - A Ruby interface to the Flickr API
* [wikipedia](https://github.com/kenpratt/wikipedia-client) - Ruby client for the Wikipedia API.
* [Dropbox](https://github.com/futuresimple/dropbox-api) - Dropbox API Ruby Client.
* [itunes_store_transporter](https://github.com/sshaw/itunes_store_transporter) - Ruby wrapper around Apple's iTMSTransporter program
* [Pusher](https://github.com/pusher/pusher-gem) - Ruby server library for the Pusher API.

## CMS
* [Alchemy CMS](http://alchemy-cms.com) - A powerful, userfriendly and flexible Open Source Rails CMS
* [Refinery CMS](http://refinerycms.com) - An open source Ruby on Rails content management system for Rails 3 and 4
* [Radiant](http://radiantcms.org) - A no-fluff, open source content management system designed for small teams
* [LocomotiveCMS](http://www.locomotivecms.com) - A simple but powerful CMS based on Liquid templates and Mongodb database
* [Publify](https://github.com/publify/publify) - A self hosted Web publishing platform on Rails

## Admin Interface

* [ActiveAdmin](http://activeadmin.info) - a Ruby on Rails framework for creating elegant backends for website administration
* [RailsAdmin](https://github.com/sferik/rails_admin) - A Rails engine that provides an easy-to-use interface for managing your data
* [bhf](http://antpaw.github.io/bhf/) - A simple to use Rails-Engine-Gem that offers an admin interface for trusted user

## Static Site Generation

* [Jekyll](http://jekyllrb.com) - Transform your plain text into static websites and blogs
* [Middleman](http://middlemanapp.com) - A static site generator using all the shortcuts and tools in modern web development
* [Nanoc](http://nanoc.ws/) - A static site generator, fit for building anything from a small personal blog to a large corporate web site
* [High Voltage](https://github.com/thoughtbot/high_voltage) - Easily include static pages in your Rails app

## SEO

* [FriendlyId](https://github.com/norman/friendly_id) - The "Swiss Army bulldozer" of slugging and permalink plugins for Active Record
* [MetaTags](https://github.com/kpumuk/meta-tags) - A gem to make your Rails application SEO-friendly
* [SitemapGenerator](https://github.com/kjvarga/sitemap_generator) - A framework-agnostic XML Sitemap generator written in Ruby

## Social Networking

* [diaspora*](https://github.com/diaspora/diaspora) - A privacy aware, distributed, open source social network
* [Discourse](https://github.com/discourse/discourse) - A platform for community discussion. Free, open, simple
* [Forem](https://github.com/radar/forem) - Rails 3 and Rails 4 forum engine
* [Campo](https://github.com/chloerei/campo) - Campo is a lightweight forum application, base on Ruby on Rails.

## E-Commerce and Payments

* [Active Merchant](https://github.com/Shopify/active_merchant) - A simple payment abstraction library extracted from Shopify
* [Spree](http://spreecommerce.com)
* [ROR Ecommerce](http://www.ror-e.com)
* [stripe-ruby](https://github.com/stripe/stripe-ruby) - Stripe Ruby bindings
* [Paypal Merchant SDK](https://github.com/paypal/merchant-sdk-ruby) - Official Paypal Merchant SDK for Ruby
* [Shoppe](http://tryshoppe.com) - A Rails-based e-commerce platform which allows you to easily introduce a catalogue-based store into your Rails 4 applications

## Analytics

* [Gabba](https://github.com/hybridgroup/gabba) - Simple way to send server-side notifications to Google Analytics
* [Ahoy](https://github.com/ankane/ahoy) - A solid foundation to track visits and events in Ruby, JavaScript, and native apps
* [Staccato](https://github.com/tpitale/staccato) - Track analytics into the official Google Analytics Collection API
* [Legato](https://github.com/tpitale/legato) - Model analytics reports and queries against the official Google Analytics Reporting API

## RSS

* [Feedjira](https://github.com/feedjira/feedjira) - A feed fetching and parsing library.
* [Simple rss](https://github.com/cardmagic/simple-rss) - A simple, flexible, extensible, and liberal RSS and Atom reader.
* [Feed normalizer](https://github.com/aasmith/feed-normalizer) - Extensible Ruby wrapper for Atom and RSS parsers.
* [Ratom](https://github.com/seangeo/ratom) - A fast, libxml based, Ruby Atom library.

## DevOps Tools

* [Capistrano](http://capistranorb.com) - A remote server automation and deployment tool written in Ruby
* [Backup](https://github.com/meskyanichi/backup) - Provides an elegant DSL in Ruby for performing backups on UNIX-like systems
* [Puppet](https://github.com/puppetlabs/puppet) - An automated administrative engine for your Linux, Unix, and Windows systems, performs administrative tasks (such as adding users, installing packages, and updating server configurations) based on a centralized specification
* [Vagrant](http://www.vagrantup.com) - Create and configure lightweight, reproducible, and portable development environments
* [Chef](https://github.com/opscode/chef) - A systems integration framework, built to bring the benefits of configuration management to your entire infrastructure
* [Mina](https://github.com/mina-deploy/mina) - Really fast deployer and server automation tool.
* [Lita](https://www.lita.io/) - ChatOps for Ruby: A pluggable chat bot framework usable with any chat service.
* [Logstash](https://github.com/elasticsearch/logstash) - Logs/event transport, processing, management, search
* [Rubber](https://github.com/rubber/rubber) - The rubber plugin enables relatively complex multi-instance deployments of RubyOnRails applications to Amazon's Elastic Compute Cloud (EC2).

## Git Tools

* [hub](https://github.com/github/hub) - a command line tool that wraps Git in order to extend it with extra features and commands that make working with GitHub easier
* [Rugged](https://github.com/libgit2/rugged) - Ruby bindings to libgit2
* [git-auto-bisect](https://github.com/grosser/git-autobisect) - Find the commit that broke master
* [git-whence](https://github.com/grosser/git-whence) - Find which merge a commit came from
* [git-spelunk](https://github.com/osheroff/git-spelunk) - Dig through git blame history
* [git-up](https://github.com/aanand/git-up) - Fetch and rebase all locally-tracked remote branches

## GUI

* [Shoes](http://shoesrb.com)
* [QtRuby](http://quickgit.kde.org/?p=qtruby.git) - [Qt4 binding for ruby](https://github.com/ryanmelt/qtbindings)
* [RubyGnome2](http://ruby-gnome2.sourceforge.jp/)

## Game Development

* [Gosu](http://www.libgosu.org) - A 2D game development library for the Ruby and C++ programming languages

## Mobile Development

* [RubyMotion](http://www.rubymotion.com) - A revolutionary toolchain that lets you quickly develop and test native iOS and OS X applications for iPhone, iPad and Mac
* [Ruboto](http://ruboto.org) - A platform for developing full stand-alone apps for Android using the Ruby language and libraries

## Robotics

* [Artoo](http://artoo.io) - Next generation robotics framework with support for different platforms: Arduino, Leap Motion, Pebble, Raspberry Pi, etc.

## Natural Language Processing

* [Treat](https://github.com/louismullie/treat) - Treat is a toolkit for natural language processing and computational linguistics in Ruby

## Machine Learning

* [PredictionIO Ruby SDK](https://github.com/PredictionIO/PredictionIO-Ruby-SDK) - The PredictionIO Ruby SDK provides a convenient API to quickly record your users' behavior and retrieve personalized predictions for them
* [Ruby Datumbox Wrapper](https://github.com/marloncarvalho/ruby-datumbox) - It's a simple Ruby Datumbox Wrapper. At the moment the API currently allows you to build applications that make use of machine learning algorithms.

## Abstraction

* [Interactor](https://github.com/collectiveidea/interactor) - Interactor provides a common interface for performing complex interactions in a single request
* [Light Service](https://github.com/adomokos/light-service) - Series of Actions with an emphasis on simplicity.
* [Mutations](https://github.com/cypriss/mutations) - Compose your business logic into commands that sanitize and validate input
* [Cells](https://github.com/apotonick/cells) - View Components for Rails
* [Reform](https://github.com/apotonick/reform) - Form objects decoupled from models.

## Misc

* [Betty](https://github.com/pickhardt/betty) - Friendly English-like interface for your command line. Don't remember a command? Ask Betty
* [Termit](https://github.com/pawurb/termit) - Google Translate with speech synthesis in your terminal
* [Foreman](https://github.com/ddollar/foreman) - Manage Procfile-based applications
* [Pry](https://github.com/pry/pry) - A powerful alternative to the standard IRB shell for Ruby
* [Pry Debugger](https://github.com/nixme/pry-debugger) - Pry navigation commands via debugger (formerly ruby-debug)
* [Guard](https://github.com/guard/guard) - A command line tool to easily handle events on file system modifications
* [play ►](https://github.com/play/play) - Your company's dj
* [Treetop](https://github.com/cjheath/treetop) - PEG (Parsing Expression Grammar) parser
* [Yomu](https://github.com/Erol/yomu) - Read text and metadata from files and documents (.doc, .docx, .pages, .odt, .rtf, .pdf)
* [AASM](https://github.com/aasm/aasm) - A library for adding finite state machines to Ruby classes
* [Gollum](https://github.com/gollum/gollum) - A simple, Git-powered wiki with a sweet API and local frontend.
* [JsonCompare](https://github.com/a2design-company/json-compare) - Returns the difference between two JSON files
* [pygments.rb](https://github.com/tmm1/pygments.rb) - A Ruby wrapper for the Python pygments syntax highlighter

# Services and Apps

* [GitHub](https://github.com) - Powerful collaboration, code review, and code management for open source and private projects.
* [GitLab](https://about.gitlab.com) -  Open source software to collaborate on code.
* [Gitlab CI](https://about.gitlab.com/gitlab-ci/) - Integrate with your GitLab to run tests for your projects.
* [Travis CI.org](https://travis-ci.org) - A distributed build system for the open source community.
* [Travis CI.com](https://travis-ci.com) - Take care of running your tests and deploying your private apps.
* [PullReview](https://pullreview.com) - Automated code review for Ruby and Rails - from style to security.
* [HoundCI](https://houndci.com) - Review your Ruby code for style guide violations.
* [Hakiri](https://hakiri.io) - Ship Secure Ruby Apps.
* [CodeClimate](https://codeclimate.com) - Quality & security analysis for Ruby on Rails and Javascript.
* [Gemnasium](https://gemnasium.com) - Monitor your project dependencies and alert you about updates and security vulnerabilities.
* [AppSignal](https://appsignal.com) - Better monitoring for your Rails applications.
* [Honeybadger](https://www.honeybadger.io/) - Exception, uptime, and performance monitoring for Ruby.
* [Inch CI](http://inch-ci.org/) - Documentation badges for Ruby projects.

# Resources

* [GitHub Explore](https://github.com/explore)
* [Ruby5](http://ruby5.envylabs.com) - The latest news in the Ruby and Rails community
* [The Ruby Toolbox](https://www.ruby-toolbox.com) - A comprehensive catalog of Ruby and Rails plug-ins, gems, tools and resources for Ruby developers with popularity ratings based on GitHub watchers and Gem downloads
* [RubyFlow](http://www.rubyflow.com) - Ruby Programming Community Link Blog
* [RubyDaily](http://rubydaily.org) - Community driven news
* [Ruby Weekly](http://rubyweekly.com) - A free, once–weekly e-mail round-up of Ruby news and articles
* [GemBundle](http://www.gembundle.com) - A place to discover new Ruby Gems

# Other Awesome Lists

Other amazingly awesome lists can be found in the [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) list.
