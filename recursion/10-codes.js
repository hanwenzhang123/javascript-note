function sumNaturals (n, result = 0) {
  if (n <= 0) {
    return result;
  } else {
    return sumNatural(n-1, result + n);
  }
}

const output = sumNaturals(3)
//3+2+1+0=6
