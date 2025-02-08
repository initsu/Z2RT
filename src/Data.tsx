export interface CheckOffType {
    img: string;
    imgChecked?: string;
    nn?: boolean; /* nearest neighbour image scaling */
    hue?: number; /* hue shift the image */
    saturation?: number; /* set image saturation */
}

export const BOSS_ARRAY: ReadonlyArray<CheckOffType> = [
    { img: "bosses/horsehead.png" },
    { img: "bosses/helmethead.png" },
    { img: "bosses/rebonack.png" },
    { img: "bosses/karock.png" },
    { img: "bosses/gooma.png" },
    { img: "bosses/barba.png" },
]
export const BOSS_ARRAY_START = 0;

export const PALACE_ITEM_ARRAY: ReadonlyArray<CheckOffType> = [
    { img: "item_available.png", imgChecked: "item_taken.png", nn: true, hue: 0, saturation: 0.3 },
    { img: "item_available.png", imgChecked: "item_taken.png", nn: true, hue: 183.5, saturation: 1 },
    { img: "item_available.png", imgChecked: "item_taken.png", nn: true, hue: 0, saturation: 1 },
    { img: "item_available.png", imgChecked: "item_taken.png", nn: true, hue: 266.2, saturation: 1 },
    { img: "item_available.png", imgChecked: "item_taken.png", nn: true, hue: 120.0, saturation: 1 },
    { img: "item_available.png", imgChecked: "item_taken.png", nn: true, hue: 354.3, saturation: 1 },
]
export const PALACE_ITEM_ARRAY_START = BOSS_ARRAY_START + BOSS_ARRAY.length;

export const WEST_ARRAY: ReadonlyArray<CheckOffType> = [
    { img: "locations_west/cave_01_magic_container.png" },
    { img: "locations_west/cave_02_trophy.png" },
    { img: "locations_west/cave_03_medicine.png" },
    { img: "locations_west/cave_04_heart_container.png" },
    { img: "locations_west/cave_05_west_pbag.png" },
    { img: "locations_west/grass.png", nn: true },
];
export const WEST_ARRAY_START = PALACE_ITEM_ARRAY_START + PALACE_ITEM_ARRAY.length;

export const EAST_ARRAY: ReadonlyArray<CheckOffType> = [
    { img: "locations_east/cave_06_east_1st_pbag.png" },
    { img: "locations_east/cave_07_east_2nd_pbag.png" },
    { img: "locations_east/desert.png", nn: true },
    { img: "locations_east/water.png", nn: true },
    { img: "locations_east/new_kasuto_lady.png" },
    { img: "locations_east/spell_tower.png" },
];
export const EAST_ARRAY_START = WEST_ARRAY_START + WEST_ARRAY.length;

export const DM_ARRAY: ReadonlyArray<CheckOffType> = [
    { img: "locations_dm/rock.png", nn: true },
    { img: "locations_dm/cave_hammer.png" },
]
export const DM_ARRAY_START = EAST_ARRAY_START + EAST_ARRAY.length;

export const MI_ARRAY: ReadonlyArray<CheckOffType> = [
    { img: "locations_mi/maze_island_drop_child.png" },
    { img: "locations_mi/maze_island_drop_magic_container.png" },
    { img: "locations_east/forest.png", nn: true },
    { img: "locations_east/three_eye_rock.png" },
]
export const MI_ARRAY_START = DM_ARRAY_START + DM_ARRAY.length;

export const ALL_CHECKOFFS: ReadonlyArray<CheckOffType> = [...BOSS_ARRAY, ...PALACE_ITEM_ARRAY, ...WEST_ARRAY, ...EAST_ARRAY, ...DM_ARRAY, ...MI_ARRAY];
