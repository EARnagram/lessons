User.destroy_all
Fish.destroy_all

User.create([
  {
    name: "Ezra",
    phone_number: "5554445555",
    password: "abc123",
    password_confirmation: "abc123"
  },
  {
    name: "Jenn",
    phone_number: "5553335555",
    password: "abc123",
    password_confirmation: "abc123"
  },
  {
    name: "Dorgus",
    phone_number: "4445555",
    password: "abc123",
    password_confirmation: "abc123"
  },
])

Fish.create([
  { name: "Hawaiian Shirt", category: "Clothing" },
  { name: "Lil' Trout",     category: "Fish" },
  { name: "Firestone Tire", category: "Trash" },
  { name: "Flounder",       category: "Fish" },
  { name: "Jimmy Hoffa",    category: "Corpse" }
])

puts "Db seeded with #{Fish.count} fishes, and #{User.count} users."
