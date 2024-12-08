<script>
    import { GRIDSIZEX, GRIDSIZEY, gridMap } from "../stores";

    let x = 0;
    let y = 0;
    $: home = $gridMap.grid[y][x];
    $: neighborFire = $gridMap.checkNeighboursFire(x, y);
    $: neighborSmoke = $gridMap.checkNeighboursSmoke(x, y);
    $: selfFire = home.isFire();
    $: selfSmoke = home.isSmoke();
</script>

<div class="info-container">
    <h1>Wild Fire Tracker</h1>
    <p>This is a tracker used to inform users about approaching wildfires.</p>
    <p>Enter Your Address</p>
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
    <h2>Safety Suggestions</h2>
    {#if neighborFire > 0}
        <p>
            There is fire in a neighboring area. Strongly consider evacuating!
        </p>
    {/if}
    {#if neighborSmoke > 0}
        <p>
            There is smoke in a neighboring area. Strongly consider staying
            indoors or evacuating! Keep an eye out for fire spreading to a
            neighboring area!
        </p>
    {/if}
    {#if selfFire}
        <h2>There is fire in the area. EVACUATE NOW!</h2>
    {/if}
    {#if selfSmoke}
        <p>
            There is smoke in the area. Strongly consider staying indoors or
            evacuating! Keep an eye out for fire spreading to a neighboring area
            or your current area!
        </p>
    {/if}
</div>

<style></style>
