export const mapTimeString = timestamp => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return `${interval} год`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} мес`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} дан/а`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} ч.`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} мин.`;
    }
    return `${Math.floor(seconds)} сек.`;
  };