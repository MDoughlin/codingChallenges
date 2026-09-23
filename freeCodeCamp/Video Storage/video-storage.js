function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  if (driveUnit !== "TB" && driveUnit !== "GB") return "Invalid drive unit";
  if (videoUnit === "TB") return "Invalid video unit";

  let b = 1;
  let kb = 1000;
  let mb = 1000 * kb;
  let gb = 1000 * mb;
  let tb = 1000 * gb;

  let driveInBytes;

  if (driveUnit === "GB") {
    driveInBytes = driveSize * gb;
  } else {
    driveInBytes = driveSize * tb;
  }

  let videoInBytes;

  if (videoUnit === "KB") {
    videoInBytes = videoSize * kb;
  } else if (videoUnit === "MB") {
    videoInBytes = videoSize * mb;
  } else if (videoUnit === "GB") {
    videoInBytes = videoSize * gb;
  } else if (videoUnit === "TB") {
    videoInBytes = videoSize * tb;
  }

  return Math.floor(driveInBytes / videoInBytes);
}
/*
(drivesize * driveunit) / (videosize * videounit)
  P -
  R - number
  E - to the left
  P
  - convert everything to the same
  1b = 1b
  1kb = 1000b
  1mb = 1000000b
  1 gb = 1000000b * 1000
  1tb = gb * 1000

  if drive not TB or GB return error
  if video unit is 1b return error


*/
