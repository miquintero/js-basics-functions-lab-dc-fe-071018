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

function distanceTravelledInFeet (beginningBlock, destinationBlock) {
  if (beginningBlock > destinationBlock) {
    return ((beginningBlock - destinationBlock) * 264)
  } else (beginningBlock < destinationBlock) {
    return ((destinationBlock - beginningBlock) * 264)
  }
}
