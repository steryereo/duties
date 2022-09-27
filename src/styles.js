export const textColors = {
  slate500: "#16171b",
  slate400: "#303140",
  slate300: "#434a67",
  slate200: "#4c5473",
  slate100: "#596280",
};

export const primaryColors = {
  teal500: "#09464d",
  teal400: "#0e6069",
  teal300: "#1e7b85",
  teal200: "#509ba8",
  teal100: "#e4f4f5",
  cabernet500: "#5d0534",
  cabernet400: "#87064b",
  cabernet300: "#a9085e",
  cabernet200: "#c20067",
  cabernet100: "#f9e2ee",
};

export const fillColors = {
  snow600: "#8a91a0",
  snow500: "#b7bdc9",
  snow400: "#cfd6e0",
  snow300: "#e3e6ef",
  snow200: "#f0f2f9",
  snow100: "#f9faff",
  midnight300: "#001b29",
  midnight200: "#00283d",
  midnight100: "#003451",
  sand400: "#eaded7",
  sand300: "#f1e9e4",
  sand200: "#f8f4f2",
  sand100: "#fbf9f8",
};

export const accentColors = {
  seafoam500: "#03665b",
  seafoam400: "#027f70",
  seafoam300: "#02a793",
  seafoam200: "#02b7a1",
  seafoam100: "#e3f6f4",
  tangerine500: "#ae5e01",
  tangerine400: "#e47b01",
  tangerine300: "#ed8f02",
  tangerine200: "#f0a534",
  tangerine100: "#fbedd8",
};

export const wrapper = {
  boxSizing: "border-box",
  "& *, & *:before, & *:after": {
    boxSizing: "inherit",
  },

  color: textColors.slate500,
  fontSize: 16,
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

export const card = {
  background: accentColors.tangerine100,
  border: `8px solid ${accentColors.tangerine200}`,
  borderRadius: 16,
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
  maxWidth: "100%",
  padding: 24,
  width: 800,
};

export const list = {
  listStyle: "none!important", // to override confluence
  margin: 0,
  padding: 0,
};

export const dutyItem = {
  width: "100%",
  display: "flex",
};

export const buttons = {
  marginTop: 24,
  textAlign: "center",
  width: "100%",
};

export const button = {
  background: primaryColors.teal300,
  fontSize: 16,
  fontWeight: "bold",
  borderRadius: 4,
  border: "2px solid transparent",
  color: "white",
  cursor: "pointer",
  display: "inline-block",
  minHeight: 40,
  padding: "8px 16px",

  "&:active, &:hover": {
    background: primaryColors.teal400,
    border: `2px solid ${primaryColors.teal500}`,
  },

  "&:disabled": {
    background: fillColors.snow200,
    border: `2px solid ${fillColors.snow400}`,
    color: fillColors.snow600,
    pointerEvents: "none",
  },
};

export const dutyLabel = {
  flex: "0 0 50%",
  fontWeight: "bold",
  textAlign: "right",
  paddingRight: 12,
};

export const person = {
  flex: "0 0 50%",
};

export const chosen = {
  fontWeight: "bold",
  color: accentColors.seafoam300,
};
