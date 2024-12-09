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
    <button
        on:click={() =>
            (intervalID = setInterval(intervalUpdate, $gridMap.timeStep))}
        >Start</button
    >
    <button on:click={() => clearInterval(intervalID)}>Stop</button>

    <div style="border-left:1px solid #000;height:40px"></div>

    <button on:click={() => setSelectedTile(Tiles.EMPTY)}>Empty</button>
    <button on:click={() => setSelectedTile(Tiles.FOREST)}>Forest</button>
    <button on:click={() => setSelectedTile(Tiles.FIRE)}>Fire</button>
    <button on:click={() => setSelectedTile(Tiles.CITY)}>City</button>
</div>

<style>
    .selector-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        margin: 5px;
    }
    .upper,
    .lower {
        display: flex;
        flex-direction: row;
    }
    button {
        border: black 1px solid;
    }
</style>
