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

export { lodging, crafting, inn, meals }