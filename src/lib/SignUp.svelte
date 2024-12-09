<script>
    import { GRIDSIZEX, GRIDSIZEY, gridMap } from "../stores";

    let x = 0;
    let y = 0;
    let email = "";
    let phone = "";
</script>

<div class="signup-container">
    <div class="left">
        <h1>Sign Up For Email and Text Notifications</h1>
        <p>
            Want emergency alerts? Enter your area, phone number and email to
            stay up to date!
        </p>
    </div>

    <div class="right">
        <div class="signup-input">
            <label for="x-addr">X: </label>
            <input
                id="x-addr"
                type="number"
                min="0"
                max={GRIDSIZEX - 1}
                bind:value={x}
            />
        </div>
        <div class="signup-input">
            <label for="y-addr">Y: </label>
            <input
                id="y-addr"
                type="number"
                min="0"
                max={GRIDSIZEY - 1}
                bind:value={y}
            />
        </div>

        <div class="signup-input">
            <label for="email">Email: </label>
            <input id="email" type="text" bind:value={email} />
        </div>
        <div class="signup-input">
            <label for="phone">SMS: </label>
            <input id="phone" type="text" bind:value={phone} />
        </div>
        <button>Submit</button>
    </div>
</div>

<style>
    button {
        border: black 1px solid;
        width: 108px;
        margin-left: auto;
    }
    .signup-container {
        display: flex;
        flex-direction: row;
        width: auto;
        justify-content: center;
        align-items: center;
    }
    .signup-input {
        width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: center;
    }
    input {
        width: 100px;
    }
    label {
        width: 100px;
        display: flex;
        justify-content: right;
        margin-right: 10px;
    }
    .right {
        display: flex;
        flex-direction: column;
        justify-content: right;
    }

    h1 {
        font-size: 40px;
        margin: 0;
        padding: 0;
    }
    p {
        display: flex;
        justify-content: left;
    }
</style>
