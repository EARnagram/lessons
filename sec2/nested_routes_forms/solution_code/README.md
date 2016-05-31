# The Foundational Institute for Scientific Human Experimentation

![](./app/assets/images/resize_2_heads_kopie.jpg)

## Nested Routes and Forms

#### Lesson Objectives

| __Lesson 1__ - Nested Resources |
| :--- |
| Nest routes based on Models' relationships |
| Use rails console to test relationships |
| Manipulate routes to maximize organization |
| Follow a RESTful architecture when building nested routes |

| __Lesson 2__ - Forms, Validations, and Nesting |
| :--- |
| Create nested forms |
| Use validations on your Model and forms to ensure proper user interaction |
| Use flash messages to inform a poor submission |
| Throw errors when hiding webpages |
| Access `params` |

#### Road Map

1. Nested Resources
    1. Welcome to the Institute
    2. Setting Up Relationships
    3. Blocks in resources Routes
    4. Controllers Serving Nested Data
    5. Corresponding Views

2. Forms, Validations, and Nesting
    1. Using Edit, Update, New, and Create Routes
    2. Using params
    3. Validations for Models
    4. Sending Flash Messages
    5. Throw errors
    6. Outro


### Welcome to F.I.S.H.E. - Don't Worry, it's Safe!

![](https://rahmalamadingdong.files.wordpress.com/2015/09/the-cabinet-of-dr-caligari.jpg?w=960)

> On behalf of the entire institute, I want you to know we're really
> excited to have an esteemed web developer like yourself help us keep
> track of all our data. Hell, someone has to!
>
> But really, I'm sure you'll find there's nothing worth suing over…
> better yet, just make sure you turn in that NDA before you clock in…

You've just been hired to keep track of every scientist's experiments
and data for the infamous Foundational Institute for Scientific Human 
Experiments, or F.I.S.H.E.

Let's get started by looking at the legacy code you'll have to be 
working with.

##### Starter Code

Take 5 minutes to study the starter code. There isn't much there beyond
a `rails new` in the models and controllers, but you can see there are 
quite a few views already made.


### Setting up Relationships

In our database, we'll have three models: Scientist, Experiment, & Log.

We'll express this relationship with a couple belongs_to/has_many 
relationships, like this:

```
Scientist -|----<- Experiment -|----<- Log
```

Often, we'll want our models to relate to one another when using nested
resources in order to give us easier access in the controllers and 
views.

First we need to generate our models:

#### Scientist

We'll first give the `Scientist` model the following attributes:

| Key        | Value   |
| :---       | :---    |
| name       | String  |
| discipline | String  |
| spooky     | Boolean |

`rails g model Scientist name discipline spooky:boolean`

As this is the base of our relationships, the Scientist model is exaclty
like our previous models.

#### Experiment

Experiments `belongs_to` the `Scientist` model , so we'll need a 
reference to our previous model in our migration.

| Key          | Value   |
| :----------- | :------ |
| name         | String  |
| summary      | Text    |
| budget       | Integer |
| scientist_id | Integer |

`rails g model Experiment name summary:text budget:integer scientist:references`

Our final table column `scientist_id` `references` the `Scientist` model
we created earlier. We'll see what kinds of sweet methods we get from
that later on.

##### Default Values

Go ahead and open up that migration file. Since we've yet to `rake db:migrate`,
we can still edit this file. Add `, default: true` to the end of the 
spooky column, so it looks like this:

```ruby
# …create_scientists.rb
      #…
      t.boolean :spooky, default: true
```

Now every new Scientist at FISHE will have a default value of 
`spooky: true` unless otherwise stated.

#### Log

Logs `belongs_to` `Experiment` - we need another reference!

| Key           | Value   |
| :------------ | :------ |
| subject_name  | String  |
| comment       | Text    |
| deceased      | Boolean |
| weight        | Integer |
| treatments    | Integer |
| experiment_id | Integer |

`rails g model Log subject_name comment:text deceased:boolean weight:integer treatments:integer`

#### Set up the Database

`rake db:create`

`rake db:migrate`

![](http://www.northalsted.com/wp-content/uploads/2015/10/ItsAlive.jpg)

##### Oh no! We forgot to link Logs to Experiments!!

Have no fear! This will happen, and it's the major reason why we use
migrations to handle working with our database.

Migrations allow us to add and remove columns from our database without
needing to write any sequel.

However, with all things rails, there's a convention:

``` bash
# DO NOT TYPE THIS IN!
rails g migration AddColumnNameToModels column_name:type
```

Whenver you're adding to a table, you need to specify what you're doing
in your migration name. This will help rails locate what you're 
changing.

Before we add our experiment reference to our logs, we'll need to 
rollback the database.

`rake db:rollback`

Now we can change previous migration files and add new columns to the
migration files that were rolled back!

Sometimes you need to do this a few times to get to the migration file 
you'd like to rollback.

```bash
# USE THIS ONE:
rails g migration AddExperimentRefToLogs experiment:references

rake db:migrate
```

### Establish Model Relationships

We now need to add our relationships to our models:

```ruby
# scientist.rb
class Scientist < ActiveRecord::Base
  after_initialize :default_discipline

  has_many :experiments, dependent: :destroy

  private

  def default_discipline
    self.discipline ||= "General Science"
  end
end
```

```ruby
# experiment.rb
class Experiment < ActiveRecord::Base
  belongs_to :scientist
  has_many   :logs, dependent: :destroy
end
```

```ruby
# log.rb
class Log < ActiveRecord::Base
  belongs_to :experiment
end
```

As expected, Scientist has_many Experiments, and Experiment has_many 
Logs.

Notice in the Scientist model, we set a fallback for every scientist to 
have `"General Science"` value for the discipline key if none is 
provided. 

We do this using the after_initialize method from ruby - it 
runs whatever method given, after the model has been initialized 
(important because otherwise the instance would not have a method 
`#discipline=`). 

We also use the orEquals operator from ruby. It first checks if the 
variable is anything but `false` or `nil`. If it is, then it keeps that
value, otherwise, it assigns it to the value right of the operator.

Think of it like this:

`a || a = b`

We've also added `dependent: :destroy`, meaning to remove them if the
parent resource is removed. Don't want a paper trail, amiryte?!

### Nested Routes

We now have our relationships set up in our database. Now, every 
scientist has a list of experiments, which each have a list of logs.

We now want to set up our routes based on this kind of inheritance. 

__Remember__: We want to keep things RESTful.

What that means is for the Scientist with the id of 3, we should get all
his/her experiments at: 

`www.fishe.org/scientists/3/experiments`

And for that scientist's experiment with the id of 7, we should access 
all logs at:

`www.fishe.org/scientists/3/experiments/7/logs`

#### RESTful Questions:

1. What is the route to get all scientists?
2. What would our route be to post new experiments by a scientist with 
   the id of 5?
3. What would the route be for editing a specific log where 
   experiment_id = 3 & scientist_id = 5?
4. What would the route be to find ALL experiments?

### Our Routes

Let's take a look at what we're hoping for:
```
Verb   URI Pattern                                                             Controller#Action
GET    /                                                                       static_pages#index
POST   /scientists/:scientist_id/experiments/:experiment_id/logs(.:format)     logs#create
GET    /scientists/:scientist_id/experiments/:experiment_id/logs/:id(.:format) logs#show
DELETE /scientists/:scientist_id/experiments/:experiment_id/logs/:id(.:format) logs#destroy
POST   /scientists/:scientist_id/experiments(.:format)                         experiments#create
GET    /scientists/:scientist_id/experiments/new(.:format)                     experiments#new
GET    /scientists/:scientist_id/experiments/:id/edit(.:format)                experiments#edit
GET    /scientists/:scientist_id/experiments/:id(.:format)                     experiments#show
PATCH  /scientists/:scientist_id/experiments/:id(.:format)                     experiments#update
PUT    /scientists/:scientist_id/experiments/:id(.:format)                     experiments#update
DELETE /scientists/:scientist_id/experiments/:id(.:format)                     experiments#destroy
GET    /scientists(.:format)                                                   scientists#index
POST   /scientists(.:format)                                                   scientists#create
GET    /scientists/new(.:format)                                               scientists#new
GET    /scientists/:id/edit(.:format)                                          scientists#edit
GET    /scientists/:id(.:format)                                               scientists#show
PATCH  /scientists/:id(.:format)                                               scientists#update
PUT    /scientists/:id(.:format)                                               scientists#update
DELETE /scientists/:id(.:format)                                               scientists#destroy
GET    /experiments(.:format)                                                  experiments#index
```

Holy Human Experiments that's a lotta routes!

Now this may seem intimidating, but let's really look at what we're
asking for.

1. A full resource for scientists
2. A nested resource for experiments without `experiments#index`, which
   has been separated
3. A partial resource for Logs nested within Experiments. We're using 
   only show, create, and destroy.
4. A root page (already done for us) giving us our static homepage.

Let's begin with the route outside of the nesting: `experiments#index`

Create a GET route for the index action:

`get 'experiments', to: 'experiments#index'`

And might as well create an action in our controller to use the page.\

```ruby
# experiments_controller.rb

class ExperimentsController < ApplicationController

  def index
    @experiments = Experiment.all
  end
end
```

### Blocks in Our Routes

Generally, blocks stop you from accessing routes in life. But not in 
ruby.

Blocks help us organize our routes and show inheritance within our 
routes.  Remember, we can always pull things out if we want, but if we
want access to the parent model, nested routes can really help us out.

Let's first create our scientists resource:

``` ruby
# routes.rb

  resources :scientists
```

Go ahead and `rake routes`. 

We still have no nesting, but let's add the rest of our experiments 
routes, and see how we can use blocks to create nested routes.

```ruby
# routes.rb

  resources :scientists do
    resources :experiments, except: :index
  end
```

By simply surrounding our new resource in a block, we've nested our 
experiments within scientists!

Also, take note of the `except:` method - we're excluding index from the
nest, because we assume the scientists#show page will show all
experiments by that scientist. 

Now, for our final resource, logs:

```ruby
# routes.rb

  resources :scientists do
    resources :experiments, except: :index do
      resources :logs, only: [:show, :destroy, :create]
    end
  end
```

We expect our form for adding new logs will be on the Experiment show 
page. And due to time constraints, we won't be able to get to 
update/edit logs today.

### Controllers Serving Nested Data

Now all we need to do is build out our controllers!

For now, let's stick to `index` and `show` routes.

We now have access to all kind of data: let's see how we bring it in, 
starting with the scientists controller.

```ruby
class ScientistsController < ApplicationController

  def index
    @scientists = Scientist.all
  end

  def show
    @scientist = Scientist.find(params[:id])
    @experiments = @scientist.experiments
  end
end
```

Our index looks like any other, but notice that in show, we're grabbing
all experiments of the specific scientist!

Now, in experiments, we can do the reverse!

```ruby

```











