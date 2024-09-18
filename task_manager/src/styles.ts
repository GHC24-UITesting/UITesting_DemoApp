import { makeStyles, tokens } from "@fluentui/react-components";

const flex = {
    gap: "16px",
    display: "flex",
};

export const landingStyles = makeStyles({
    parent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
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
      width: "60%"
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
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 1000,
      paddingTop: "10px"
    }
});