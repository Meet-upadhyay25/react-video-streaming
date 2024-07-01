export function timeAgo(dateString) {
    const now = new Date();
    const pastDate = new Date(dateString);
    const seconds = Math.floor((now - pastDate) / 1000);
  
    let interval = seconds / 31536000;
    if (interval > 1) {
      return `${Math.floor(interval)} years ago`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return `${Math.floor(interval)} months ago`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return `${Math.floor(interval)} days ago`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return `${Math.floor(interval)} hours ago`;
    }
    interval = seconds / 60;
    if (interval > 1) {
      return `${Math.floor(interval)} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
  }
  

 export function formatViews(number) {
    if (number < 1000) {
      return `${number} views`;
    } else if (number >= 1000 && number < 1000000) {
      return `${(number / 1000).toFixed(1)}K views`;
    } else if (number >= 1000000 && number < 1000000000) {
      return `${(number / 1000000).toFixed(1)}M views`;
    } else if (number >= 1000000000 && number < 1000000000000) {
      return `${(number / 1000000000).toFixed(1)}B views`;
    } else {
      return `${(number / 1000000000000).toFixed(1)}T views`;
    }
  }