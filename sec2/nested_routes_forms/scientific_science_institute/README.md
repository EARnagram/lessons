# The Science Institute for Scientific Human Experimentation

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
    2. setting Up Relationships
    3. Blocks in resources Routes
    4. Controllers Sending Data
    5. Corresponding Views

2. Forms, Validations, and Nesting
    1. Using Edit, Update, New, and Create Routes
    2. Using params
    3. Validations for Models
    4. Sending Flash Messages
    5. Throw errors
    6. Outro


### Welcome to the Institute: Don't Worry, it's Safe!

![](https://rahmalamadingdong.files.wordpress.com/2015/09/the-cabinet-of-dr-caligari.jpg?w=960)

> On behalf of the entire institute, I want you to know we're really
> excited to have an esteemed web developer like yourself help us keep
> track of all our data. Hell, someone has to!
>
> But really, I'm sure you'll find there's nothing worth suing over,
> just make sure you turn in that NDA before you clock in…

You've just been hired to keep track of every scientist's experiments
and data for the infamous Science Institute for Scientific Human 
Experiments.

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

















