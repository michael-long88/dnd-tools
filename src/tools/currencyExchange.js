import { exchangeRates } from './exchangeRates'


let isInt = (value) => {
  		return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10))
}

let scrubCoins = (coins) => {
  let scrubbedCoins = {}
  Object.keys(exchangeRates['coin']).forEach(coin => {
    if (isInt(coins[coin])) {
      scrubbedCoins[coin] = parseInt(coins[coin])
    } else {
      scrubbedCoins[coin] = 0
    }
  })
  return scrubbedCoins
}

let getDenominatorFromRate = (label) => {
  if (label.includes('/')) {
    return parseInt(label.split('/')[1])
  } else {
    return 1
  }
}

let calculateCoin = (toCoinType, fromCoinAmount, fromCoinType) => {
  let coinRate = exchangeRates['coin'][fromCoinType][toCoinType]['rate']
  return (fromCoinAmount * coinRate)
}

let calculateModCoin = (toCoinType, fromCoinAmount, fromCoinType) => {
  let denominator = getDenominatorFromRate(exchangeRates['coin'][fromCoinType][toCoinType]['label'])
  return (fromCoinAmount % denominator)
}

let exchange = (fromCoinAmount, fromCoinType, resultCoins, desiredCoins) => {
  let remainingCoins = fromCoinAmount
  for (let highestCoinType in exchangeRates['coin']) {
    if (desiredCoins.length > 0 && desiredCoins.indexOf(highestCoinType) == -1) {
      //This is not a desired coin
      continue
    }

    //If we're converting to the same coin type (i.e. cp to cp), then ignore calculations and just store it
    if ((fromCoinType === highestCoinType)) {
      resultCoins[fromCoinType] += remainingCoins
      return
    }

    //Convert to a higher coin type, if possible
    let quotient = Math.floor(calculateCoin(highestCoinType, remainingCoins, fromCoinType))
    remainingCoins = calculateModCoin(highestCoinType, remainingCoins, fromCoinType)
    resultCoins[highestCoinType] += quotient
  }
}

let optimalExchange = (coins, desiredCoins) => {
  if (!desiredCoins) {
    desiredCoins = []
  }

  //1. Init the base coin conversions to 0
  let results = {}
  Object.keys(exchangeRates['coin']).forEach(key => {
    results[key] = 0
  })

  let scrubbedCoins = scrubCoins(coins)

  //2. Convert the coins
  Object.keys(scrubbedCoins).forEach(coin => {
    if (scrubbedCoins[coin] > 0) {
      exchange(scrubbedCoins[coin], coin, results, desiredCoins)
    }
  })

  return results
}

let teamSplit = (partyMemCount, coins, desiredCoins) => {
  if (!desiredCoins) {
    desiredCoins = []
  }

  if (isInt(partyMemCount) && partyMemCount <= 1) {
    return [optimalExchange(coins)]
  }

  //1. Create a collection of all-zero results for all party members
  let coinsByMember = []
  for (let i = 0; i < partyMemCount; i++) {
    let allZeroCoins = {}
    Object.keys(exchangeRates['coin']).forEach(coin => {
      allZeroCoins[coin] = 0
    })
    coinsByMember.push(allZeroCoins)
  }

  //2. Scrub the coins so that it's all numbers
  let scrubbedCoins = scrubCoins(coins)

  let remainingCoinAmount = 0
  let remainingCoinType = null
  Object.keys(exchangeRates['coin']).forEach(coin => {
    //Take any remaining coins and either
    //A. exchange it to a lower coin value or
    //B. add any remaining coppers for further processing
    if (remainingCoinAmount > 0) {
      if (remainingCoinType === 'cp') {
        scrubbedCoins[coin] += remainingCoinAmount
      } else if (coin !== remainingCoinType) {
        let convertedValue = calculateCoin(coin, remainingCoinAmount, remainingCoinType)
        scrubbedCoins[coin] += convertedValue
      }
    }

    //Get the coins that evenly distribute and it to the results list
    let wholeCoins = Math.floor(scrubbedCoins[coin] / partyMemCount)
    for (let i = 0; i < partyMemCount; i++) {
      coinsByMember[i][coin] += wholeCoins
    }

    //Get the leftover coins that don't evenly distribute
    remainingCoinAmount = scrubbedCoins[coin] % partyMemCount
    remainingCoinType = coin

    //Add any remaining coppers that don't evenly distribute
    if (remainingCoinType === 'cp' && remainingCoinAmount > 0) {
      for (let i = 0; i < remainingCoinAmount; i++) {
        coinsByMember[i][remainingCoinType] += 1
      }
    }
  })

  //Optimize the remaining values
  for (let i = 0; i < coinsByMember.length; i++) {
    coinsByMember[i] = optimalExchange(coinsByMember[i], desiredCoins)
  }
  return coinsByMember
}

export {optimalExchange, teamSplit}