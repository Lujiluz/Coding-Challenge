function getGrade(s1, s2, s3) {
  let avg = Math.round((s1 + s2 + s3) / 3);
  if (avg <= 100 && avg >= 90) {
    return 'A';
  } else if (avg < 90 && avg >= 80) {
    return 'B';
  } else if (avg < 80 && avg >= 70) {
    return 'C';
  } else if (avg < 70 && avg >= 60) {
    return 'D';
  } else if (avg < 60 && avg >= 0) {
    return 'F';
  } else {
    return 'value not valid';
  }
}

// Done by me🫡

// best practice

function getGradeBp(s1, s2, s3) {
  let avg = Math.round(s1 + s2 + s3) / 3;
  if (avg < 60) return 'F';
  else if (avg < 70) return 'D';
  else if (avg < 80) return 'C';
  else if (avg < 90) return 'B';
  else return 'A';
}
