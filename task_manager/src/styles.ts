import { makeStyles, tokens } from "@fluentui/react-components";

const flex = {
  gap: "16px",
  display: "flex",
};

export const landingStyles = makeStyles({
  main: {
    ...flex,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    ...flex,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },

  card: {
    width: "200px",
    maxWidth: "100%",
    height: "fit-content",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  smallRadius: { borderRadius: tokens.borderRadiusSmall },

  grayBackground: {
    backgroundColor: tokens.colorNeutralBackground3,
  },
  onboardButton: {
    position: "fixed",
    top: "10px",
    right: "10px",
    zIndex: 1000,
    paddingTop: "10px",
  },
});

export const useStylesForEvents = makeStyles({
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  input: {
    marginBottom: "20px",
  },
  dropdown: {
    marginBottom: "20px",
  },
  button: {
    marginBottom: "20px",
  },
  event: {
    marginBottom: "10px",
  },
});

export const taskPageStyles = makeStyles({
  parent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }, 
  
  container: {
    display: "flex",
    gap: "0px",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%"
  },

  main: {
      ...flex,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start"
  },

    col: {
      ...flex,
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%"
    },

    card: {
      width: "500px",
      maxWidth: "100%",
      height: "fit-content",
    }
});