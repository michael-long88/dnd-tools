let lodging = {
  title: 'Lifestyles Expenses',
  itemHeader: 'Lifestyle',
  priceHeader: 'Price/Day',
  items: [
    {
      item: 'Wretched',
      price: '---',
      description: 'You live in inhumane conditions. With no place to call home, you shelter wherever you can, sneaking into barns, huddling in old crates, and relying ' +
        'on the good graces of people better off than you. A wretched lifestyle presents abundant dangers. Violence, disease, and hunger follow you wherever you go. Other ' +
        'wretched people covet your armor, weapons, and adventuring gear, which represent a fortune by their standards. You are beneath the notice of most people.'
    },
    {
      item: 'Squalid',
      price: '1 sp',
      description: 'You live in a leaky stable, a mud-floored hut just outside town, or a vermin-infested boarding house in the worst part of town. You have shelter from the ' +
        'elements, but you live in a desperate and often violent environment, in places rife with disease, hunger, and misfortune. Vou are beneath the notice of most people, ' +
        'and you have few legal protections. Most people at this lifestyle level have suffered some terrible setback. They might be disturbed, marked as exiles, or suffer from disease.'
    },
    {
      item: 'Poor',
      price: '2 sp',
      description: 'A poor lifestyle means going without the comforts available in a stable community. Simple food and lodgings, threadbare clothing, and unpredictable ' +
        'conditions result in a sufficient, though probably unpleasant, experience. Your accommodations might be a room in a flophouse or in the common room above ' +
        'a tavern. You benefit from some legal protections, but you still have to contend with violence, crime, and disease. People at this lifestyle levei tend to be ' +
        'unskilled laborers, costermongers, peddlers, thieves, mercenaries, and other disreputable types.'
    },
    {
      item: 'Modest',
      price: '1 gp',
      description: 'A modest lifestyle keeps you out of the slums and ensures that you can maintain your equipment. You live in an o1der part of town, renting a room in a ' +
        'boarding house, inn, or temple. Vou don\'t go hungry or thirsty, and your living conditions are clean, if simple. Ordinary people living modest lifestyles include soldiers ' +
        'with families, laborers, students, priests, hedge wizards, and the like.'
    },
    {
      item: 'Comfortable',
      price: '2 gp',
      description: 'Choosing a comfortable lifestyle means that you can afford nicer clothing and can easily maintain your equipment. You live in a small cottage ' +
        'in a middle-class neighborhood or in a private room at a fine inn. You associate with merchants, skilled tradespeople, and military officers.'
    },
    {
      item: 'Weallhy',
      price: '4 gp',
      description: 'Choosing a wealthy lifestyle means living a life of luxury, though you might not have achieved the social status associated with the old money of nobility ' +
        'or royalty. You live a lifestyle comparable to that of a highly successful merchant, a favored servant of the royalty, or the owner of a few small businesses. Vou ' +
        'have respectable lodgings, usually a spacious home in a good part of town or a comfortable suite at a fine inn. Vou likely have a small staff of servants.'
    },
    {
      item: 'Aristocratic',
      price: '10 gp minimum',
      description: 'You live a life of plenty and comfort. You move in circles populated by the most powerful people in the community. You have excellent lodgings, perhaps ' +
        'a townhouse in the nicest part of town or rooms in the finest inn. You dine at the best restaurants, retain the most skilled and fashionable tailor, and have servants ' +
        'attending to your every need. You receive invitations to the social gatherings of the rich and powerful, and spend evenings in the company of politicians, guild ' +
        'leaders, high priests, and nobility. You must also contend with the highest leveIs of deceit and treachery. The wealthier you are, the greater the chance you will ' +
        'be drawn into political intrigue as a pawn or participant.'
    }
  ]
}

let crafting = {
  title: 'Crafting Services',
  itemHeader: 'Crafting Level',
  priceHeader: 'Price/Day',
  gradeHeader: 'Item Grade',
  items: [
    {
      item: 'Untrained',
      price: '2 sp',
      grade: 'Common',
      description: 'The most basic level of skillfulness.'
    },
    {
      item: 'Trained',
      price: '2 gp',
      grade: 'Uncommon',
      description: 'A Trained individual has some training, but has not yet completed their apprenticeship.'
    },
    {
      item: 'Craftsman',
      price: '2 ep',
      grade: 'Rare',
      description: 'Someone who has completed their apprenticeship and is able to have their own shop.'
    },
    {
      item: 'Master',
      price: '2 pp',
      grade: 'Very Rare',
      description: 'Very few individuals reach this level of skill. Able to create very rare items, a master is worth their weight in platinum.'
    },
    {
      item: 'Artisan ',
      price: '20 pp',
      grade: 'Legendary',
      description: 'Typicall only 1 or 2 Artisans exist per region. Capable of crafting the highest level of equipment, they have no equals in their specific field.'
    }
  ]
}

let inn = {
  title: 'Inn Prices',
  itemHeader: 'Lifestyle',
  priceHeader: 'Price/Day',
  items: [
    {
      item: 'Squalid',
      price: '7 cp',
    },
    {
      item: 'Poor',
      price: '1 sp'
    },
    {
      item: 'Modest',
      price: '5 sp'
    },
    {
      item: 'Comfortable',
      price: '8 sp'
    },
    {
      item: 'Weallhy',
      price: '2 gp'
    },
    {
      item: 'Aristocratic',
      price: '4 gp'
    }
  ]
}

let meals = {
  title: 'Meal Prices',
  itemHeader: 'Lifestyle',
  priceHeader: 'Price/Day',
  items: [
    {
      item: 'Squalid',
      price: '3 cp',
    },
    {
      item: 'Poor',
      price: '6 cp'
    },
    {
      item: 'Modest',
      price: '3 sp'
    },
    {
      item: 'Comfortable',
      price: '5 sp'
    },
    {
      item: 'Weallhy',
      price: '8 sp'
    },
    {
      item: 'Aristocratic',
      price: '2 gp'
    }
  ]
}

let spellAttackFumble = {
  title: 'Spell Attack Fumble Table',
  rollHeader: 'Roll',
  descriptionHeader: 'Description',
  effectHeader: 'Effect',
  items: [
    {
      roll: '1',
      description: 'You are embarrassed by your poor showing, but nothing remarkable happens.',
      effect: 'You miss your attack.'
    },
    {
      roll: '2-5',
      description: 'You get wrapped up in your spellcasting and forget to watch your target.',
      effect: 'Your target has advantage on their first attack roll against you next round.'
    },
    {
      roll: '6-9',
      description: 'You get wrapped up in your spellcasting and forget to watch your surroundings.',
      effect: 'All enemies have advantage on their first attack roll against you next round.'
    },
    {
      roll: '10-14',
      description: 'You are so wrapped up in your spellcasting that you forget you are fighting a battle.',
      effect: 'All enemies have advantage on their attack rolls against you until the end of your next turn.'
    },
    {
      roll: '15-19',
      description: 'Your spell creates a large plume of smoke obscuring your location.',
      effect: 'The area in a 5 foot radius around your location becomes heavily obscured for 1 minute. A strong breeze can blow away the smoke in 1 round.'
    },
    {
      roll: '20-29',
      description: 'Your spell misfires knocking you over.',
      effect: 'You are knocked prone.'
    },
    {
      roll: '30-39',
      description: 'The spell fires in an unexpected manner, causing your confidence in your abilities to falter.',
      effect: 'You have disadvantage on any spell attacks, and enemies have advantage against your spell savings throws until the end of your next turn.'
    },
    {
      roll: '40-49',
      description: 'The placement of your spell startles your allies near your target, causing them to drop their guard.',
      effect: 'Your target is able to use their reaction to take an attack of opportunity on one of your allies in melee range.'
    },
    {
      roll: '50-59',
      description: 'You scramble the ingredients of your component pouch or your focus becomes overloaded with magical energy and temporarily stops working.',
      effect: 'You are unable to perform material components to cast spells until the end of your next turn.'
    },
    {
      roll: '60-69',
      description: 'Your arm cramps as you cast.',
      effect: 'You are unable to perform somatic components to cast spells until the end of your next turn.'
    },
    {
      roll: '70-79',
      description: 'You bite your tongue as you cast.',
      effect: 'You are unable to use verbal components to cast spells until the end of your next turn.'
    },
    {
      roll: '80-84',
      description: 'Your spell misfires and dazes you, causing you to lose track of the fight.',
      effect: 'End your turn and move to the bottom of the initiative order at the start of the next round.'
    },
    {
      roll: '85-89',
      description: 'Your spell misfires causing you to panic.',
      effect: 'End your current turn and you are surprised until the end of your next turn'
    },
    {
      roll: '90-94',
      description: 'Your spell backfires creating a small explosion causing you to fall and bump your head.',
      effect: 'You fall prone. Roll a DC 10 constitution save, on failure you take 1d6 bludgeoning damage and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious.'
    },
    {
      roll: '95-99',
      description: 'Your spell backfires creating a large explosion causing you to fall and bump your head.',
      effect: 'You fall prone. Roll a DC 15 constitution save, on failure you take 1d6 bludgeoning damage, 1d6 thunder damage, and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious.'
    },
    {
      roll: '100',
      description: 'Your spell completely backfires creating a large explosion causing you to fall and bump your head.',
      effect: 'You hit yourself with your spell. If the spell effect is instant you take the full effect. If the spell requires concentration the effect persists until the end of your next turn. You also fall prone, take 1d6 bludgeoning damage, 1d6 thunder damage, and become unconscious for 1 minute or until you receive damage from any source.'
    }
  ]
}

let weaponAttackFumble = {
  title: 'Weapon Attack Fumble Table',
  rollHeader: 'Roll',
  descriptionHeader: 'Description',
  effectHeader: 'Effect',
  items: [
    {
      roll: '1',
      description: 'You are embarrassed by your poor showing, but nothing remarkable happens.',
      effect: 'You miss your attack.'
    },
    {
      roll: '2-5',
      description: 'You lose your combat footing, exposing yourself to your target.',
      effect: 'Your target has advantage on their first attack roll against you next round.'
    },
    {
      roll: '6-9',
      description: 'You lose your combat footing, exposing yourself to your enemies.',
      effect: 'All enemies have advantage on their first attack roll against you next round.'
    },
    {
      roll: '10-14',
      description: 'You lose your combat footing, and have difficulty recovering.',
      effect: 'All enemies have advantage on their attack rolls against you until the end of your next turn.'
    },
    {
      roll: '15-19',
      description: '<b>Melee:</b> You get tangled with your enemy and fall over. <b>Ranged:</b> You spill your quiver.',
      effect: '<b>Melee:</b> You are knocked prone and your movement is reduced to 0. Your target must succeed a DC 10 dexterity check or they are also knocked prone. <b>Ranged:</b> You must pick up arrows individually from the ground using your “environmental interaction”, or the “Use an Object” action to nock your bow.'
    },
    {
      roll: '20-29',
      description: 'You lose your balance while attacking.',
      effect: 'You fall prone and your movement is reduced to 0.'
    },
    {
      roll: '30-39',
      description: 'As you attack your opponent you begin to fear that they are the superior combatant.',
      effect: 'Disadvantage on your next attack roll against your target.'
    },
    {
      roll: '40-49',
      description: 'You miss an attack and gaze upon the chaos of the battle, causing your confidence to falter.',
      effect: 'Disadvantage on your next attack roll against any target.'
    },
    {
      roll: '50-59',
      description: 'You lose your grip as you attack.',
      effect: 'Roll a DC 10 Dexterity Check, on failure you drop your weapon at your feet.'
    },
    {
      roll: '60-69',
      description: '<b>Melee:</b> The weapon slips from your hand as you attack. <b>Ranged:</b> Your ammunition gets lodged in its container.',
      effect: '<b>Melee:</b> Roll a DC 10 Dexterity Check, on failure you throw your weapon into your enemy’s space. DM determines where the item is thrown on large sized or greater creatures. <b>Ranged:</b> You must use an action to organize the ammunition in its case before you can make another ranged attack.'
    },
    {
      roll: '70-79',
      description: '<b>Melee:</b> You lunge past an enemy exposing yourself to his attack. <b>Ranged:</b> Your missile startles your allies near your target.',
      effect: '<b>Melee:</b> Enemy you were attacking is able to use their reaction to perform an attack of opportunity. <b>Ranged:</b> the target can perform an opportunity attack on any ally within melee range.'
    },
    {
      roll: '80-84',
      description: 'Missing what you thought was a critical blow causes you to panic.',
      effect: 'End your current turn and you are surprised until the end of your next turn.'
    },
    {
      roll: '85-89',
      description: 'You attack wildly and lose track of the fight around you.',
      effect: 'End your turn and move to the bottom of the initiative order at the start of the next round.'
    },
    {
      roll: '90-94',
      description: 'You lose your footing while attacking and fall to the ground bumping your head.',
      effect: 'You fall prone. Roll a DC 10 constitution save, on failure you take 1d6 bludgeoning damage and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious.'
    },
    {
      roll: '95-99',
      description: 'You lose your footing while attacking and fall head first.',
      effect: 'You fall prone. Roll a DC 15 constitution save, on failure you take 2d6 damage and are knocked unconscious for 1 minute or until you receive damage from any source. On success take half damage and you remain conscious.'
    },
    {
      roll: '100',
      description: 'You lose your footing while attacking and slam your head into the ground.',
      effect: 'You fall prone, take 3d6 damage, and become unconscious for 1 minute or until you receive damage from any source.'
    }
  ]
}

export { lodging, crafting, inn, meals, spellAttackFumble, weaponAttackFumble }