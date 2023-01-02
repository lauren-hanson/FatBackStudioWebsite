import "./PopUpTest"

export const PopUpTest = () => {

    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

    return (
        <>
            <button class="open-button" onclick={openForm()}>Open Form</button>


            <div class="form-popup" id="myForm">

                <form action="/action_page.php" class="form-container">
                    <h1>Login</h1>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onclick={closeForm()}>Close</button>

                </form>
            </div>

            <button class="open-button" onclick={openForm()}>Open Form</button>


            <div class="form-popup" id="myForm">
                <form action="/action_page.php" class="form-container">
                    <h1>Login</h1>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onclick={closeForm()}>Close</button>
                </form>
            </div>
        </>)
}