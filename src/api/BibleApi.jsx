const fetchParableVerses = async (reference, translation = "kjv") => {
  try {
    const response = await fetch(
      `https://bible-api.com/${encodeURIComponent(reference)}?translation=${translation}`
    );
    const data = await response.json();

    if (data.verses) {
      return data.verses.map((verse) => `[${verse.verse}] ${verse.text}`).join(" ");
    }
    return "Verses not found.";
  } catch (error) {
    console.error("Error fetching verses:", error);
    return "Error fetching verses.";
  }
};

export { fetchParableVerses };