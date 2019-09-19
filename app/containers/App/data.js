export default {
  Items: [
    {
      id: 'qwerqwer',
      name: 'Bed',
      shortName: 'bed',
      HP: 300,
      text:
        'The bed can be used as a spawn point, just like the sleeping bag, but it has reduced cooldown use; instead of waiting 5 minutes like the Sleeping Bag, you just wait 2 minutes.',
      respawnTimer: 2,
      identifier: -1273339005,
      stackSize: 1,
      despawnTime: 20,
      loot: [
        {
          container: 'Sunken Chest',
          condition: '-',
          amount: 1,
          chance: 1,
        },
        {
          container: 'Crate',
          condition: '-',
          amount: 1,
          chance: 1,
        },
        {
          container: 'Oil Rig Scientist',
          condition: '-',
          amount: 1,
          chance: 0.3,
        },
      ],
    },
    {
      id: 'lkjhsdlfkg',
      name: 'Chair',
      HP: 100,
      shortName: 'chair',
      text:
        'The chair is normally made for decorative purpose. But you can mount it to receive 100% comfort. Hover over it and press the E key to mount it and press the space bar to dismount it.',
      identifier: 1534542921,
      stackSize: 1,
      despawnTime: 5,
      loot: [
        {
          container: 'Sunken Chest',
          condition: '-',
          amount: 1,
          chance: 1,
        },
        {
          container: 'Crate',
          condition: '-',
          amount: 1,
          chance: 1,
        },
        {
          container: 'Oil Rig Scientist',
          condition: '-',
          amount: 1,
          chance: 0.2,
        },
      ],
    },
    {
      id: 'zxcvzcxvzxcv',
      name: 'Bota Bag',
      shortName: 'botabag',
      text:
        'The Bota Bag is a handmade pouch for the collection and transportation of drinkable water.',
      capacity: 500,
      identifier: 613961768,
      stackSize: 1,
      despawnTime: 5,
    },
  ],
  Weapons: [
    {
      id: 'fghjfghjfghj',
      name: 'Assault Rifle',
      shortName: 'rifle.ak',
      text:
        'The Assault Rifle is an accurate, powerful, and fully automatic rifle that fires 5.56 rifle rounds. It has a moderate rate of fire which allows for proficiency at close to medium range.',

      damage: 50,
      rateOfFire: 450,
      aimCone: 0.2,
      capacity: 30,
      reload: 4.4,
      draw: 1,
      loot: [
        {
          container: 'Locked Crate',
          condition: 100,
          amount: 1,
          chance: 19,
        },
        {
          container: 'APC Crate',
          condition: 100,
          amount: 1,
          chance: 3,
        },
        {
          container: 'Elite Tier Crate',
          condition: 10 - 20,
          amount: 1,
          chance: 3,
        },
        {
          container: 'Supply Drop',
          condition: 100,
          amount: 1,
          chance: 3,
        },
        {
          container: 'Heavy Scientist',
          condition: 100,
          amount: 1,
          chance: 1,
        },
        {
          container: 'Helicopter Crate',
          condition: 100,
          amount: 1,
          chance: 1,
        },
      ],
    },
    {
      id: 'ertyoertywte',
      name: 'M249',
      shortName: 'm249',
      text:
        'A military-grade Light Machine Gun that only spawns in helicopter crates and Bradly APC, the M249 holds the most bullets in-game out of all the guns, with a magazine capacity of 100. Does an extremely high amount of damage with a high rate of fire and is extremely accurate, but has a large amount of recoil. Melts Everybody.',
      damage: 65,
      rateOfFire: 500,
      aimCone: 0.2,
      capacity: 100,
      reload: 7.5,
      draw: 1.8,
      loot: [
        {
          container: 'Helicopter Crate',
          condition: 100,
          amount: 1,
          chance: 10,
        },
        {
          container: 'APC Crate',
          condition: 100,
          amount: 1,
          chance: 6,
        },
      ],
    },
    {
      id: 'qwerqwertyy',
      name: 'Semi-Automatic Rifle',
      shortName: 'rifle.semiauto',
      text:
        'The Semi-Automatic Rifle is a staple of low quality weapons due to its high cost-efficiency. With its medium-tier damage, comparatively low recoil and high accuracy, the Semi-Automatic Rifle is the jack of all trades, but master of none.',
      damage: 40,
      rateOfFire: 400,
      aimCone: 0.75,
      capacity: 10,
      reload: 2.9,
      draw: 0.5,
      loot: [
        {
          container: 'Locked Crate',
          condition: 100,
          amount: 1,
          chance: 3,
        },
        {
          container: 'Military Crate',
          condition: 10 - 20,
          amount: 1,
          chance: 1,
        },
        {
          container: 'Elite Tier Crate',
          condition: 10 - 20,
          amount: 1,
          chance: 2,
        },
        {
          container: 'Oil Rig Scientist',
          condition: 100,
          amount: 1,
          chance: 0.2,
        },
        {
          container: 'Heavy Scientist',
          condition: 100,
          amount: 1,
          chance: 0.1,
        },
      ],
    },
  ],
  Food: [
    {
      id: 'sdfgsdfghu7u7urtv',
      name: 'Apple',
      shortName: 'apple',
      text:
        'The apple is a food that gives the player food and water. Unlike most other foods the apple gives lots more hydration when consumed. Can be found in food crates and medical crates.',
      identifier: 1548091822,
      stackSize: 10,
      despawnTime: 5,
      calories: +30,
      hydration: +15,
      health: +2,
      loot: [
        {
          container: 'Food Crate',
          condition: '-',
          amount: 1 - 3,
          chance: 21,
        },
        {
          container: 'Ration Box',
          condition: '-',
          amount: 1 - 2,
          chance: 21,
        },
      ],
    },
    {
      id: 'htjtjtjyj',
      name: 'Chocholate Bar',
      shortName: 'chocholate',
      text:
        'Chocolate Bar found as loot. Eating it provides a small boost to health, hunger, and thirst.',
      identifier: 363467698,
      stackSize: 10,
      despawnTime: 5,
      calories: +100,
      hydration: +1,
      healthOverTime: +2,
      loot: [
        {
          container: 'Food Crate',
          condition: '-',
          amount: 1 - 3,
          chance: 21,
        },
        {
          container: 'Ration Box',
          condition: '-',
          amount: 1 - 2,
          chance: 21,
        },
      ],
    },
  ],
};
