<script>
    import { gridMap, selectedTileType, Tiles } from "../stores";
    import { onMount, onDestroy } from "svelte";

    export let coordsX;
    export let coordsY;

    $: gridData = $gridMap.grid;
    $: tileData = $gridMap.grid[coordsY][coordsX];
    $: currentTileType = tileData.tileType;

    function getColor(tileType) {
        switch (tileType) {
            case Tiles.EMPTY:
                return "white";
            case Tiles.FOREST:
                return "green";
            case Tiles.FIRE:
                return "orange";
            case Tiles.WEAK_SMOKE:
                return "lightgrey";
            case Tiles.MEDIUM_SMOKE:
                return "darkgrey";
            case Tiles.STRONG_SMOKE:
                return "grey";
            case Tiles.CITY:
                return "blue";
        }
    }

    // Got this event stuff from chat gpt. Detects if the left mouse button is up or down independent of any elements
    let isLeftButtonPressed = false;
    // Function to check for the left mouse button on mousedown
    const checkLeftButtonDown = (event) => {
        if (event.button === 0) {
            // 0 corresponds to the left mouse button
            isLeftButtonPressed = true;
        }
    };
    // Function to check for the left mouse button on mouseup
    const checkLeftButtonUp = (event) => {
        if (event.button === 0) {
            // 0 corresponds to the left mouse button
            isLeftButtonPressed = false;
        }
    };
    // Set up the global event listeners when the component mounts
    onMount(() => {
        window.addEventListener("mousedown", checkLeftButtonDown);
        window.addEventListener("mouseup", checkLeftButtonUp);
    });
    // Clean up the event listeners when the component is destroyed
    onDestroy(() => {
        window.removeEventListener("mousedown", checkLeftButtonDown);
        window.removeEventListener("mouseup", checkLeftButtonUp);
    });
    console.log(currentTileType);
</script>

<div
    class="tile"
    style="background-color: {getColor(currentTileType)};"
    on:mousedown={() => {
        currentTileType = $selectedTileType;
        gridData[coordsY][coordsX].tileType = currentTileType;
        $gridMap.grid = gridData;
    }}
    on:mouseenter={() => {
        if (isLeftButtonPressed) {
            currentTileType = $selectedTileType;
            gridData[coordsY][coordsX].tileType = currentTileType;
            $gridMap.grid = gridData;
        }
    }}
    on:drag={() => {
        return false;
    }}
>
    {Math.floor(tileData.smokeProgress / 10)}
</div>

<style>
    .tile {
        border: black 1px solid;
        width: 20px;
        height: 20px;
        /* font-size: 10px; */
        user-select: none;
    }
</style>
