<script>
    import { gridMap, selectedTileType } from "../stores";
    import Tile from "./Tile.svelte";
    let myGridMap = $gridMap;
    let gridData = myGridMap.grid;
</script>

<div
    class="grid-container"
    on:drag={() => {
        return false;
    }}
>
    <!-- create the grid -->
    {#each gridData as row, y}
        <div
            class="row"
            on:drag={() => {
                return false;
            }}
        >
            {#each row as tile, x}
                <Tile coordsX={tile.x} coordsY={tile.y}></Tile>
            {/each}
        </div>
    {/each}
</div>

<style>
    .grid-container {
        display: flex;
        flex-direction: column;
    }
    .row {
        display: flex;
        flex-direction: row;
    }
</style>
