let colors = {
  'gray': '#A0AEC0',
  'green': '#48BB78',
  'orange': '#ED8936',
  'red': '#F56565',
}

export function getColor(data) {
  let attempts = data[0];
  let total = data[1];
  
  if (total === 0) {
    return colors.gray;
  }
  
  let percent = attempts/total;
  if (percent < 0.3333) {
    return colors.green
  } else if (percent < 0.6667) {
    return colors.orange
  } else {
    return colors.red
  }
}