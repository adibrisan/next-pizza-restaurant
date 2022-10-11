function truncateCharCount(text, length) {
  if (text.length > length) {
    return text.substr(0, length) + "...";
  }

  return text;
}

export default truncateCharCount;
