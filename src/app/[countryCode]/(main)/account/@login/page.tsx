import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "S'identifier",
  description: "s'identifier à votre compte Zorya",
}

export default function Login() {
  return <LoginTemplate />
}
