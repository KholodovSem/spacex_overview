const labelRP = (step) => {
  switch (step) {
    case 1:
      return 'Step 1. Write your name';
    case 2:
      return 'Step 2. Write your email';
    case 3:
      return 'Step 3. Write your password';
    default:
      return;
  }
};

export default labelRP;
