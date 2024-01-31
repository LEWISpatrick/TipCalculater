  // Get global access to all inputs / divs here (you'll need them later 😘)
  // bill input, tip input, number of people div, and per person total div
  const billInput = document.getElementById('billTotalInput')
  const tipInput = document.getElementById('tipInput')
  const numberOfPeopleDiv = document.getElementById('numberOfPeople')
  const perPersonTotalDiv = document.getElementById('perPersonTotal')

  // Get number of people from number of people div
  let numberOfPeople = Number(numberOfPeopleDiv.innerText)

  // ** Calculate the total bill per person **
  const calculateBill = () => {
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value);

    // get the tip from user & convert it into a percentage (divide by 100)
    const tipPercent = Number(tipInput.value) / 100;
    console.log(tipPercent);

    // get the total tip amount
    const totalTipAmount = tipPercent * bill;
    console.log({ totalTipAmount });

    // calculate the total (tip amount + bill)
    const totalCost = totalTipAmount + bill
    console.log({ totalCost })
    // calculate the per person total (total divided by number of people)
    const perPersonTotalCost = totalCost / numberOfPeople
    console.log({ perPersonTotalCost })

    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotalCost.toFixed(2)}`
  }

  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeople += 1

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
  }

  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (numberOfPeople <= 1) {
      throw "hey! you can't have less than 1 person!"
    }

    // decrement the amount of people
    numberOfPeople -= 1

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
  }
