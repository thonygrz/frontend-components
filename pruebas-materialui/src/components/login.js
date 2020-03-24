import React, { Fragment } from "react";
import { makeStyles, withStyles, styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import logo from "../assets/baup2.PNG";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Creo mis componentes TextField customizados

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& input": {
      color: "white",
      fontFamily: "Montserrat"
    },
    "& label": {
      color: "white",
      fontFamily: "Montserrat"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        border: "2px solid #fcb526"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  }
})(TextField);

// Aquí le doy estilos al form, hubiera podido hacer estilos para ambos CssTextField si hubiera querido porque están dentro

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridGap: "5px",
    fontFamily: "Montserrat",

    gridTemplateRows: "repeat(2,1fr)"
  },
  margina: {
      margin: theme.spacing(5)
  }
}));

// Estilos de los iconos

const MyVisibility = styled(AccountCircle)({
  color: "white"
});

const MyLock = styled(LockOpenRoundedIcon)({
  color: "white"
});

// Estilos de los Typography

const styles = makeStyles({
  root: {
    background: "#fcb526",
    fontFamily: "Montserrat",
    color: "#1b3d6e"
  },
  typoStart: {
    color: "#fcb526",
    fontSize: "0.8rem",
    marginBottom: "40px",
    fontFamily: "Montserrat",
    justifySelf: "flex-start",
    '&:hover': {
      textDecoration: "underline"
    },
  },
  typoEnd: {
    color: "#fcb526",
    fontSize: "0.8rem",
    '&:hover': {
      textDecoration: "underline"
    },
    marginBottom: "40px",
    fontFamily: "Montserrat",
    justifySelf: "flex-end"
  }
});

const Login = props => {

  // Declaroambas variables de estilo

  const classes = useStyles();
  const classes2 = styles();

  return (
    <Fragment>
      <div className="padre">
        <div className="hijo">
          <img alt="" src={logo} />
          <form className={classes.root}>
            <CssTextField
              // className={classes.margina}
              label="Correo electrónico"
              variant="outlined"
              id="custom-css-outlined-input"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MyVisibility fontSize="default" />
                  </InputAdornment>
                )
              }}
            />
            <CssTextField
              // className={classes.margina}
              label="Contraseña"
              variant="outlined"
              id="custom-css-outlined-input"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MyLock fontSize="default" />
                  </InputAdornment>
                )
              }}
            />
            <div className="links">
              <Typography className={classes2.typoStart} href="/">
                ¿Olvidaste tu contraseña?
              </Typography>
              <Typography className={classes2.typoEnd} href="/">
                Regístrate
              </Typography>
            </div>
            <Button variant="contained" className={classes2.root}>
              Ingresar
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
