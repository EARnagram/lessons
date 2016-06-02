# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Scientist.destroy_all

scientists = Scientist.create([
  {name: "Horg Lycanthropolyp", discipline: "Moon Studies"},
  {name: "Etheline Methyline", discipline: "Expedient Anesthetics"},
  {name: "Alistair M. Brungus", discipline: "Brungling Botany"}
])

scientists[0].experiments.create([
  {
    name: "Moon Blindness",
    summary: "Testing whether staring at the sun will blind test subjects in time.",
    budget: 65000
  }, {
    name: "Moon Breathing",
    summary: "Leave subjects on moon to see if they can breathe.",
    budget: 21500000
  }
])

scientists[1].experiments.create([
  {
    name: "Anesthetic Dieting",
    summary: "Give anesthetics to patients when feeling hunger to reduce cravings.",
    budget: 105000
  }
])

scientists[2].experiments.create([
  {
    name: "Brungle Jungle",
    summary: "Leave test subjects to brungle in the jungle.",
    budget: 40000
  }, {
    name: "Brunglese Brungling",
    summary: "Check the effect of Brunglese immersion on test subjects.",
    budget: 51500000
  }
])

scientists[0].experiments[0].logs.create([
  {
    subject_name: "Kelly Olynyk",
    weight: 275,
    treatments: 2,
    comment: "Says it's tough to stay up at night, even when staring into the sun. I prescribed him some anti-slumber medication.",
    deceased: false
  },
  {
    subject_name: "Kelly Olynyk",
    weight: 275,
    treatments: 4,
    comment: "Dude's totally blind. Can't catch a pass to save his life.",
    deceased: false
  },
  {
    subject_name: "Kelly Olynyk",
    weight: 275,
    treatments: 9,
    comment: "Eyes are totally white - I consider this experiment a success.",
    deceased: false
  },
  {
    subject_name: "Mary Longlee",
    weight: 120,
    treatments: 2,
    comment: "She was blind before coming in, due to unrelated deathness.",
    deceased: true
  },
])

scientists[0].experiments[1].logs.create([
  {
    subject_name: "Margee Rok",
    weight: 182,
    treatments: 1,
    comment: "Couldn't breathe - totally died.",
    deceased: true
  },
  {
    subject_name: "Dwayne Schiznituz",
    weight: 157,
    treatments: 1,
    comment: "Couldn't breathe - totally died. Something tells me humans need O2.",
    deceased: true
  },
  {
    subject_name: "Cory Lorrie",
    weight: 140,
    treatments: 1,
    comment: "O2 seems more and more needed for humans. Died on moon quick.",
    deceased: true
  },
  {
    subject_name: "Jose Villenueva",
    weight: 160,
    treatments: 1,
    comment: "Hopeful at first, but couldn't breathe after about 5 minutes. We should try and find some swimmers for next test pool.",
    deceased: true
  },
])

scientists[1].experiments[0].logs.create([
  {
    subject_name: "Mark Brown",
    weight: 388,
    treatments: 1,
    comment: "Lost 12lbs in the first treatment. Thinning well.",
    deceased: false
  },
  {
    subject_name: "Mark Brown",
    weight: 358,
    treatments: 2,
    comment: "Lost 30lbs in the second treatment. Has trouble staying awake.",
    deceased: false
  },
  {
    subject_name: "Mark Brown",
    weight: 228,
    treatments: 3,
    comment: "Hard to tell how much mass was lost due to decay, but it seems anesthetics are a successful diet option.",
    deceased: true
  },
  {
    subject_name: "Porky Pig",
    weight: 591,
    treatments: 1,
    comment: "Treatment has little effect on cartoons.",
    deceased: false
  }
])

scientists[2].experiments[0].logs.create([
  {
    subject_name: "Brungle",
    weight: 333,
    treatments: 1,
    comment: "Brungle, brungle… BRUNGLE!",
    deceased: false
  },
  {
    subject_name: "Brungle",
    weight: 333,
    treatments: 2,
    comment: "BRRRRUUUUUUUUUUUNNNNNNNNNGGGGGGLLLLEEEE.",
    deceased: false
  },
  {
    subject_name: "Brungle",
    weight: 280,
    treatments: 3,
    comment: "Brungle?! Brungle brungle brungle!!",
    deceased: true
  },
  {
    subject_name: "Brungling Brungle",
    weight: 165,
    treatments: 29,
    comment: "Loves the jungle brungle!",
    deceased: false
  }
])

scientists[2].experiments[1].logs.create([
  {
    subject_name: "Brungle Brungle",
    weight: 173,
    treatments: 1,
    comment: "Brungle. Brungling. Brunglin.",
    deceased: false
  },
  {
    subject_name: "Brungle Brungle",
    weight: 171,
    treatments: 2,
    comment: "Brungling Brungling Brungling - BRUNGLE!?",
    deceased: false
  }
])

puts "Database seeded with #{Scientist.all.length} scientists, \
#{Experiment.all.length} experiments, and #{Log.all.length} logs."



