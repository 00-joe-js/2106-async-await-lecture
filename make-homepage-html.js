module.exports = (adjectives, names, currentEntries) => {

    const adjectiveOptions = adjectives.map(adj => {
        return `<option value="${adj}">${adj}</option>`
    }).join("");
    const nameOptions = names.map(name => {
        return `<option value="${name}">${name}</option>`
    }).join("");

    const entryItems = currentEntries.map(fullName => {
        return `<li>${fullName}</li>`;
    }).join("");

    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Name-O-Rama</title>
                <link rel="stylesheet" type="text/css" href="/thestylez.css" />
            </head>
            <body>
                <section>
                    <form method="POST" action="/submit-name">
                        <div>
                            <h2>Pick an adjective</h2>
                            <select name="theAdjective">${adjectiveOptions}</select>
                        </div>
                        <div>
                            <h2>Pick a name</h2>
                            <select name="theName">${nameOptions}</select>
                        </div>
                        <button type="submit">Send it up!</button>
                    </form>
                </section>
                <section>
                    <h1>Look what we got so far:</h1>
                    <ul>${entryItems}</ul>
                </section>
            </body>
        </html>
    `;
};