<script>
    import { GRIDSIZEX, GRIDSIZEY, gridMap } from "../stores";

    let x = 0;
    let y = 0;
    $: home = $gridMap.grid[y][x];
    $: neighborFire = $gridMap.checkNeighboursFire(x, y) > 0;
    $: neighborSmoke = $gridMap.checkNeighboursSmoke(x, y) > 0;
    $: selfFire = home.isFire();
    $: selfSmoke = home.isSmoke();
    $: noAlerts = !selfFire && !selfSmoke && !neighborFire && !neighborSmoke;
</script>

<div class="info-container">
    <div class="description-container">
        <h1>Wildfire Tracker</h1>
        <p>
            This is a tracker used to inform users about approaching wildfires.
            It uses a Simulated Wildfire Map to show how wildfires and wildfire
            smoke can spread. It displays relevant information for your location
            in regard to any nearby fire or smoke. Select a tile type to draw on
            the map. The start button will begin the simulation. Fire spreads to
            trees. Smoke spreads to every tile. Smoke spreads from smoke and
            fire tiles. The display button toggles between none, fire, and smoke
            levels.
        </p>
    </div>

    <div class="address-container">
        <h2>Enter Your Address</h2>
        <div class="address-input">
            <label for="x-addr">X: </label>
            <input
                id="x-addr"
                type="number"
                min="0"
                max={GRIDSIZEX - 1}
                bind:value={x}
            />
        </div>
        <div class="address-input">
            <label for="y-addr">Y: </label>
            <input
                id="y-addr"
                type="number"
                min="0"
                max={GRIDSIZEY - 1}
                bind:value={y}
            />
        </div>

        <h2>Address Statistics</h2>
        <p>Fire Level: {home.fireProgress}</p>
        <p>Smoke Level: {home.smokeProgress}</p>
    </div>

    <div class="alerts-container">
        <h2>Safety Alerts</h2>
        {#if noAlerts}
            <div class="none">There are no immediate wildfire alerts.</div>
        {/if}
        {#if neighborFire}
            <div class="medium">
                There is fire in a neighboring area. Strongly consider
                evacuating!
            </div>
        {/if}
        {#if neighborSmoke}
            <div class="low">
                There is smoke in a neighboring area. Strongly consider staying
                indoors or evacuating! Keep an eye out for fire spreading to a
                neighboring area!
            </div>
        {/if}
        {#if selfFire}
            <div class="high">There is fire in the area. EVACUATE NOW!</div>
        {/if}
        {#if selfSmoke}
            <div class="medium">
                There is smoke in the area. Strongly consider staying indoors or
                evacuating! Keep an eye out for fire spreading to a neighboring
                area or your current area!
            </div>
        {/if}
    </div>
</div>

<style>
    .info-container {
        display: flex;
        flex-direction: column;
    }
    h1,
    h2,
    p {
        margin: 0;
    }
    .description-container {
        display: flex;
        flex-direction: column;
        flex-basis: 100px;
    }
    .address-container {
        display: flex;
        flex-direction: column;
        flex-basis: 150px;
    }
    .alerts-container {
        display: flex;
        flex-direction: column;
        flex-basis: 450px;
    }
    .none {
        display: flex;
        background-color: grey;
        opacity: 50%;
        border-radius: 5px;
        flex-grow: 2;
        margin: 10px;
        align-items: center;
        justify-content: center;
        padding: 0 100px;
    }
    .low {
        display: flex;
        background-color: yellow;
        opacity: 50%;
        border-radius: 5px;
        flex-grow: 2;
        margin: 10px;
        align-items: center;
        justify-content: center;
        padding: 0 100px;
    }
    .medium {
        display: flex;
        background-color: orange;
        opacity: 50%;
        border-radius: 5px;
        flex-grow: 2;
        margin: 10px;
        align-items: center;
        justify-content: center;
        padding: 0 100px;
    }
    .high {
        display: flex;
        background-color: red;
        opacity: 50%;
        border-radius: 5px;
        flex-grow: 2;
        margin: 10px;
        align-items: center;
        justify-content: center;
        padding: 0 100px;
    }
</style>
