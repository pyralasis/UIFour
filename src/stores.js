import { writable } from 'svelte/store';

export const Tiles = {
    EMPTY: 0,
    FOREST: 1,
    FIRE: 2,
    WEAK_SMOKE: 3,
    MEDIUM_SMOKE: 4,
    STRONG_SMOKE: 5,
    CITY: 6
}

class tileData {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.tileType = Tiles.EMPTY;

        this.smokeProgress = 0;
        this.fireProgress = 0;
    }

    isFire() {
        if (this.tileType == Tiles.FIRE) {
            return true;
        }
        return false;
    }

    isSmoke() {
        if (this.tileType == Tiles.WEAK_SMOKE) {
            return true;
        }
        if (this.tileType == Tiles.MEDIUM_SMOKE) {
            return true;
        }
        if (this.tileType == Tiles.STRONG_SMOKE) {
            return true;
        }
        if (this.smokeProgress > 100) {
            return true
        }
        return false;
    }
    isWeakSmoke() {
        if (this.tileType == Tiles.WEAK_SMOKE) {
            return true;
        }
        return false;
    }
    isMediumSmoke() {
        if (this.tileType == Tiles.MEDIUM_SMOKE) {
            return true;
        }
        return false;
    }
    isStrongSmoke() {
        if (this.tileType == Tiles.STRONG_SMOKE) {
            return true;
        }
        return false;
    }

    isCity() {
        if (this.tileType == Tiles.CITY) {
            return true;
        }
        return false;
    }

    isForest() {
        if (this.tileType == Tiles.FOREST) {
            return true;
        }
        return false;
    }

    isEmpty() {
        if (this.tileType == Tiles.EMPTY) {
            return true;
        }
        return false;
    }
}

export const GRIDSIZEX = 25;
export const GRIDSIZEY = 25;

class gridData {
    constructor() {
        this.grid = Array.from({ length: GRIDSIZEY }, () => new Array(GRIDSIZEX));

        for (let y = 0; y < GRIDSIZEY; y++) {
            for (let x = 0; x < GRIDSIZEX; x++) {
                this.grid[y][x] = new tileData(x, y);
            }
        }

        this.timeStep = 1000;
        this.fireSpreadRate = 5;
        this.smokeSpreadRate = 10;
    }

    changeTimeStep(newTimeStep) {
        this.timeStep = newTimeStep;
    }

    // Checks the north south east and west tiles to see if they are fire
    checkNeighboursFire(tileX, tileY) {
        let fireProgress = 0;
        // Up
        if (tileY - 1 >= 0 && this.grid[tileY - 1][tileX] && this.grid[tileY - 1][tileX].isFire()) {
            fireProgress += this.fireSpreadRate;
        }
        // Down
        if (tileY + 1 < GRIDSIZEY && this.grid[tileY + 1][tileX] && this.grid[tileY + 1][tileX].isFire()) {
            fireProgress += this.fireSpreadRate;
        }
        // Left
        if (tileX - 1 >= 0 && this.grid[tileY][tileX - 1] && this.grid[tileY][tileX - 1].isFire()) {
            fireProgress += this.fireSpreadRate;
        }
        // Right
        if (tileX + 1 < GRIDSIZEX && this.grid[tileY][tileX + 1] && this.grid[tileY][tileX + 1].isFire()) {
            fireProgress += this.fireSpreadRate;
        }
        return fireProgress;
    }

    // Checks the north south east and west tiles to see if they are fire or smoke
    checkNeighboursSmoke(tileX, tileY) {
        let smokeProgress = 0;
        // Up
        if (tileY - 1 >= 0 && this.grid[tileY - 1][tileX] && (this.grid[tileY - 1][tileX].isFire() || this.grid[tileY - 1][tileX].isSmoke())) {
            smokeProgress += this.smokeSpreadRate;
        }
        // Down
        else if (tileY + 1 < GRIDSIZEY && this.grid[tileY + 1][tileX] && (this.grid[tileY + 1][tileX].isFire() || this.grid[tileY + 1][tileX].isSmoke())) {
            smokeProgress += this.smokeSpreadRate;
        }
        // Left
        else if (tileX - 1 >= 0 && this.grid[tileY][tileX - 1] && (this.grid[tileY][tileX - 1].isFire() || this.grid[tileY][tileX - 1].isSmoke())) {
            smokeProgress += this.smokeSpreadRate;
        }
        // Right
        else if (tileX + 1 < GRIDSIZEX && this.grid[tileY][tileX + 1] && (this.grid[tileY][tileX + 1].isFire() || this.grid[tileY][tileX + 1].isSmoke())) {
            smokeProgress += this.smokeSpreadRate;
        }
        // else if (this.grid[tileY][tileX] > 0) {
        //     smokeProgress -= 10;
        // }
        return smokeProgress;
    }

    updateGrid() {
        // iterate through every tile
        let gridData = this.grid;
        for (let y = 0; y < GRIDSIZEY; y++) {
            for (let x = 0; x < GRIDSIZEX; x++) {
                let currentTile = gridData[y][x]
                // Check for Fire Progress
                if (currentTile.isForest()) {
                    currentTile.fireProgress += this.checkNeighboursFire(x, y);
                    if (currentTile.fireProgress >= 100) {
                        currentTile.tileType = Tiles.FIRE;
                    }
                }
                // Check for Smoke Progress
                if (currentTile.isEmpty) {
                    if (currentTile.smokeProgress < 300) {
                        currentTile.smokeProgress += this.checkNeighboursSmoke(x, y);
                    }
                    if (currentTile.isEmpty() && currentTile.smokeProgress >= 100) {
                        currentTile.tileType = Tiles.WEAK_SMOKE;
                    }
                    if (currentTile.isWeakSmoke() && !currentTile.isCity() && currentTile.smokeProgress >= 200) {
                        currentTile.tileType = Tiles.MEDIUM_SMOKE;
                    }
                    if (currentTile.isMediumSmoke() && currentTile.smokeProgress >= 300) {
                        currentTile.tileType = Tiles.STRONG_SMOKE;
                    }
                    // Check if City is affected
                }
            }
        }
        this.grid = gridData;
    }
}
export const gridMap = writable(new gridData)

export const selectedTileType = writable(Tiles.EMPTY)
