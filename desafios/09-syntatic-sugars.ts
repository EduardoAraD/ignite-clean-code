function getFirstFiveRatings(ratings: string[]) {
  return ratings.length >= 5 && ratings.slice(0, 5)
}

function sumFirstFiveRatings(ratings: string[]) {
  const ratingsBool = Boolean(ratings)

  if (ratingsBool) {
    const firstFiveRatings = getFirstFiveRatings(ratings)

    const isRatingSmallFiveElements = !Boolean(firstFiveRatings)
    if (isRatingSmallFiveElements) return { error: 'there must be at least 5 ratings' }

    let ratingsSum = 0;

    for (const rating of firstFiveRatings) {
      ratingsSum = ratingsSum + Number(rating)
    }

    return { ratingsSum, created_at: new Date().getTime() }
  }

  return { error: 'ratings is required' }
}

const appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
sumFirstFiveRatings(appRatings)