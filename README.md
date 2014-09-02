# <a href="http://marcanguera.net/awesome-ruby"><img src="https://raw.githubusercontent.com/markets/awesome-ruby/gh-pages/images/logo.png" align="absmiddle"/></a> Awesome Ruby

A collection of awesome Ruby libraries, tools, frameworks and software. The essential Ruby to build modern Apps and Web Apps.

Inspired by the `awesome-*` trend on GitHub.

The goal is to build a categorized community-driven collection of very well-known resources.

Sharing, suggestions and contributions are always welcome! Please take a look at the [contribution guidelines and quality standard](https://github.com/markets/awesome-ruby/blob/master/CONTRIBUTING.md) first.

Thanks to all [contributors](https://github.com/markets/awesome-ruby/graphs/contributors), you're awesome and wouldn't be possible without you!

* [Awesome Ruby](#awesome-ruby)
  * [Abstraction](#abstraction)
  * [Admin Interface](#admin-interface)
  * [Analytics](#analytics)
  * [API Builder](#api-builder)
  * [Assets](#assets)
  * [Authentication and OAuth](#authentication-and-oauth)
  * [Authorization](#authorization)
  * [Caching](#caching)
  * [CLI Builder](#cli-builder)
  * [CMS](#cms)
  * [Code Analysis and Metrics](#code-analysis-and-metrics)
  * [Coding Style Guides](#coding-style-guides)
  * [Concurrency](#concurrency)
  * [Configuration](#configuration)
  * [Core Extensions](#core-extensions)
  * [Country Data](#country-data)
  * [Dashboards](#dashboards)
  * [Data Visualization](#data-visualization)
  * [Database Drivers](#database-drivers)
  * [Database Tools](#database-tools)
  * [Date and Time Processing](#date-and-time-processing)
  * [Debugging Tools](#debugging-tools)
  * [Decorators](#decorators)
  * [DevOps Tools](#devops-tools)
  * [Documentation](#documentation)
  * [E-Commerce and Payments](#e-commerce-and-payments)
  * [Ebook](#ebook)
  * [Email](#email)
  * [Environment Management](#environment-management)
  * [Error Handling](#error-handling)
  * [File Upload](#file-upload)
  * [Form Builder](#form-builder)
  * [Game Development](#game-development)
  * [Geolocation](#geolocation)
  * [Git Tools](#git-tools)
  * [GUI](#gui)
  * [HTML/XML Parsing](#htmlxml-parsing)
  * [HTTP](#http)
  * [Imagery](#imagery)
  * [Internationalization](#internationalization)
  * [Logging](#logging)
  * [Machine Learning](#machine-learning)
  * [Markdown Processors](#markdown-processors)
  * [Misc](#misc)
  * [Mobile Development](#mobile-development)
  * [Money](#money)
  * [Natural Language Processing](#natural-language-processing)
  * [ORM/ODM](#ormodm)
  * [ORM/ODM Extensions](#ormodm-extensions)
  * [Package Management](#package-management)
  * [Pagination](#pagination)
  * [PDF](#pdf)
  * [Process Monitoring](#process-monitoring)
  * [Processes and Threads](#processes-and-threads)
  * [Profiler](#profiler)
  * [Queue](#queue)
  * [Robotics](#robotics)
  * [RSS](#rss)
  * [Scheduling](#scheduling)
  * [Search](#search)
  * [SEO](#seo)
  * [Social Networking](#social-networking)
  * [State Machines](#state-machines)
  * [Static Site Generation](#static-site-generation)
  * [Template Engine](#template-engine)
  * [Testing](#testing)
  * [Third-party APIs](#third-party-apis)
  * [Video](#video)
  * [Web Crawling](#web-crawling)
  * [Web Frameworks](#web-frameworks)
  * [Web Servers](#web-servers)
  * [WebSocket](#websocket)
* [Services and Apps](#services-and-apps)
* [Resources](#resources)
* [Other Awesome Lists](#other-awesome-lists)

## Abstraction

* [ActiveInteraction](https://github.com/orgsync/active_interaction) - Manage application specific business logic.
* [Cells](https://github.com/apotonick/cells) - View Components for Rails
* [Interactor](https://github.com/collectiveidea/interactor) - Interactor provides a common interface for performing complex interactions in a single request
* [Light Service](https://github.com/adomokos/light-service) - Series of Actions with an emphasis on simplicity.
* [Mutations](https://github.com/cypriss/mutations) - Compose your business logic into commands that sanitize and validate input
* [Reform](https://github.com/apotonick/reform) - Form objects decoupled from models.

## Admin Interface

* [ActiveAdmin](http://activeadmin.info) - a Ruby on Rails framework for creating elegant backends for website administration
* [bhf](http://antpaw.github.io/bhf/) - A simple to use Rails-Engine-Gem that offers an admin interface for trusted user
* [RailsAdmin](https://github.com/sferik/rails_admin) - A Rails engine that provides an easy-to-use interface for managing your data

## Analytics

* [Ahoy](https://github.com/ankane/ahoy) - A solid foundation to track visits and events in Ruby, JavaScript, and native apps
* [Gabba](https://github.com/hybridgroup/gabba) - Simple way to send server-side notifications to Google Analytics
* [Legato](https://github.com/tpitale/legato) - Model analytics reports and queries against the official Google Analytics Reporting API
* [Staccato](https://github.com/tpitale/staccato) - Track analytics into the official Google Analytics Collection API

## API Builder

* [ActiveModel::Serializers](https://github.com/rails-api/active_model_serializers) - JSON serialization of objects
* [Crêpe](https://github.com/crepe/crepe) - The thin API stack
* [Grape](http://intridea.github.io/grape) - An opinionated micro-framework for creating REST-like APIs in Ruby
* [jbuilder](https://github.com/rails/jbuilder) - Create JSON structures via a Builder-style DSL
* [JSONAPI::Resources](https://github.com/cerebris/jsonapi-resources) - JSONAPI::Resources, or "JR", provides a framework for developing a server that complies with the JSON API specification.
* [Jsonite](https://github.com/barrelage/jsonite) - A tiny, HAL-compliant JSON presenter for your APIs
* [Pliny](https://github.com/interagent/pliny) - Opinionated template Sinatra app for writing excellent APIs in Ruby
* [rabl](https://github.com/nesquena/rabl) - General ruby templating with json, bson, xml, plist and msgpack support
* [Rails::API](https://github.com/rails-api/rails-api) - Rails for API only applications
* [Roar](https://github.com/apotonick/roar) - Resource-Oriented Architectures in Ruby

## Assets

* [Less Rails](https://github.com/metaskills/less-rails) - The dynamic stylesheet language for the Rails asset pipeline.
* [Less](https://github.com/cowboyd/less.rb) - Leaner CSS, in your browser or Ruby.
* [Sass](http://sass-lang.com) - Sass makes CSS fun again
* Management:
  * [Rails Assets](https://rails-assets.org) - Bundler to Bower proxy
  * [Sprockets](https://github.com/sstephenson/sprockets) - Rack-based asset packaging system

## Authentication and OAuth

* [Authlogic](https://github.com/binarylogic/authlogic)
* [Clearance](https://github.com/thoughtbot/clearance) - Small and simple email & password based authenticaton for Rails
* [Devise](https://github.com/plataformatec/devise) - A flexible authentication solution for Rails based on Warden
* [OmniAuth](https://github.com/intridea/omniauth) - A library that standardizes multi-provider authentication utilizing Rack middleware
* [Sorcery](https://github.com/NoamB/sorcery) - Magical Authentication for Rails 3 and 4
* OAuth:
  * [Doorkeeper](https://github.com/doorkeeper-gem/doorkeeper) - An OAuth2 provider for Rails
  * [OAuth2](https://github.com/intridea/oauth2) - A Ruby wrapper for the OAuth 2.0 protocol

## Authorization

* [Authority](https://github.com/nathanl/authority) ORM-neutral way to authorize actions in your Rails app.
* [CanCanCan](https://github.com/CanCanCommunity/cancancan)
* [Pundit](https://github.com/elabs/pundit) - Minimal authorization through OO design and pure Ruby classes

## Caching

* [Action caching for Action Pack](https://github.com/rails/actionpack-action_caching) - Action caching for Action Pack
* [Dalli](https://github.com/mperham/dalli) - A high performance pure Ruby client for accessing memcached servers
* [Record Cache](https://github.com/orslumen/record-cache) - Cache Active Model Records in Rails 3

## CLI Builder

* [Commander](https://github.com/visionmedia/commander) - The complete solution for Ruby command-line executables
* [GLI](https://github.com/davetron5000/gli) - Git-Like Interface Command Line Parser
* [Main](https://github.com/ahoward/main) - A class factory and DSL for generating command line programs real quick
* [Rake](https://github.com/jimweirich/rake) - A make-like build utility for Ruby
* [Slop](https://github.com/leejarvis/slop) - Simple Lightweight Option Parsing
* [Thor](http://whatisthor.com) - A toolkit for building powerful command-line interfaces

## CMS
* [Alchemy CMS](http://alchemy-cms.com) - A powerful, userfriendly and flexible Open Source Rails CMS
* [LocomotiveCMS](http://www.locomotivecms.com) - A simple but powerful CMS based on Liquid templates and Mongodb database
* [Publify](https://github.com/publify/publify) - A self hosted Web publishing platform on Rails
* [Radiant](http://radiantcms.org) - A no-fluff, open source content management system designed for small teams
* [Refinery CMS](http://refinerycms.com) - An open source Ruby on Rails content management system for Rails 3 and 4

## Code Analysis and Metrics

* [Brakeman](https://github.com/presidentbeef/brakeman) - A static analysis security vulnerability scanner for Ruby on Rails applications.
* [Flay](https://github.com/seattlerb/flay) - Flay analyzes code for structural similarities. Differences in literal values, variable, class, method names, whitespace, programming style, braces vs do/end, etc are all ignored. Making this totally rad.
* [Flog](https://github.com/seattlerb/flog) - Flog reports the most tortured code in an easy to read pain report. The higher the score, the more pain the code is in.
* [fukuzatsu](https://gitlab.com/coraline/fukuzatsu/tree/master) - Complexity analysis tool with a rich web front-end.
* [MetricFu](https://github.com/metricfu/metric_fu) - A fist full of code metrics
* [rails_best_practices](https://github.com/railsbp/rails_best_practices) - A code metric tool for rails projects
* [Reek](https://github.com/troessner/reek) - Code smell detector for Ruby
* [Rubocop](https://github.com/bbatsov/rubocop) - A static code analyzer, based on the community Ruby style guide.
* [Rubycritic](https://github.com/whitesmith/rubycritic) - A Ruby code quality reporter.
* [SimpleCov](https://github.com/colszowka/simplecov) - Code coverage for Ruby 1.9+ with a powerful configuration library and automatic merging of coverage across test suites.

## Coding Style Guides

* [Rails style guide](https://github.com/bbatsov/rails-style-guide) - Community-driven Rails best practices and style for Rails 3 and 4
* [RSpec style guide](https://github.com/andreareginato/betterspecs) - Better Specs { rspec guidelines with ruby }
* [Ruby style guide](https://github.com/bbatsov/ruby-style-guide) - Community-driven Ruby coding style

## Concurrency

* [Celluloid](http://celluloid.io) - Actor-based concurrent object framework for Ruby
* [Concurrent Ruby](https://github.com/ruby-concurrency/concurrent-ruby) -
* [EventMachine](https://github.com/eventmachine/eventmachine) - An event-driven I/O and lightweight concurrency library for Ruby
  Modern concurrency tools including agents, futures, promises, thread pools, supervisors, and more. Inspired by Erlang, Clojure, Scala, Go, Java, JavaScript, and classic concurrency patterns.

## Configuration

* [Configatron](https://github.com/markbates/configatron) - Simple and feature rich configuration system for Ruby apps
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
  * [FastAttributes](https://github.com/applift/fast_attributes) - FastAttributes adds attributes with their types to the class
  * [Virtus](https://github.com/solnic/virtus) - Attributes on Steroids for Plain Old Ruby Objects
* Hash
  * [Hashie](https://github.com/intridea/hashie) - A collection of tools that extend Hashes and make them more useful

## Country Data

* [Carmen](https://github.com/jim/carmen) - A repository of geographic regions
* [Countries](https://github.com/hexorx/countries) - All sorts of useful information about every country packaged as pretty little country objects
* [i18n_data](https://github.com/grosser/i18n_data) - country/language names and 2-letter-code pairs, in 85 languages, for country/language i18n
* [normalize_country](https://github.com/sshaw/normalize_country) - Convert country names and codes to a standard, includes a conversion program for XMLs, CSVs and DBs

## Dashboards

* [Dashing-Rails](https://github.com/gottfrois/dashing-rails) - The exceptionally handsome dashboard framework for Rails.

## Data Visualization

* [RailRoady](https://github.com/preston/railroady) - Ruby on Rails 3/4 model and controller UML class diagram generator.
* [Rails Erd](https://github.com/voormedia/rails-erd) - Generate Entity-Relationship Diagrams for Rails applications.
* [Ruby/GraphViz](https://github.com/glejeune/Ruby-Graphviz) - Ruby interface to the GraphViz graphing tool

## Database Drivers

* [DataObjects](https://github.com/datamapper/do) - An attempt to rewrite existing Ruby database drivers to conform to one, standard interface.
* [mongo-ruby-driver](https://github.com/mongodb/mongo-ruby-driver) - MongoDB Ruby driver
* [moped](http://mongoid.org/en/moped/index.html) - A MongoDB driver for Ruby
* [mysql2](https://github.com/brianmario/mysql2) - A modern, simple and very fast Mysql library for Ruby (binding to libmysql)
* [Redic](https://github.com/amakawa/redic) - Lightweight Redis Client
* [redis-rb](https://github.com/redis/redis-rb) - A Ruby client that tries to match Redis' API one-to-one, while still providing an idiomatic interface
* [ruby-pg](https://bitbucket.org/ged/ruby-pg) - Ruby interface to PostgreSQL 8.3 and later
* [SQLite3](https://github.com/sparklemotion/sqlite3-ruby)

## Database Tools

* [Database Cleaner](https://github.com/DatabaseCleaner/database_cleaner) - Database Cleaner is a set of strategies for cleaning your database in Ruby.
* [PgHero](https://github.com/ankane/pghero) - Postgres insights made easy
* [Seed dump](https://github.com/rroblak/seed_dump) - Rails 4 task to dump (parts) of your database to db/seeds.rb.
* [Seed Fu](https://github.com/mbleigh/seed-fu) - Advanced seed data handling for Rails.

## Date and Time Processing

* [business_time](https://github.com/bokmann/business_time) - Support for doing time math in business hours and days
* [Chronic](https://github.com/mojombo/chronic) - A natural language date/time parser written in pure Ruby
* [groupdate](https://github.com/ankane/groupdate) - The simplest way to group temporal data in ActiveRecord, arrays and hashes
* [time-lord](https://github.com/krainboltgreene/time-lord) - Adds extra functionality to the time class
* [time_diff](https://github.com/abhidsm/time_diff) - Calculates the difference between two time
* [validates_timeliness](https://github.com/adzap/validates_timeliness) - Date and time validation plugin for ActiveModel and Rails
* [yymmdd](https://github.com/sshaw/yymmdd) - Tiny DSL for idiomatic date parsing and formatting

## Debugging Tools

* [Byebug](https://github.com/deivid-rodriguez/byebug) - A simple to use, feature rich debugger for Ruby 2.
* [debugger](https://github.com/cldwalker/debugger) - A port of ruby-debug that works on 1.9.2 and 1.9.3.

## Decorators

* [Draper](https://github.com/drapergem/draper) - Draper adds an object-oriented layer of presentation logic to your Rails application

## DevOps Tools

* [Backup](https://github.com/meskyanichi/backup) - Provides an elegant DSL in Ruby for performing backups on UNIX-like systems
* [Capistrano](http://capistranorb.com) - A remote server automation and deployment tool written in Ruby
* [Chef](https://github.com/opscode/chef) - A systems integration framework, built to bring the benefits of configuration management to your entire infrastructure
* [Lita](https://www.lita.io/) - ChatOps for Ruby: A pluggable chat bot framework usable with any chat service.
* [Logstash](https://github.com/elasticsearch/logstash) - Logs/event transport, processing, management, search
* [Mina](https://github.com/mina-deploy/mina) - Really fast deployer and server automation tool.
* [Puppet](https://github.com/puppetlabs/puppet) - An automated administrative engine for your Linux, Unix, and Windows systems, performs administrative tasks (such as adding users, installing packages, and updating server configurations) based on a centralized specification
* [Rubber](https://github.com/rubber/rubber) - The rubber plugin enables relatively complex multi-instance deployments of RubyOnRails applications to Amazon's Elastic Compute Cloud (EC2).
* [Vagrant](http://www.vagrantup.com) - Create and configure lightweight, reproducible, and portable development environments

## Documentation

* [grape-swagger](https://github.com/tim-vandecasteele/grape-swagger) - Add swagger compliant documentation to your Grape API
* [Inch](https://github.com/rrrene/inch) - Inch is a documentation measurement and evalutation tool for Ruby code, based on YARD
* [RDoc](https://github.com/rdoc/rdoc) - RDoc produces HTML and command-line documentation for Ruby projects
* [YARD](http://yardoc.org) - YARD enables the user to generate consistent, usable documentation that can be exported to a number of formats very easily

## E-Commerce and Payments

* [Active Merchant](https://github.com/Shopify/active_merchant) - A simple payment abstraction library extracted from Shopify
* [Paypal Merchant SDK](https://github.com/paypal/merchant-sdk-ruby) - Official Paypal Merchant SDK for Ruby
* [Piggybak](https://github.com/piggybak/piggybak) - Modular, Extensible open-source ecommerce solution for Ruby on Rails
* [ROR Ecommerce](http://www.ror-e.com)
* [Shoppe](http://tryshoppe.com) - A Rails-based e-commerce platform which allows you to easily introduce a catalogue-based store into your Rails 4 applications
* [Spree](http://spreecommerce.com)
* [stripe-ruby](https://github.com/stripe/stripe-ruby) - Stripe Ruby bindings

## Ebook

* [Bookshop](https://github.com/blueheadpublishing/bookshop) - Bookshop is a an open-source agile book development and publishing framework for authors, editors.
* [Eeepub](https://github.com/jugyo/eeepub) - EeePub is a Ruby ePub generator.
* [Gepub](https://github.com/skoji/gepub) - A generic EPUB library for Ruby : supports EPUB 3
* [Git Scribe](https://github.com/schacon/git-scribe) - Basically the best way to write an ebook.
* [Mobi](https://github.com/jkongie/mobi) - A Ruby way to read MOBI format metadata
* [Review](https://github.com/kmuto/review) - Re:VIEW is flexible document format/conversion system

## Email

* [Incoming](https://github.com/honeybadger-io/incoming) - Incoming! helps you receive email in your Rack apps
* [LetterOpener](https://github.com/ryanb/letter_opener) - Preview mail in the browser instead of sending.
* [Mail](https://github.com/mikel/mail) - A Really Ruby Mail Library
* [MailCatcher](http://mailcatcher.me) - Catches mail and serves it through a dream
* [Mailman](https://github.com/titanous/mailman) - An incoming mail processing microframework in Ruby
* [Pony](https://github.com/benprew/pony) - The express way to send mail from Ruby

## Environment Management

* [chgems](https://github.com/postmodern/chgems) - Chroot for RubyGems
* [chruby](https://github.com/postmodern/chruby) - Change your current Ruby. No shims, no crazy options or features, ~90 LOC
* [fry](https://github.com/terlar/fry) - Simple ruby version manager for fish
* [gem_home](https://github.com/postmodern/gem_home) - A tool for changing your $GEM_HOME
* [rbenv](https://github.com/sstephenson/rbenv) - Use rbenv to pick a Ruby version for your application and guarantee that your development environment matches production
* [ruby-build](https://github.com/sstephenson/ruby-build) - Compile and install Ruby
* [ruby-install](https://github.com/postmodern/ruby-install) - Installs Ruby, JRuby, Rubinius, MagLev or MRuby
* [RVM](https://rvm.io) - RVM is a command-line tool which allows you to easily install, manage, and work with multiple ruby environments from interpreters to sets of gems

## Error Handling

* [Airbrake](https://github.com/airbrake/airbrake) - The official Airbrake library for Ruby on Rails (and other Rack based frameworks)
* [Better Errors](https://github.com/charliesome/better_errors) - Better error page for Rack apps
* [Errbit](http://errbit.github.io/errbit) - The open source, self-hosted error catcher
* [Exception Notification](https://github.com/smartinez87/exception_notification) - A set of notifiers for sending notifications when errors occur in a Rack/Rails application
* [Nesty](https://github.com/skorks/nesty) - Nested exceptions for Ruby
* [Raven Ruby](https://github.com/getsentry/raven-ruby) - Raven is a Ruby client for Sentry.

## File Upload

* [CarrierWave](https://github.com/carrierwaveuploader/carrierwave) - Classier solution for file uploads for Rails, Sinatra and other Ruby web frameworks
* [DragonFly](https://github.com/markevans/dragonfly) - A Ruby gem for on-the-fly processing - suitable for image uploading in Rails, Sinatra and much more!
* [PaperClip](https://github.com/thoughtbot/paperclip) - Easy file attachment management for ActiveRecord
* [rack-secure-upload](https://github.com/dtaniwaki/rack-secure-upload) - Upload files securely

## Form Builder

* [Abracadabra](https://github.com/TrevorHinesley/abracadabra) - The gem that swaps out text with a fully-compliant Rails form in one click
* [Formtastic](https://github.com/justinfrench/formtastic) - A Rails form builder plugin with semantically rich and accessible markup
* [Rails Bootstrap Forms](https://github.com/bootstrap-ruby/rails-bootstrap-forms) - Rails form builder that makes it super easy to create beautiful-looking forms with Twitter Bootstrap 3+
* [Simple Form](https://github.com/plataformatec/simple_form) - Rails forms made easy

## Game Development

* [Gosu](http://www.libgosu.org) - A 2D game development library for the Ruby and C++ programming languages

## Geolocation

* [Geocoder](https://github.com/alexreisner/geocoder) - A complete geocoding solution for Ruby. With Rails it adds geocoding (by street or IP address), reverse geocoding (find street address based on given coordinates), and distance queries
* [Geokit](https://github.com/geokit/geokit) - Geokit gem provides geocoding and distance/heading calculations

## Git Tools

* [git-auto-bisect](https://github.com/grosser/git-autobisect) - Find the commit that broke master
* [git-spelunk](https://github.com/osheroff/git-spelunk) - Dig through git blame history
* [git-up](https://github.com/aanand/git-up) - Fetch and rebase all locally-tracked remote branches
* [git-whence](https://github.com/grosser/git-whence) - Find which merge a commit came from
* [hub](https://github.com/github/hub) - a command line tool that wraps Git in order to extend it with extra features and commands that make working with GitHub easier
* [Rugged](https://github.com/libgit2/rugged) - Ruby bindings to libgit2

## GUI

* [QtRuby](http://quickgit.kde.org/?p=qtruby.git) - [Qt4 binding for ruby](https://github.com/ryanmelt/qtbindings)
* [RubyGnome2](http://ruby-gnome2.sourceforge.jp/)
* [Shoes](http://shoesrb.com)

## HTML/XML Parsing

* [HappyMapper](https://github.com/dam5s/happymapper) - Object to XML mapping library, using Nokogiri
* [Nokogiri](http://nokogiri.org) - An HTML, XML, SAX, and Reader parser with XPath and CSS selector support
* [ROXML](https://github.com/Empact/roxml) - Custom mapping and bidirectional marshalling between Ruby and XML using annotation-style class methods, via Nokogiri or LibXML.

## HTTP

* [excon](https://github.com/excon/excon) - Usable, fast, simple Ruby HTTP 1.1. It works great as a general HTTP(s) client and is particularly well suited to usage in API clients.
* [Faraday](https://github.com/lostisland/faraday)
* [Http Client](https://github.com/nahi/httpclient) - Gives something like the functionality of libwww-perl (LWP) in Ruby
* [http](https://github.com/tarcieri/http) - The HTTP Gem: a simple Ruby DSL for making HTTP requests.
* [httparty](https://github.com/jnunemaker/httparty)
* [Patron](https://github.com/toland/patron) - Patron is a Ruby HTTP client library based on libcurl.
* [RESTClient](https://github.com/rest-client/rest-client) - Simple HTTP and REST client for Ruby, inspired by microframework syntax for specifying actions
* [Savon](https://github.com/savonrb/savon) - Savon is a SOAP client for the Ruby programming language.
* [Sawyer](https://github.com/lostisland/sawyer) - Secret user agent of HTTP, built on top of Faraday
* [Typhoeus](https://github.com/typhoeus/typhoeus) - Typhoeus wraps libcurl in order to make fast and reliable requests

## Imagery

* [MiniMagick](https://github.com/minimagick/minimagick) - A ruby wrapper for ImageMagick or GraphicsMagick command line
* [PSD.rb](https://github.com/layervault/psd.rb) - Parse Photoshop files in Ruby with ease
* [RMagick](https://github.com/rmagick/rmagick) - RMagick is an interface between Ruby and ImageMagick
* [Skeptick](https://github.com/maxim/skeptick) - Skeptick is an all-purpose DSL for building and running ImageMagick commands.

## Internationalization

* [i18n-tasks](https://github.com/glebm/i18n-tasks) - Manage missing and unused translations with the awesome power of static analysis
* [i18n](https://github.com/svenfuchs/i18n) - Ruby Internationalization and localization solution
* [r18n](https://github.com/ai/r18n) - Advanced i18n library for Rails, Sinatra, desktop apps, models, works well with complex languages like Russian.
* [twitter-cldr-rb](https://github.com/twitter/twitter-cldr-rb) - Ruby implementation of the ICU (International Components for Unicode) that uses the Common Locale Data Repository to format dates, plurals, and more

## Logging

* [Cabin](https://github.com/jordansissel/ruby-cabin) - Structured+contextual logging experiments in Ruby.
* [Fluentd](https://github.com/fluent/fluentd) - Fluentd collects events from various data sources and writes them to files, database or other types of storages
* [HttpLog](https://github.com/trusche/httplog) - Log outgoing HTTP requests.
* [Log4r](https://github.com/colbygk/log4r) - Log4r is a comprehensive and flexible logging library for use in Ruby programs
* [Logging](https://github.com/TwP/logging) - A flexible logging library for use in Ruby programs based on the design of Java's log4j library.
* [Lograge](https://github.com/roidrage/lograge) - An attempt to tame Rails' default policy to log everything.
* [MongoDB Logger](https://github.com/le0pard/mongodb_logger) - MongoDB logger for Rails
* [Scrolls](https://github.com/asenchi/scrolls) - Simple logging
* [Yell](https://github.com/rudionrails/yell) - Your Extensible Logging Library

## Machine Learning

* [PredictionIO Ruby SDK](https://github.com/PredictionIO/PredictionIO-Ruby-SDK) - The PredictionIO Ruby SDK provides a convenient API to quickly record your users' behavior and retrieve personalized predictions for them
* [Ruby Datumbox Wrapper](https://github.com/marloncarvalho/ruby-datumbox) - It's a simple Ruby Datumbox Wrapper. At the moment the API currently allows you to build applications that make use of machine learning algorithms.

## Markdown Processors

* [kramdown](https://github.com/gettalong/kramdown) - Kramdown is yet-another-markdown-parser but fast, pure Ruby, using a strict syntax definition and supporting several common extensions
* [Maruku](https://github.com/bhollis/maruku) - A pure-Ruby Markdown-superset interpreter
* [Redcarpet](https://github.com/vmg/redcarpet) - A fast, safe and extensible Markdown to (X)HTML parser

## Misc

* [AASM](https://github.com/aasm/aasm) - A library for adding finite state machines to Ruby classes
* [Betty](https://github.com/pickhardt/betty) - Friendly English-like interface for your command line. Don't remember a command? Ask Betty
* [Foreman](https://github.com/ddollar/foreman) - Manage Procfile-based applications
* [Gollum](https://github.com/gollum/gollum) - A simple, Git-powered wiki with a sweet API and local frontend.
* [Guard](https://github.com/guard/guard) - A command line tool to easily handle events on file system modifications
* [JsonCompare](https://github.com/a2design-company/json-compare) - Returns the difference between two JSON files
* [play ►](https://github.com/play/play) - Your company's dj
* [Pry Debugger](https://github.com/nixme/pry-debugger) - Pry navigation commands via debugger (formerly ruby-debug)
* [Pry](https://github.com/pry/pry) - A powerful alternative to the standard IRB shell for Ruby
* [pygments.rb](https://github.com/tmm1/pygments.rb) - A Ruby wrapper for the Python pygments syntax highlighter
* [Ruby Operators](http://ruby-operators.herokuapp.com/) - A webpage showing awesome names for different Ruby operators.
* [Termit](https://github.com/pawurb/termit) - Google Translate with speech synthesis in your terminal
* [Treetop](https://github.com/cjheath/treetop) - PEG (Parsing Expression Grammar) parser
* [Yomu](https://github.com/Erol/yomu) - Read text and metadata from files and documents (.doc, .docx, .pages, .odt, .rtf, .pdf)

## Mobile Development

* [Ruboto](http://ruboto.org) - A platform for developing full stand-alone apps for Android using the Ruby language and libraries
* [RubyMotion](http://www.rubymotion.com) - A revolutionary toolchain that lets you quickly develop and test native iOS and OS X applications for iPhone, iPad and Mac

## Money

* [eu_central_bank](https://github.com/RubyMoney/eu_central_bank) - A gem that calculates the exchange rate using published rates from European Central Bank
* [Money](https://github.com/RubyMoney/money) - A Ruby Library for dealing with money and currency conversion

## Natural Language Processing

* [Treat](https://github.com/louismullie/treat) - Treat is a toolkit for natural language processing and computational linguistics in Ruby

## ORM/ODM

* [ActiveRecord](https://github.com/rails/rails/tree/master/activerecord)
* [DataMapper](http://datamapper.org/) - ORM which works well with legacy databases. Last release (1.2.0) was on 13 October 2011.
* [Guacamole](https://github.com/triAGENS/guacamole) -  An ODM for ArangoDB
* [Mongoid](http://mongoid.org/en/mongoid/index.html) - An ODM (Object-Document-Mapper) framework for MongoDB in Ruby
* [MongoMapper](http://mongomapper.com/)
* [MongoModel](https://github.com/spohlenz/mongomodel) -  Ruby ODM for interfacing with MongoDB databases
* [ohm](http://ohm.keyvalue.org/) - Object-hash mapping library for Redis
* [Sequel](https://github.com/jeremyevans/sequel) - Sequel is a simple, flexible, and powerful SQL database access toolkit for Ruby

## ORM/ODM Extensions

* [Mongoid Tree](https://github.com/benedikt/mongoid-tree) - A tree structure for Mongoid documents using the materialized path pattern

## Package Management

* Gems
  * [Bundler](http://bundler.io) - Manage your application's gem dependencies with less pain
  * [RubyGems](https://rubygems.org) - Community's gem hosting service
* Packages and Applications
  * [Berkshelf](https://github.com/berkshelf/berkshelf) - A Chef Cookbook manager
  * [CocoaPods](https://github.com/CocoaPods/CocoaPods) - The Objective-C dependency manager
  * [Homebrew-cask](https://github.com/caskroom/homebrew-cask) - a CLI workflow for the administration of Mac applications distributed as binaries
  * [Homebrew](https://github.com/Homebrew/homebrew) - The missing package manager for OS X

## Pagination

* [Kaminari](https://github.com/amatsuda/kaminari) - A Scope & Engine based, clean, powerful, customizable and sophisticated paginator for modern web app frameworks and ORMs
* [will_paginate](https://github.com/mislav/will_paginate) - A pagination library that integrates with Ruby on Rails, Sinatra, Merb, DataMapper and Sequel

## PDF

* [Gimli](https://github.com/walle/gimli) - Utility for converting markup files to pdf files.
* [Kitabu](https://github.com/fnando/kitabu) - A framework for creating e-books from Markdown/Textile text markup using Ruby.
* [Pdfkit](https://github.com/pdfkit/pdfkit) - HTML+CSS to PDF using wkhtmltopdf
* [Prawn](https://github.com/prawnpdf/prawn) - Fast, Nimble PDF Writer for Ruby
* [RGhost](https://github.com/shairontoledo/rghost) - RGhost is a document creation and conversion API.
* [Shrimp](https://github.com/adjust/shrimp) - A phantomjs based pdf renderer
* [Wicked Pdf](https://github.com/mileszs/wicked_pdf) - PDF generator (from HTML) plugin for Ruby on Rails
* [Wisepdf](https://github.com/igor-alexandrov/wisepdf) - Wkhtmltopdf wrapper done right

## Process Monitoring

* [Bluepill](https://github.com/bluepill-rb/bluepill) - Simple process monitoring tool
* [God](https://github.com/mojombo/god) - An easy to configure, easy to extend monitoring framework written in Ruby

## Processes and Threads

* [Parallel](https://github.com/grosser/parallel) - Run any code in parallel Processes (> use all CPUs) or Threads (> speedup blocking operations).
Best suited for map-reduce or e.g. parallel downloads/uploads
* [childprocess](https://github.com/jarib/childprocess) - Cross-platform ruby library for managing child processes.
* [forkoff](https://github.com/ahoward/forkoff) - brain-dead simple parallel processing for ruby
* [posix-spawn](https://github.com/rtomayko/posix-spawn) - Fast Process::spawn for Rubys >= 1.8.7 based on the posix_spawn() system interfaces

## Profiler

* [bullet](https://github.com/flyerhzm/bullet) - Help to kill N+1 queries and unused eager loading
* [Peek](https://github.com/peek/peek) - Visual status bar showing Rails performance
* [perftools.rb](https://github.com/tmm1/perftools.rb) - gperftools (formerly known as google-perftools) for Ruby code
* [rack-mini-profiler](https://github.com/MiniProfiler/rack-mini-profiler) - Profiler for your development and production Ruby rack apps
* [ruby-prof](https://github.com/ruby-prof/ruby-prof) - A code profiler for MRI rubies

## Queue

* [active_job](https://github.com/rails/activejob) - Declare job classes that can be run by a variety of queueing backends
* [Delayed::Job](https://github.com/collectiveidea/delayed_job) - Database backed asynchronous priority queue
* [Resque](https://github.com/resque/resque) - A Redis-backed Ruby library for creating background jobs
* [Sidekiq](http://sidekiq.org) - A full-featured background processing framework for Ruby. It aims to be simple to integrate with any modern Rails application and much higher performance than other existing solutions.
* [Sucker Punch](https://github.com/brandonhilkert/sucker_punch) - A single process background processing library using Celluloid. Aimed to be Sidekiq's little brother.

## Robotics

* [Artoo](http://artoo.io) - Next generation robotics framework with support for different platforms: Arduino, Leap Motion, Pebble, Raspberry Pi, etc.

## RSS

* [Feed normalizer](https://github.com/aasmith/feed-normalizer) - Extensible Ruby wrapper for Atom and RSS parsers.
* [Feedjira](https://github.com/feedjira/feedjira) - A feed fetching and parsing library.
* [Ratom](https://github.com/seangeo/ratom) - A fast, libxml based, Ruby Atom library.
* [Simple rss](https://github.com/cardmagic/simple-rss) - A simple, flexible, extensible, and liberal RSS and Atom reader.

## Scheduling

* [Clockwork](https://github.com/tomykaira/clockwork) - Clockwork is a cron replacement. It runs as a lightweight, long-running Ruby process which sits alongside your web processes (Mongrel/Thin) and your worker processes (DJ/Resque/Minion/Stalker) to schedule recurring work at particular times or dates.
* [resque-scheduler](https://github.com/resque/resque-scheduler) - A light-weight job scheduling system built on top of Resque
* [rufus-scheduler](https://github.com/jmettraux/rufus-scheduler) - Job scheduler for Ruby (at, cron, in and every jobs)
* [Whenever](https://github.com/javan/whenever) - A Ruby gem that provides a clear syntax for writing and deploying cron jobs

## Search

* [attr_searchable](https://github.com/mrkamel/attr_searchable) - Search engine like fulltext query support for ActiveRecord
* [elasticsearch-ruby](https://github.com/elasticsearch/elasticsearch-ruby)
* [has_scope](https://github.com/plataformatec/has_scope) - Has scope allows you to easily create controller filters based on your resources named scopes.
* [pg_search](https://github.com/Casecommons/pg_search) - Builds ActiveRecord named scopes that take advantage of PostgreSQL's full text search
* [ransack](https://github.com/activerecord-hackery/ransack/) - Object-based searching.
* [Rroonga](https://github.com/ranguba/rroonga) - The Ruby bindings of Groonga
* [Searchkick](https://github.com/ankane/searchkick) - Searchkick learns what your users are looking for. As more people search, it gets smarter and the results get better. It’s friendly for developers - and magical for your users.
* [Searchlogic](https://github.com/binarylogic/searchlogic) - Object based searching, common named scopes, and other useful named scope tools for ActiveRecord
* [Sunspot](https://github.com/sunspot/sunspot) - A Ruby library for expressive, powerful interaction with the Solr search engine
* [Thinking Sphinx](https://github.com/pat/thinking-sphinx) - A library for connecting ActiveRecord to the Sphinx full-text search tool

## SEO

* [FriendlyId](https://github.com/norman/friendly_id) - The "Swiss Army bulldozer" of slugging and permalink plugins for Active Record
* [MetaTags](https://github.com/kpumuk/meta-tags) - A gem to make your Rails application SEO-friendly
* [SitemapGenerator](https://github.com/kjvarga/sitemap_generator) - A framework-agnostic XML Sitemap generator written in Ruby

## Social Networking

* [Campo](https://github.com/chloerei/campo) - Campo is a lightweight forum application, base on Ruby on Rails.
* [diaspora*](https://github.com/diaspora/diaspora) - A privacy aware, distributed, open source social network
* [Discourse](https://github.com/discourse/discourse) - A platform for community discussion. Free, open, simple
* [Forem](https://github.com/radar/forem) - Rails 3 and Rails 4 forum engine

## State Machines

* [AASM](https://github.com/aasm/aasm) - State machines for Ruby classes (plain Ruby, Rails Active Record, Mongoid)
* [simple_states](https://github.com/svenfuchs/simple_states) - A super-slim statemachine-like support library
* [Statesman](https://github.com/gocardless/statesman) - A statesmanlike state machine library
* [Workflow](https://github.com/geekq/workflow) - A finite-state-machine-inspired API for modeling and interacting with what we tend to refer to as 'workflow'

## Static Site Generation

* [High Voltage](https://github.com/thoughtbot/high_voltage) - Easily include static pages in your Rails app
* [Jekyll](http://jekyllrb.com) - Transform your plain text into static websites and blogs
* [Middleman](http://middlemanapp.com) - A static site generator using all the shortcuts and tools in modern web development
* [Nanoc](http://nanoc.ws/) - A static site generator, fit for building anything from a small personal blog to a large corporate web site

## Template Engine

* [Curly](https://github.com/zendesk/curly) - A template language that completely separates structure and logic
* [Haml](https://github.com/haml/haml) - HTML Abstraction Markup Language
* [Liquid](https://github.com/Shopify/liquid) - Safe, customer facing template language for flexible web apps
* [Mustache](https://github.com/mustache/mustache) - Logic-less Ruby templates
* [Slim](https://github.com/slim-template/slim) - A template language whose goal is reduce the syntax to the essential parts without becoming cryptic
* [Tilt](https://github.com/rtomayko/tilt) - Generic interface to multiple Ruby template engines

## Testing

* Frameworks
  * [RSpec](https://github.com/rspec/rspec) - Behaviour Driven Development for Ruby
    * Formatters
      * [Emoji-RSpec](https://github.com/cupakromer/emoji-rspec) - Custom Emoji Formatters for RSpec
      * [Fuubar](https://github.com/thekompanee/fuubar) - The instafailing RSpec progress bar formatter
      * [Nyan Cat](https://github.com/mattsears/nyan-cat-formatter) - Nyan Cat inspired RSpec formatter!
  * [Bacon](https://github.com/chneukirchen/bacon) - A small RSpec clone
  * [Capybara](http://jnicklas.github.io/capybara) - Acceptance test framework for web applications
  * [Cucumber](https://github.com/cucumber/cucumber) - BDD that talks to domain experts first and code second
  * [Cutest](https://github.com/djanowski/cutest) - Isolated tests in Ruby
  * [Konacha](https://github.com/jfirebaugh/konacha) - Test your Rails application's JavaScript with the mocha test framework and chai assertion library
  * [minitest](https://github.com/seattlerb/minitest) - minitest provides a complete suite of testing facilities supporting TDD, BDD, mocking, and benchmarking
  * [RR](https://github.com/rr/rr) - A test double framework that features a rich selection of double techniques and a terse syntax
  * [shoulda-matchers](https://github.com/thoughtbot/shoulda-matchers) - Provides Test::Unit- and RSpec-compatible one-liners that test common Rails functionality. These tests would otherwise be much longer, more complex, and error-prone.
  * [Spinach](https://github.com/codegram/spinach) - Spinach is a high-level BDD framework that leverages the expressive Gherkin language (used by Cucumber) to help you define executable specifications of your application or library's acceptance criteria.
  * [Spork](https://github.com/sporkrb/spork) - A DRb server for testing frameworks (RSpec / Cucumber currently)
  * [Test::Unit](http://test-unit.github.io) - Test::Unit is a xUnit family unit testing framework for Ruby
* Fake Data
  * [Fabrication](http://fabricationgem.org/) - A simple and powerful object generation library
  * [factory_girl](https://github.com/thoughtbot/factory_girl) - A library for setting up Ruby objects as test data
  * [faker](https://github.com/stympy/faker) - A library for generating fake data such as names, addresses, and phone numbers.
  * [ffaker](https://github.com/EmmanuelOga/ffaker) - A faster Faker, generates dummy data, rewrite of faker.
  * [Forgery](https://github.com/sevenwire/forgery) - Easy and customizable generation of forged data.
  * [Machinist](https://github.com/notahat/machinist) - Fixtures aren't fun. Machinist is
* Mock
  * [ActiveMocker](https://github.com/zeisler/active_mocker) - Generate mocks from ActiveRecord models for unit tests that run fast because they don’t need to load Rails or a database.
  * [TestXml](https://github.com/alovak/test_xml) - TestXml is a small extension for testing XML/HTML.
  * [WebMock](https://github.com/bblimke/webmock) - Library for stubbing and setting expectations on HTTP requests
* WebDrivers
  * [Selenium WebDriver](http://selenium.googlecode.com/git/docs/api/rb/index.html) - This gem provides Ruby bindings for WebDriver.
  * [Watir](https://github.com/watir/watir/) - Web application testing in Ruby
* Extra
  * [Appraisal](https://github.com/thoughtbot/appraisal) - Appraisal integrates with bundler and rake to test your library against different versions of dependencies
  * [Ruby-JMeter](https://github.com/flood-io/ruby-jmeter) - A Ruby based DSL for building JMeter test plans
  * [Spring](https://github.com/rails/spring) - Preloads your rails environment in the background for faster testing and Rake tasks
  * [timecop](https://github.com/travisjeffery/timecop) - Provides "time travel" and "time freezing" capabilities, making it dead simple to test time-dependent code
  * [vcr](https://github.com/vcr/vcr) - Record your test suite's HTTP interactions and replay them during future test runs for fast, deterministic, accurate tests

## Third-party APIs

* [Dropbox](https://github.com/futuresimple/dropbox-api) - Dropbox API Ruby Client.
* [fb_graph](https://github.com/nov/fb_graph) - A full-stack Facebook Graph API wrapper
* [flickr](https://github.com/RaVbaker/flickr) - A Ruby interface to the Flickr API
* [gitlab](https://github.com/NARKOZ/gitlab) - Ruby wrapper and CLI for the GitLab API
* [gmail](https://github.com/nu7hatch/gmail) - A Rubyesque interface to Gmail, with all the tools you'll need.
* [hipchat-rb](https://github.com/hipchat/hipchat-rb) - HipChat HTTP API Wrapper in Ruby with Capistrano hooks
* [instagram-ruby-gem](https://github.com/Instagram/instagram-ruby-gem) - The official gem for the Instagram REST and Search APIs
* [itunes_store_transporter](https://github.com/sshaw/itunes_store_transporter) - Ruby wrapper around Apple's iTMSTransporter program
* [linkedin](https://github.com/hexgnu/linkedin) - Provides an easy-to-use wrapper for LinkedIn's REST APIs
* [Octokit](http://octokit.github.io/octokit.rb) - Ruby toolkit for the GitHub API
* [Pusher](https://github.com/pusher/pusher-gem) - Ruby server library for the Pusher API.
* [ruby-gmail](https://github.com/dcparker/ruby-gmail) - A Rubyesque interface to Gmail
* [ruby-trello](https://github.com/jeremytregunna/ruby-trello) - Implementation of the Trello API for Ruby
* [soundcloud-ruby](https://github.com/soundcloud/soundcloud-ruby) - Official SoundCloud API Wrapper for Ruby
* [t](https://github.com/sferik/t) - A command-line power tool for Twitter
* [tweetstream](https://github.com/tweetstream/tweetstream) - A simple library for consuming Twitter's Streaming API
* [twitter](https://github.com/sferik/twitter) - A Ruby interface to the Twitter API
* [wikipedia](https://github.com/kenpratt/wikipedia-client) - Ruby client for the Wikipedia API.
* [youtube_it](https://github.com/kylejginavan/youtube_it) - An object-oriented Ruby wrapper for the YouTube GData API
* [Yt](https://github.com/Fullscreen/yt) - An object-oriented Ruby client for YouTube API V3

## Video

* [Streamio FFMPEG](https://github.com/streamio/streamio-ffmpeg) - Simple yet powerful wrapper around the ffmpeg command for reading metadata and transcoding movies

## Web Crawling

* [anemone](https://github.com/chriskite/anemone) - Ruby library and CLI for crawling websites.
* [LinkThumbnailer](https://github.com/gottfrois/link_thumbnailer) - Ruby gem that generates thumbnail images and videos from a given URL. Much like popular social website with link preview.
* [Mechanize](https://github.com/sparklemotion/mechanize) - Mechanize is a ruby library that makes automated web interaction easy.
* [MetaInspector](https://github.com/jaimeiniesta/metainspector) - Ruby gem for web scraping purposes. It scrapes a given URL, and returns you its title, meta description, meta keywords, an array with all the links, all the images in it, etc.
* [Upton](https://github.com/propublica/upton) - A batteries-included framework for easy web-scraping. Just add CSS! (Or do more.)
* [Wombat](https://github.com/felipecsl/wombat) - Web scraper with an elegant DSL that parses structured data from web pages

## Web Frameworks

* [Camping](http://camping.io) - A web microframework which consistently stays at less than 4kB of code
* [Cuba](http://cuba.is) - A microframework for web development
* [Lotus](http://lotusrb.org) - It aims to bring back Object Oriented Programming to web development, leveraging on a stable API, a minimal DSL, and plain objects.
* [Padrino](http://www.padrinorb.com) - A full-stack ruby framework built upon Sinatra
* [Pakyow](http://pakyow.com/) - A framework for building modern web-apps in Ruby. It helps you build working software faster with a development process that remains friendly to both designers and developers
* [Ramaze](http://ramaze.net/) - A simple, light and modular open-source web application framework written in Ruby
* [Roda](http://roda.jeremyevans.net/) - A routing tree web framework
* [Ruby on Rails](http://rubyonrails.org) - A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern
* [Sinatra](http://www.sinatrarb.com) - Classy web-development dressed in a DSL

## Web Servers

* [Goliath](https://github.com/postrank-labs/goliath) - A non-blocking Ruby web server framework
* [Phusion Passenger](https://www.phusionpassenger.com) - Fast and robust web server and application server
* [Puma](https://github.com/puma/puma) - A modern, concurrent web server for Ruby
* [Rack](http://rack.github.io) - A common Ruby web server interface. By itself, it's just a specification and utility library, but all Ruby web servers implement this interface
* [Thin](http://code.macournoyer.com/thin) - Tiny, fast & funny HTTP server
* [Unicorn](http://unicorn.bogomips.org) - Rack HTTP server for fast clients and Unix

## WebSocket

* [Faye](http://faye.jcoglan.com/ruby.html) - A set of tools for simple publish-subscribe messaging between web clients. It ships with easy-to-use message routing servers for Node.js and Rack applications, and clients that can be used on the server and in the browser.
* [Firehose](https://github.com/polleverywhere/firehose) - Build realtime Ruby web applications
* [Rails Realtime](https://github.com/liamks/rails-realtime) - Adding Real-Time To Your RESTful Rails App.
* [Sync](https://github.com/chrismccord/sync) - Real-time Rails Partials
* [Websocket-Rails](https://github.com/websocket-rails/websocket-rails) - Creates a built in WebSocket server inside a Rails application with ease.  Also support streaming HTTP

# Services and Apps

* [AppSignal](https://appsignal.com) - Better monitoring for your Rails applications.
* [CodeClimate](https://codeclimate.com) - Quality & security analysis for Ruby on Rails and Javascript.
* [Gemnasium](https://gemnasium.com) - Monitor your project dependencies and alert you about updates and security vulnerabilities.
* [GitHub](https://github.com) - Powerful collaboration, code review, and code management for open source and private projects.
* [Gitlab CI](https://about.gitlab.com/gitlab-ci/) - Integrate with your GitLab to run tests for your projects.
* [GitLab](https://about.gitlab.com) -  Open source software to collaborate on code.
* [Hakiri](https://hakiri.io) - Ship Secure Ruby Apps.
* [Honeybadger](https://www.honeybadger.io/) - Exception, uptime, and performance monitoring for Ruby.
* [HoundCI](https://houndci.com) - Review your Ruby code for style guide violations.
* [Inch CI](http://inch-ci.org/) - Documentation badges for Ruby projects.
* [Omniref] (https://www.omniref.com) - A comprehensive Ruby documentation site
* [PullReview](https://pullreview.com) - Automated code review for Ruby and Rails - from style to security.
* [Travis CI.com](https://travis-ci.com) - Take care of running your tests and deploying your private apps.
* [Travis CI.org](https://travis-ci.org) - A distributed build system for the open source community.

# Resources

* [GemBundle](http://www.gembundle.com) - A place to discover new Ruby Gems
* [GitHub Explore](https://github.com/explore)
* [Ruby Weekly](http://rubyweekly.com) - A free, once–weekly e-mail round-up of Ruby news and articles
* [Ruby5](http://ruby5.envylabs.com) - The latest news in the Ruby and Rails community
* [RubyDaily](http://rubydaily.org) - Community driven news
* [RubyFlow](http://www.rubyflow.com) - Ruby Programming Community Link Blog
* [The Ruby Toolbox](https://www.ruby-toolbox.com) - A comprehensive catalog of Ruby and Rails plug-ins, gems, tools and resources for Ruby developers with popularity ratings based on GitHub watchers and Gem downloads

# Other Awesome Lists

Other amazingly awesome lists can be found in the [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) list.
