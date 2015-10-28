var swig  = require('swig');
swig.renderFile('/template/template.html', {
    pagename: 'awesome people',
    authors: ['Paul', 'Jim', 'Jane']
});