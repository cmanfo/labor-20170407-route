module.exports = (req, res) => {

    /*
    // Rendern des `index` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    */
    res.render('index', {
        title: 'Hello',
        greeting: `Hello Stranger! Welcome to my World.`
    });
};
