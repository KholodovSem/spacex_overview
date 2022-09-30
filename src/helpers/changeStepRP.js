function changeStepRP(step) {
  switch (step) {
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 1;
    default:
      return;
  }
}

export default changeStepRP;
