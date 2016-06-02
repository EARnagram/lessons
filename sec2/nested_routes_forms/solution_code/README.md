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
4. Sending Flash Messages
5. Throw errors
6. Outro

---

### Expose the Experiments!

![](http://vignette1.wikia.nocookie.net/muppet/images/9/93/Labs.firepaper.jpg/revision/latest?cb=20060619164255)

You've been working at F.I.S.H.E. for a bit now, and you've come to 
realize these scientists are about as credible as their experiments
are groundbreaking. The worst of it is that they're hardly villanous - 
more wildly inept than anything!

It's time to force their hand; make them give you the data you want, 
__the way you want__, and expose the cold hard facts of their 
incompetence to the world.

### Using Nested Edit, Update, New, and Create Routes

Build 

Build Logs form together:

```
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

Have them create the basic form on Scientist:

```erb 
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
          <i class="icon-ok icon-white"></i> Add Scientist
        <% end %>
      </div>
      <div class="col-md-2">
        <%= link_to 'Back', scientists_path, class:"btn btn-danger" %>
      </div>
    </div>
  <% end %>
</div>
```



