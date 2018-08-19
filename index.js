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
    return ((start - destination) * 264)
  } else (start < destination) {
    return ((destinationBlock - beginningBlock) * 264)
  }
}
