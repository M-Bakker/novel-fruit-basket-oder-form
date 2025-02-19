
function Orderform({fruitCounts}) {

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(fruitCounts)

        const formData = new FormData(e.target);
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit} method="POST">
                <label htmlFor="firstname">Voornaam:</label>
                <input type="text" id="firstname" name="firstname" required/>
                <br/><br/>
                <label htmlFor="lastname">Achternaam:</label>
                <input type="text" id="lastname" name="lastname" required/>
                <br/><br/>
                <label htmlFor="age">Leeftijd:</label>
                <input type="number" id="age" name="age" required/>
                <br/><br/>
                <label htmlFor="zipcode">Postcode:</label>
                <input type="text" id="zipcode" name="zipcode" required/>
                <br/><br/>
                <label htmlFor="delivery-frequency">Bezorgfrequentie:</label>
                <select id="delivery-frequency" name="delivery-frequency" required>
                    <option value="daily">Dagelijks</option>
                    <option value="weekly">Wekelijks</option>
                    <option value="monthly">Maandelijks</option>
                </select>
                <br/><br/>
                <fieldset>
                    <legend>Bezorgtijd:</legend>
                    <label htmlFor="daytime">Overdag</label>
                    <input type="radio" id="daytime" name="delivery-time" value="daytime" required/>
                    <br/>
                    <label htmlFor="evening">'s Avonds</label>
                    <input type="radio" id="evening" name="delivery-time" value="evening" required/>
                </fieldset>
                <br/>
                <label htmlFor="comment">Opmerking:</label>
                <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
                <br/><br/>
                <label htmlFor="agreement">
                    <input type="checkbox" id="agreement" name="agreement" required/> Ik ga akkoord met de voorwaarden
                </label>
                <br/><br/>
                <button type="submit">Verzend</button>
            </form>
        </div>
    );
}

export default Orderform;

