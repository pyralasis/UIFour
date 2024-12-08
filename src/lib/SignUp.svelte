<script>
    import { GRIDSIZEX, GRIDSIZEY, gridMap } from "../stores";

    let x = 0;
    let y = 0;
    let email = "";
    let phone = "";
</script>

<div class="signup-container">
    <h1>Sign Up For Email and Text Notifications</h1>
    <p>
        Want emergency alerts? Enter your area, phone number and email to stay
        up to date!
    </p>
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
        <label for="email">Email </label>
        <input id="email" type="text" bind:value={email} />
    </div>
    <div class="signup-input">
        <label for="phone">SMS </label>
        <input id="phone" type="text" bind:value={phone} />
    </div>
    <button>Submit</button>
</div>

<style></style>
