function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks (blockNumber) * 264;
}

function distanceTravelledInFeet (start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice (feet) {
  if (feet <= 400) {
    return "Free ride!";
  }
  else if (400 < feet && feet > 2000) {
    return (.02 * feet);
  }
  else if (2000 < feet && feet > 2500) {
    return "Standard rate applies.";
  }
  else {
    return "Cannot travel that far"
  }
}
