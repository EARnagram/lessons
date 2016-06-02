# We Want the Truth!

![](https://cdn.idevie.com/wp-content/uploads/2013/12/d1e19_tutorials_mad-scientist-flatten-550x364.jpg)

## Forms Validations and Nesting

| __Lesson Objectives__ |
| :--- |
| Create nested forms |
| Use validations on your Model and forms to ensure proper user interaction |
| Use flash messages to inform a poor submission |
| Throw errors when hiding webpages |
| Access `params` |


#### Road Map

1. Expose the Experiments!
2. Using Edit, Update, New, and Create Routes
3. Validations for Models
4. Errors Handling in Rails
5. Sending Flash Messages
6. Outro

---

### Expose the Experiments!

![](http://vignette1.wikia.nocookie.net/muppet/images/9/93/Labs.firepaper.jpg/revision/latest?cb=20060619164255)

You've been working at F.I.S.H.E. for a bit now, and you've come to
realize these scientists are about as credible as their experiments
are groundbreaking. The worst of it is that they're hardly villainous -
more wildly inept than anything!

It's time to force their hand; make them give you the data you want,
__the way you want__, and expose the cold hard facts of their
incompetence to the world.

> PS: I already added in all the destroy methods with buttons. This lesson is
more about forms, so I don't cover the destroy methods in detail.

### Using Nested Edit, Update, New, and Create Routes

In order to use these routes, we'll need to have a form for the wacko scientists
to fill out.

Let's start on the new/edit scientist's form!

#### Adding and Editing a Scientist

Since we already have a controller, and all our routes are already defined,
we'll be bouncing back and forth between views and controllers.

First, the controller!

We'll first need to add the 4 methods to the scientist controller.

```ruby
#scientists_controller.rb
def new
  @scientist = Scientist.new
end

def create
  @scientist = Scientist.new scientist_params
  if @scientist.save
    redirect_to scientists_path
  else
    render 'new'
  end
end

def edit
  @scientist = Scientist.find(params[:id])
end

def update
  @scientist = Scientist.find(params[:id])
  if @scientist.update_attributes(scientist_params)
    redirect_to scientist_path
  else
    render 'edit'
  end
```

These routes aren't any different than our previous applications, so
we'll be able to build a simple form that's shared by the two views,
`new.html.erb` & `edit.html.erb`.

In `scientists/_form.html.erb`, we need to make a form that does not favor
either edit or new, but works for both.

```html
<!-- scientists/_form.html.erb -->
<div class="add-background">
  <%= form_for @scientist do |f| %>
    <div class="row">
      <div class="field col-md-3">
        <%= f.label "Full Name: " %><br>
        <%= f.text_field :name %>
      </div>
      <div class="field col-md-3">
        <%= f.label "Discipline: " %><br>
        <%= f.text_field :discipline %>
      </div>
      <div class="field col-md-3">
        <%= f.label "Spooky: " %><br>
        <%= f.check_box :spooky %>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-2">
        <%= button_tag(type: 'submit', class: "btn btn-success") do %>
          <i class="icon-ok icon-white"></i> Submit
        <% end %>
      </div>
      <div class="col-md-2">
        <%= link_to 'Back', scientists_path, class:"btn btn-danger" %>
      </div>
    </div>
  <% end %>
</div>
```

And in the `new.html.erb` and `edit.html.erb`, we must `<%= render 'form' %>`
where we want the form.

#### Adding and Editing a Log

Because the log is a nested resource, the form and controller becomes a bit more
complicated.

First, we create our controller actions, along with our strong params as we've
done in the past:

```ruby
class LogsController < ApplicationController

  def new
    @experiment = Experiment.find(params[:experiment_id])
    @scientist = @experiment.scientist
    @log = @experiment.logs.new
  end

  def show
    @log = Log.find(params[:id])
    @experiment = @log.experiment
    @logs = @experiment.logs.where(subject_name: @log.subject_name)
    @scientist = @experiment.scientist
  end

  def create
    @experiment = Experiment.find(params[:experiment_id])
    @scientist = @experiment.scientist
    @log = @experiment.logs.new(log_params)
    if @log.save
      redirect_to scientist_experiment_path(@scientist, @experiment), notice: "Log was created."
    else
      render 'new'
    end
  end

  private

    def log_params
      params.require(:log).permit(:subject_name, :weight, :treatments, :deceased, :comment)
    end
end
```

Notice how many other instance variables we need for our webpage.  When we're
using a nested resource, we often want access to the parent model instances.

The main difference for our nested resource specifying the url for our route:
`scientist_experiment_logs_path(@scientist, @experiment)`. This is the main
reason for needing access to our parent instances.

See in the form below where else we use info from our instance variables,
`@experiment` and `@scientist`.

```html
<div class="container logs">
  <h1>Add New Log to The <%= @experiment.name %> Experiment</h1>
  <%= form_for @log, url: scientist_experiment_logs_path(@scientist, @experiment) do |f| %>
  <div class="row">
    <div class="col-md-offset-1">
      <div class="field col-md-3">
        <%= f.label "Subject Name: " %><br>
        <%= f.text_field :subject_name %>
      </div>
      <div class="field col-md-3">
        <%= f.label "Weight: " %><br>
        <%= f.number_field :weight %>
      </div>
      <div class="field col-md-3">
        <%= f.label "Treatments: " %><br>
        <%= f.number_field :treatments %>
      </div>
      <div class="field col-md-2">
        <%= f.label "Deceased? " %>
        <%= f.check_box :deceased %>
      </div>
    </div>
  </div>
  <br>
  <div class="row">
    <div class="col-md-offset-1">
      <div class="field col-md-10 exp-log-comment-text-field">
        <%= f.label "Comment: " %>
        <%= f.text_area :comment, class: 'exp-log-comment-text-area' %>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-2">
      <%= button_tag(type: 'submit', class: "btn btn-success") do %>
        <i class="icon-ok icon-white"></i> Add Log
      <% end %>
    </div>
  </div>
  <% end %>
</div>
```

#### Adding and Editing an Experiment (with nested forms for Logs!)

Let's add our methods just like we did with the previous controllers:

```ruby
# experiments_controller.rb
  def new
    @scientist = Scientist.find(params[:scientist_id])
    @experiment = @scientist.experiments.new
    @log = @experiment.logs.new
  end

  def create
    @scientist = Scientist.find(params[:scientist_id])
    @experiment = @scientist.experiments.new(experiment_params)
    if @experiment.save
      redirect_to scientist_path(params[:scientist_id])
    else
      render 'new'
    end
  end

  def edit
    @experiment = Experiment.find(params[:id])
  end

  def update
    @experiment = Experiment.find(params[:id])
    if @experiment.update_attributes(experiment_params)
      redirect_to scientist_path(@experiment.scientist_id)
    else
      render 'edit'
    end
  end
```

The form for editing is very similar to the previous forms.

```html
<div class="container experiments">
  <h1>Edit Experiment</h1>

  <div class="add-background">
    <%= form_for @experiment, url: scientist_experiment_path(@experiment.scientist_id, @experiment), method: :patch do |f| %>
      <div class="row">
        <div class="field col-md-3">
          <%= f.label "Name of Experiment: " %><br>
          <%= f.text_field :name %>
        </div>
        <div class="field col-md-3">
          <%= f.label "Budget: " %><br>
          <%= f.number_field :budget %>
        </div>
        <div class="field col-md-6">
          <%= f.label "Summary: " %><br>
          <%= f.text_area :summary %>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-2">
          <%= button_tag(type: 'submit', class: "btn btn-success") do %>
            <i class="icon-ok icon-white"></i> Edit Experiment
          <% end %>
        </div>
        <div class="col-md-2">
          <%= link_to 'Back', scientist_path(@experiment.scientist_id), class:"btn btn-danger" %>
        </div>
      </div>
    <% end %>
  </div>
</div>
```

Form for creating Experiments AND the Experiment's first Log - nested routes!!!

First, add to the `Experiment` model:

```ruby
class Experiment < ActiveRecord::Base
  belongs_to :scientist
  has_many   :logs, dependent: :destroy

  # needed for nested forms! allow_destroy is a method to make the
  # #destroy parent cascades to children
  accepts_nested_attributes_for :logs, allow_destroy: true
end
```

Now we've added a method of `.logs_attributes=` to `Experiment` so we can
create and edit an instance's logs.

In the controller, we'll need a robust `experiments_params` method.

```ruby
# experiments controller
private

def experiment_params
  params.require(:experiment).permit(
    :name,
    :summary,
    :budget,
    logs_attributes: [
      :subject_name,
      :weight,
      :treatments,
      :deceased,
      :comment
    ]
  )
end
```

Notice the nested logs_attributes - this is the key to the hash full of the
first log's attributes.

Now for this ridiculously long form - pay attention to to the shift to logs in
the middle.

```html
<div class="container experiments">
  <h1>Add New Experiment for Dr. <%= @scientist.name %></h1>
  <div class="add-background">
    <br>
    <%= form_for @experiment, url: scientist_experiments_path(@scientist), method: :post do |f| %>
      <div class="row">
        <div class="field col-md-3">
          <%= f.label "Name of Experiment: " %><br>
          <%= f.text_field :name %>
        </div>
        <div class="field col-md-3">
          <%= f.label "Budget: " %><br>
          <%= f.text_field :budget %>
        </div>
        <div class="field col-md-6">
          <%= f.label "Summary: " %><br>
          <%= f.text_area :summary %>
        </div>
      </div>
      <br>
      <%= f.fields_for :logs do |log_form| %>
        <div class="row">
          <div class="col-md-offset-1">
            <h3 class="col-md-3">First Log: </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-offset-1">
            <div class="field col-md-3">
              <%= log_form.label "Subject Name: " %><br>
              <%= log_form.text_field :subject_name %>
            </div>
            <div class="field col-md-3">
              <%= log_form.label "Weight: " %><br>
              <%= log_form.text_field :weight %>
            </div>
            <div class="field col-md-3">
              <%= log_form.label "Treatments: " %><br>
              <%= log_form.number_field :treatments %>
            </div>
            <div class="field col-md-2">
              <%= log_form.label "Deceased? " %><br>
              <%= log_form.check_box :deceased %>
            </div>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-md-offset-1">
            <div class="field col-md-10 exp-log-comment-text-field">
              <%= log_form.label "Comment: " %>
              <%= log_form.text_area :comment, class: 'exp-log-comment-text-area'  %>
            </div>
          </div>
        </div>
      <% end %>
      <br>
      <div class="row">
        <div class="col-md-2">
          <%= button_tag(type: 'submit', class: "btn btn-success") do %>
          <i class="icon-ok icon-white"></i> Add Experiment
          <% end %>
        </div>
        <div class="col-md-2">
          <%= link_to 'Back', "/scientists/#{ @experiment.scientist_id }", class:"btn btn-danger" %>
        </div>
      </div>
    <% end %>
  </div>
</div>
```

Using the `.fields_for` method, we can open our form to the creation of a Log.
We use `.fields_for` very similarly to a usual `form_for` - but instead of
passing it an instance variable, we pass the pluralized model name as a method.

In our case, we pass `:logs`. From there, everything works very similarly to
a general rails form.

### Model Validations

Validations ensure our user input is what we expect. There are TONS of different
[built in model validators](http://guides.rubyonrails.org/active_record_validations.html#common-validation-options)
given to us by rails. Certainly too many to go through, but we'll use a few of
the most common in our app.

Let's say I want to keep the FISHE scientists from writing too little or too
much in their log's comment to avoid reticence and data dumps at the same time.

I can use a very common validator known as `length:` along with `in:`.

Let's look at how we use it in our model:

```ruby
class Log < ActiveRecord::Base
  belongs_to :experiment

  validates :comment, length: {
    in: 7..600,
    too_short: "must have at least %{count} characters",
    too_long: "must have at most %{count} characters"
  }
end
```

We use `validates` when using a rails validator, along with whatever field we
want validated, in this case `:comment`.

Next, within `length:`'s brackets, we use the `in:` method, to determine what
length we want our comment within. In this case, we're setting it to an
inclusive range of 7 - 600. We then supply error messages with `too_short:` and
`too_long:`. These messages will be prepended with the field name.

For instance, if we supplied a comment with only 5 characters, it would tell us:

`Comment must have at least 7 characters`

We'll get into displaying errors to the user soon, but first, let's look at a
few more validators.

In `scientist.rb`, let's add a couple more common validators:

```ruby
class Scientist < ActiveRecord::Base
  after_initialize :default_discipline

  has_many :experiments, dependent: :destroy

  validates :name, presence: true, uniqueness: true

  private

  def default_discipline
    self.discipline ||= "General Science"
  end
end
```

`presence: true` and `uniqueness: true` are two of the most used validators in
rails projects. One ensures there's a value for the given field, the other makes
sure there aren't multiple instances with the same value for the given field,
respectively.

#### Custom Methods

![](http://s.doctoroz.com/video/DrOz-105-final.jpg)

What if what we want to validate isn't an option from Rails!?

We can write our own private validator method right into a model (if we
want it shared across models we'd need to make a helper validator).

Let's say F.I.S.H.E. has had enough of Dr. Oz and doesn't want anymore of his
crappy "get healthy quick" experiments. Well we can ensure Dr. Oz doesn't get
through our validator!

```ruby
#scientist.rb
#...
  validate :no_more_dr_oz

  private

  def default_discipline
    self.discipline ||= "General Science"
  end

  def no_more_dr_oz
    if self.name == "Mehmet Oz"
      errors.add(:name, "- No more Dr. Oz, he's beneath even our standards.")
    end
  end
end
```

Now, whenever we try and make a new scientist with the name 'Mehmet Oz', we
block the user, telling them "- No more Dr. Oz, he's beneath even our standards."

We did this by using our `no_more_dr_oz` method in `validate` (notice the
singular). Now rails will check the `:name` against this validator.

### Intro to Error Handling in Rails

So we've written our validators and now when we try and submit a form that
doesn't pass, we re-render the form.

__Wouldn't it be nice to tell the user why the form was re-rendered?__

Well, before we get into that, we should look at where errors come from in
rails.

#### `errors` on Instances

Let's go ahead and go into `rails console`. Start off by creating a scientist
that __does not__ pass our validations.

Type in this code and see what you get:

```
dr_oz = Scientist.new(name: "Mehmet Oz")

dr_oz.errors

dr_oz.valid?

dr_oz.save

dr_oz.save!

dr_oz.errors

dr_oz.errors.full_messages
```

Our `dr_oz` instance won't be added to our database - HOORAY FOR SCIENCE!

When an instance doesn't pass a validation, an error is added to the model's
instance in an array accessed by the `.errors` method.

Then, we can access the messages by using the `full_messages` method!

But how will we use this in our views?

Let's make use of these errors in our scientist form:

```html
<!-- scientists/_form.html.erb -->
<div class="add-background">
  <% @scientist.errors.full_messages.each do |message| %>
    <p class="text-danger"><strong><%= message %></strong></p>
  <% end %>
  <%= form_for @scientist do |f| %>
    <div class="row">
    <!-- … -->
```

When a form is filled in incorrectly, the errors array will be populated. Then,
when we re-render the page, the errors will print out in red (using the class
`text-danger` from bootstrap) above the form.

##### Implement error checking

Error checking is most useful on forms. We just implemented error checking on
the Scientist form.

Take __5 minutes__ to add error checking to the following pages:

1. `logs/new.html.erb`
2. `experiments/edit.html.erb`
3. `experiments/new.html.erb`

### Sending Flash Messages

Often as users we're left in the dark as to _why_ we were redirected to another
page.

For instance, let's say we submit a form that passes all validations and we're
redirected to an index page. As users, we may not know if our form went through!

Wouldn't it be great if we could let the user know!?

Your first instinct may be to create an instance variable on the create route…

```ruby
# THIS IS WRONG
#scientists_controller.rb
def create
  @scientist = Scientist.new scientist_params
  @message = "Scientist was created."
  if @scientist.save
    redirect_to scientists_path
  else
    render 'new'
  end
end
```

Then in `scientists/show.html.erb`:

```html
<!-- STILL VERY WRONG -->
<!-- app/views/scientists/show.html.erb -->
Message: <%= @message %>
```

Why won't this work?!

> Context. We redirect to a different page. A redirect is a separate GET
request. Instance variables exist only on one request. They don't persist across
requests.

Luckily, rails has a built in way of dealing with this by storing messages in
sessions called `flash`.

`flash` is a hash that's created on one request, available through the next,
then destroyed. It was created to "flash" a message to the user and then go
away.

Replace the message instance variable with flash[:notice] to get a better idea:

```ruby
#scientists_controller.rb
def create
  @scientist = Scientist.new scientist_params
  flash[:notice] = "Scientist was created."
  if @scientist.save
    redirect_to scientists_path
  else
    render 'new'
  end
end
```

Then, in `views/scientists/show.html.erb`, replace the @message line with this:

```html
<!-- views/scientists/show.html.erb -->
<% flash.each do |type, message| %><!-- think of this as |key, value| -->
  <p><%= type %>: <%= message %></p>
<% end %>
```

Now, if there's multiple `flash` messages, we'll be able to show them all to
the user.

#### Flash Convention

Because `flash` is a hash, we could name our keys anything we want.

HOWEVER, we will not do that because it is not rails convention AND because
keeping a limited number of names can go a long way with CSS.

Conventionally, there are two flash messages: `alert` and `notice`.

Now we can give our flash messages an obvious styling using these key names!

```css
/* app/assets/stylesheets/application.css */
.flash {
  border: 1px solid black;
  padding: 1em;
  background: #eee;
}

.alert  {
  color: red;  
}

.notice {
  color: blue;
}
```

The only issue here is that we're only showing flash notices on our scientists'
show page.

By moving the flash messages underneath the navbar in the layout, we can share
the same flash message across our application.

```html
<!-- app/views/layouts/application.html.erb -->
  <!-- … -->
</nav>
<% flash.each do |type, message| %>
  <p class="flash <%= type %>"><%= message %></p>
<% end %>

<%= yield %>
<!-- … -->
```

#### Flash Shorthand

Writing out all these flash messages can get annoying - luckily, Rails gives us
an easier way.

```ruby
# scientists_controller.rb
def create
  @scientist = Scientist.new scientist_params
  if @scientist.save
    redirect_to scientists_path, notice: "Scientist was created." # how nice!
  else
    render 'new'
  end
end
```

Instead of writing `flash` over and over again, we write just the key name and
our message after our redirect. Nice!

#### Practice!

Add flash messages for our redirects!

1. Add `notice:` flashes for create and update redirects.
2. Add `alert:` flashes for destroy redirects.

### Outro - Goodbye F.I.S.H.E.

![](http://i.dailymail.co.uk/i/pix/2013/11/22/article-2511786-1993A32600000578-214_964x667.jpg)

Great job. Really, good work…

You did such a good job of documenting all these horrible experiments that all
the funding was pulled and now you don't have a job. Awesome.

Well, as in life, often what's best for the world is not best for your pocket
book. Let's at least see if we learned something.

##### Questions:

1. Where errors stored when a form doesn't pass validations?
2. What is `flash` and what problem does it solve?
3. How does one implement a custom validation?
4. What is the `accepts_nested_attributes_for` method used for?

#### References

[Rails Guides: Validations](http://guides.rubyonrails.org/active_record_validations.html)

[Rails Guides: Form Helpers](http://guides.rubyonrails.org/form_helpers.html)

[Rails Guides: Nested Resources](http://guides.rubyonrails.org/routing.html#nested-resources)
