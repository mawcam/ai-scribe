export const formatDate = (date: string) => {
  return new Date(date).toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const camelCaseToTitleWithSpaces = (str: string) => {
  return str.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
};

const isDate = (value: string) => {
  return !isNaN(new Date(value).getTime());
};

export const displayMetadataValue = (value: string) => {
  if (isDate(value)) {
    return formatDate(value);
  }

  return value;
};

export const getNotesCountLabel = (count: number) => {
  const label = "note";

  if (count === 1) {
    return `1 ${label}`;
  }

  return `${count} ${label}s`;
};
