const express = require('express');
const mongoose = require('mongoose');
const AdminBro = require('admin-bro');
const session = require('express-session')
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose')

const app = express()

app.use(session({ 
  secret:  "secret",
  resave: true,
  saveUninitialized: true
}));


AdminBro.registerAdapter(AdminBroMongoose)

const Food = mongoose.model('Food', { name: String, recipe: String, cost: String })
const Admin = mongoose.model('Admin', { name: String, email: String})

const run = async () => {
  
  const mongooseDB = await mongoose.connect('mongodb+srv://Elman:123456789n@test.deg0b.mongodb.net/Test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

  const adminBro = new AdminBro({
    databases: [mongooseDB],
    rootPath: '/admin'
  })

  const ADMIN = {
  email: 'test@example.com',
  password: 'password',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN
    }
    return null
  },
  cookieName: 'adminbro',
  cookiePassword: 'somePassword',
})

  app.use(adminBro.options.rootPath, router)
}

run()

app.get("/", function (req, res){
   res.render('landing.ejs');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
console.log("Server Has Started!");
});