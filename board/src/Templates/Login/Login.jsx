import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { createTheme } from "@mui/material/styles";
import { useColorScheme } from "@mui/material/styles";
//import { useColorSchemeShim } from 'docs/src/modules/components/ThemeContext';
import { ThemeContext } from "@emotion/react";
import { getDesignTokens, inputsCustomizations } from "./customTheme";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useNavigate } from "react-router";

const providers = [
  { id: "github", name: "GitHub" },
  { id: "google", name: "Google" },
  { id: "credentials", name: "Email and Password" },
];

export default function Login() {
  const { mode, systemMode } = useColorScheme();
  const calculatedMode = (mode === "system" ? systemMode : mode) ?? "light";
  const brandingDesignTokens = getDesignTokens(calculatedMode);
  const navigate = useNavigate();

  const signIn = async (provider, formData) => {
    const promise = new Promise((resolve) => {
      setTimeout(async () => {
        console.log(
          `Signing in with "${provider.name}" and credentials: ${formData.get("email")}, ${formData.get("password")}`,
        );
        const user = await signInWithEmailAndPassword(
          auth,
          formData.get("email"),
          formData.get("password"),
        );
        console.log(user);
        navigate("/");
        resolve({ error: `${provider.name} "is logedin" ` });
      }, 500);
    });
    return promise;
  };
  // preview-start
  const THEME = createTheme({
    ...brandingDesignTokens,
    palette: {
      ...brandingDesignTokens.palette,
      mode: calculatedMode,
    },
    components: {
      ...inputsCustomizations,
    },
  });
  // preview-end

  return (
    // preview-start
    <AppProvider theme={THEME}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        sx={{
          "& form > .MuiStack-root": {
            marginTop: "2rem",
            rowGap: "0.5rem",
          },
        }}
      />
    </AppProvider>
    // preview-end
  );
}
