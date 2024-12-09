<script>
  import Grid from "./lib/Grid.svelte";
  import InfoPanel from "./lib/InfoPanel.svelte";
  import Legend from "./lib/Legend.svelte";
  import SignUp from "./lib/SignUp.svelte";
  import Tile from "./lib/Tile.svelte";
  import TileSelector from "./lib/TileSelector.svelte";
</script>

<main>
  <div class="top">
    <div class="left">
      <InfoPanel></InfoPanel>
    </div>
    <div class="right">
      <h1 id="map-title">Map</h1>
      <Grid></Grid>
      <TileSelector></TileSelector>
      <Legend></Legend>
      <div>One square represents one square mile of land</div>
    </div>
  </div>
  <div class="bottom"><SignUp></SignUp></div>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3%;
    width: 100%;
    flex-wrap: wrap;
  }
  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3%;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }
  .bottom {
    display: flex;
    flex-basis: 1500px;
    min-width: 800px;
    flex-direction: column;
    justify-content: space-around;
    background-color: whitesmoke;
    border-radius: 10px;
    border: black 5px solid;
    padding: 10px;
  }
  .left {
    display: flex;
    flex-basis: 500px;
    min-width: 800px;
    flex-direction: column;
    min-height: 90%;
    /* justify-content: space-around; */
    background-color: whitesmoke;
    border-radius: 10px;
    border: black 5px solid;
    padding: 10px;
  }
  .right {
    display: flex;
    flex-basis: 600px;
    min-width: 550px;
    flex-direction: column;
    background-color: whitesmoke;
    border-radius: 10px;
    border: black 5px solid;
    min-height: 90%;
    padding: 10px;
  }
  .right-left,
  .right-right {
    display: flex;
    flex-direction: column;
  }

  .right {
    align-items: center;
    justify-content: center;
  }

  #map-title {
    margin: 0;
    padding: 0;
  }

  :root {
    background: linear-gradient(
      to bottom right,
      rgb(147, 255, 147),
      rgb(97, 52, 33)
    );
  }

  :global(body) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    min-width: 320px;
    min-height: 100vh;
  }

  :global(#app) {
    /* align-items: start; */
    display: flex;
    position: fixed;
    gap: 20px;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    box-sizing: border-box;
    flex-direction: row;
    padding: 20px;
    margin: 0;
    text-align: center;
    overflow-y: auto;
  }
</style>
