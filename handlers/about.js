module.exports = (req, res) => {

    /*
    // Rendern des `index` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    */
    res.render('about', {
        title:'about me',
        greeting:'about me',

        name: 'Christiane',
        hobbies: 'Klavier spielen',
        lieblingsserie: 'Sherlock'


    });
};
