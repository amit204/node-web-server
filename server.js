const express = require('express');
const hbs = require('hbs');

var app = express();
const port = process.env.PORT  || 3000;
hbs.registerPartials(__dirname+ '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+ '/public'));
app.use((req, res, next) => {
next();
});

hbs.registerHelper('getCurrentyear', () =>{
return  new Date().getFullYear();
});
hbs.registerHelper('screamit', (text) =>{
    return  text.toUpperCase();
    });
app.get('/', (req, res) => {
    // res.send('<h1>hello world</h1>');
    res.render('home.hbs', {
        pagetitle: 'home page',
        pagetext: 'welcome to home page',
        
    });
});
app.get('/about',(req, res) =>{
    res.render('about.hbs', {
        pagetitle: 'about us apge',
       
    });
});
app.get('/bad', (req, res) => {
res.send({
 errorMessage: 'unable to handle request'
})
});

app.listen(port, () =>{
    console.log(`server is up on port ${port}`);
}); 