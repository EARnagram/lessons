var locus = require('locus'); // if needed, `eval(locus);`

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/promises_lab');

var childSchema = new mongoose.Schema({
  name:   String,
  gender: { type: String, enum: ['M', 'F'] }
});

var Child = mongoose.model('Child', childSchema);

var dadSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  good: Boolean,
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Child' }]
});

var Dad = mongoose.model('Dad', dadSchema);

var kids = [
  { name: "Emily", gender: "F" },
  { name: "Margaret", gender: "F" },
  { name: "Bobby", gender: "M" },
  { name: "Genise", gender: "F" }
];

var badDads = [
  { name: "Ahnold", occupation: 'Mattress Salesman', good: false},
  { name: "Daniel Hillard", occupation: 'Voice Actor', good: false},
  { name: "Peter", occupation: 'Corporate Lawyer', good: false}
];


// Change to promises
Child.remove({}, function(err) {
  if (err) console.log(err);
  Child.create(kids, function(err, children) {
    console.log("Kids created: ", children);
    // Use promises to create Dads as well - be sure they have children!
    // HINT: You may need to change the `badDads` array…
    mongoose.disconnect();
  });
});

