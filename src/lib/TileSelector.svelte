<script>
    import { selectedTileType, Tiles, gridMap } from "../stores";

    const setSelectedTile = (tileType) => {
        $selectedTileType = tileType;
    };

    let myGridMap = $gridMap;
    let gridData = myGridMap.grid;
    $: a = $gridMap.grid[0][0].smokeProgress;
    let intervalUpdate = () => {
        myGridMap.updateGrid();
        // gridMap.set(myGridMap);
        $gridMap = myGridMap;
        console.log(myGridMap);
    };
    let intervalID;
</script>

<div class="selector-container">
    <div class="upper">
        <button
            on:click={() =>
                (intervalID = setInterval(intervalUpdate, $gridMap.timeStep))}
            >Start</button
        >
        <button on:click={() => clearInterval(intervalID)}>Stop</button>
    </div>
    <div class="lower">
        <button on:click={() => setSelectedTile(Tiles.EMPTY)}>Empty</button>
        <button on:click={() => setSelectedTile(Tiles.FOREST)}>Forest</button>
        <button on:click={() => setSelectedTile(Tiles.FIRE)}>Fire</button>
        <button on:click={() => setSelectedTile(Tiles.CITY)}>City</button>
    </div>
</div>

<style>
    .selector-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .upper,
    .lower {
        display: flex;
        flex-direction: row;
    }
</style>
