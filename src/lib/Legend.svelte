<script>
    import Tile from "./Tile.svelte";
</script>

<div class="legend-container">
    <div class="legend-item">
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" x="0" y="0" fill="white" />
        </svg>
        <div>Empty</div>
    </div>
    <div class="legend-item">
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" x="0" y="0" fill="orange" />
        </svg>
        <div>Fire</div>
    </div>
    <div class="legend-item">
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" x="0" y="0" fill="green" />
        </svg>
        <div>Forest</div>
    </div>
    <div class="legend-item">
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" x="0" y="0" fill="lightgrey" />
        </svg>
        <div>Weak Smoke</div>
    </div>
    <div class="legend-item">
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" x="0" y="0" fill="darkgrey" />
        </svg>
        <div>Medium Smoke</div>
    </div>
    <div class="legend-item">
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" x="0" y="0" fill="grey" />
        </svg>
        <div>Heavy Smoke</div>
    </div>

    <div class="legend-item">
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" x="0" y="0" fill="blue" />
        </svg>
        <div>City</div>
    </div>
</div>

<style>
    .legend-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .legend-container {
        display: flex;
        flex-direction: row;
        align-items: top;
        justify-content: center;
        gap: 10px;
        width: 350px;
        flex-wrap: wrap;
        margin: auto;
        border: black 1px solid;
        border-radius: 5px;
        background-color: rgb(235, 235, 235);
    }
    svg {
        border: black 1px solid;
        margin: 2px;
    }
</style>
